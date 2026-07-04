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

export async function createOrder(userId: string) {
	return prisma.$transaction(async (tx) => {
		// const user = await tx.user.findUnique({ where: { id: userId } });
		const user = await tx.user.findUniqueOrThrow({ where: { id: userId } });

		// 1. get cart
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

		// 2. get checkout
		const checkout = await tx.checkout.findUnique({ where: { userId } });

		validateCart(cart);
		validateCheckout(checkout);
		validateStock(cart.items);

		const totals = calculateTotals(cart.items);

		const order = await createOrderEntity(tx, user, checkout, totals, userId);

		await createOrderItems(tx, order.id, cart.items);

		await decreaseStock(tx, cart.items);

		await clearCart(tx, cart.id);

		return getOrder(tx, order.id);
	});
}

export async function getOrders(userId: string) {
	return prisma.order.findMany({
		where: { userId },
		orderBy: { createdAt: "desc" },
		include: { items: true },
	});
}

export async function getOrder(tx: Prisma.TransactionClient, orderId: string) {
	return tx.order.findUnique({
		where: { id: orderId },
		include: { items: true },
	});
}

export async function cancelOrder(userId: string, orderId: string) {
	return prisma.$transaction(async (tx) => {
		// get order
		const order = await tx.order.findUnique({
			where: { id: orderId },
			include: { items: true },
		});

		// validate order
		if (order?.userId !== userId) {
			throw new Error("Forbidden");
		}

		if (order.status === "CANCELLED") {
			throw new Error("Order already cancelled");
		}

		// return product stock
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

		// clear order
		await tx.order.update({
			where: { id: orderId },
			data: { status: "CANCELLED" },
		});
	});
}
