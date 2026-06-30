import { prisma } from "@/lib/prisma";
import { mapCartItem } from "../mappers/map-cart-item";
import { ICart } from "../types";
import { EMPTY_CART } from "../constants";
import { calculateCart } from "../utils/calculate-cart";

async function getCart(userId: string) {
	let cart = await prisma.cart.findUnique({ where: { userId } });

	if (!cart) {
		cart = await prisma.cart.create({ data: { userId } });
	}

	return cart;
}

export async function addToCart(
	userId: string,
	variantId: string,
	quantity: number
) {
	const cart = await getCart(userId);

	const cartItem = await prisma.cartItem.findUnique({
		where: {
			cartId_variantId: {
				cartId: cart.id,
				variantId,
			},
		},
	});

	if (!cartItem) {
		await prisma.cartItem.create({
			data: { cartId: cart.id, variantId, quantity },
		});

		return getCartItems(userId);
	}

	await ensureEnoughStock(variantId, cartItem.quantity + 1);

	await prisma.cartItem.update({
		where: { id: cartItem.id },
		data: {
			quantity: {
				increment: quantity,
			},
		},
	});

	return getCartItems(userId);
}

export async function getCartItems(userId: string): Promise<ICart> {
	const cart = await prisma.cart.findUnique({
		where: { userId },
		include: {
			items: {
				include: {
					variant: {
						include: {
							product: {
								include: {
									brand: true,
									category: true,
									productColors: { include: { images: true } },
								},
							},
						},
					},
				},
			},
		},
	});

	if (!cart) return EMPTY_CART;

	const items = cart.items.map(mapCartItem);

	return { items, ...calculateCart(items) };
}

export async function updateQuantity(
	userId: string,
	cartItemId: string,
	quantity: number
) {
	const cart = await getCart(userId);

	const item = await prisma.cartItem.findFirst({
		where: { id: cartItemId, cartId: cart.id },
	});

	if (!item) {
		throw new Error("Cart item not found");
	}

	await ensureEnoughStock(item.variantId, quantity);

	await prisma.cartItem.update({
		where: { id: cartItemId },
		data: { quantity },
	});

	return getCartItems(userId);
}

export async function removeItem(userId: string, cartItemId: string) {
	const cart = await getCart(userId);

	const item = await prisma.cartItem.findFirst({
		where: { id: cartItemId, cartId: cart.id },
	});

	if (!item) {
		throw new Error("Cart item not found");
	}

	await prisma.cartItem.delete({ where: { id: cartItemId } });

	return getCartItems(userId);
}

async function ensureEnoughStock(variantId: string, requestedQunatity: number) {
	const variant = await prisma.variant.findUnique({
		where: { id: variantId },
		select: { stock: true },
	});

	if (!variant) {
		throw new Error("Variant not found");
	}

	if (requestedQunatity > variant.stock) {
		throw new Error("Not enough stock");
	}

	return variant;
}
