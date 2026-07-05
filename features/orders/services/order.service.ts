import { prisma } from "@/lib/prisma";
import {
	validateCart,
	validateCheckout,
	validateStock,
} from "./order.validation";
import { calculateTotals } from "./order.calculation";
import { createOrderEntity, createOrderItems } from "./order.factory";
import { decreaseStock } from "./stock.service";
import { clearCart } from "./cart.service";
import { Prisma } from "@/prisma/generated/prisma/client";
import { mapOrder } from "../mappers/map-order";

export async function createOrder(userId: string) {
	return prisma.$transaction(async (tx) => {
		const user = await tx.user.findUniqueOrThrow({ where: { id: userId } });

		const cart = await tx.cart.findUnique({
			where: { userId },
			include: {
				items: {
					include: {
						variant: {
							include: {
								color: { include: { images: true } },
								product: true,
							},
						},
					},
				},
			},
		});

		const checkout = await tx.checkout.findUnique({ where: { userId } });

		validateCart(cart);
		validateCheckout(checkout);
		validateStock(cart.items);

		const totals = calculateTotals(cart.items);

		const order = await createOrderEntity(tx, user, checkout, totals, userId);

		await createOrderItems(tx, order.id, cart.items);

		await decreaseStock(tx, cart.items);

		await clearCart(tx, cart.id);

		const createdOrder = await getOrderTx(tx, order.id);

		if (!createdOrder) {
			throw new Error("Order not created");
		}

		return createdOrder;
	});
}

export async function getOrders(userId: string) {
	const orders = await prisma.order.findMany({
		where: { userId },
		orderBy: { createdAt: "desc" },
		include: { items: true },
	});

	return orders.map(mapOrder);
}

export async function getOrder(userId: string, orderId: string) {
	const order = await prisma.order.findUniqueOrThrow({
		where: { userId, id: orderId },
		include: { items: true },
	});

	return mapOrder(order);
}

export async function getOrderTx(
	tx: Prisma.TransactionClient,
	orderId: string
) {
	return tx.order.findUnique({
		where: { id: orderId },
		include: { items: true },
	});
}

export async function cancelOrder(userId: string, orderId: string) {
	return prisma.$transaction(async (tx) => {
		const order = await tx.order.findUniqueOrThrow({
			where: { id: orderId },
			include: { items: true },
		});

		if (order.userId !== userId) {
			throw new Error("Forbidden");
		}

		if (order.status === "CANCELLED") {
			throw new Error("Order already cancelled");
		}

		await Promise.all(
			order.items.map((item) =>
				tx.variant.update({
					where: { id: item.variantId },
					data: {
						stock: { increment: item.quantity },
					},
				})
			)
		);

		return tx.order.update({
			where: { id: orderId },
			data: { status: "CANCELLED" },
		});
	});
}
