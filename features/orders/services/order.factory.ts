import { Prisma, User } from "@/prisma/generated/prisma/client";
import { generateOrderNumber } from "./generate-order-number";
import { CartItemWithVariant } from "@/features/cart/types";
import { ValidCheckout } from "../types";

interface Totals {
	totalItemsPrice: number;
	discountAmount: number;
	deliveryPrice: number;
	totalPrice: number;
}

export function createOrderEntity(
	tx: Prisma.TransactionClient,
	user: User,
	checkout: ValidCheckout,
	totals: Totals,
	userId: string
) {
	return tx.order.create({
		data: {
			orderNumber: generateOrderNumber(),

			userId,

			status: "PENDING",

			customerName: user.name ?? userId,
			customerEmail: user.email,

			shippingAddress: checkout.address,
			shippingCity: checkout.city,
			shippingCountry: checkout.country,
			shippingPostalCode: checkout.postalCode,

			paymentMethod: checkout.paymentMethod,
			deliveryMethod: checkout.deliveryMethod,

			currency: "USD",

			...totals,

			isPaid: false,
		},
	});
}

export function createOrderItems(
	tx: Prisma.TransactionClient,
	orderId: string,
	items: CartItemWithVariant[]
) {
	return tx.orderItem.createMany({
		data: items.map((item) => ({
			orderId,

			productId: item.variant.productId,
			variantId: item.variantId,

			title: item.variant.product.title,

			sku: item.variant.sku,

			price: item.variant.price,

			quantity: item.quantity,

			selectedColor: item.variant.color.name,
			selectedSize: item.variant.size,

			image: item.variant.color.images[0].src ?? "",
		})),
	});
}
