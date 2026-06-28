import { prisma } from "@/lib/prisma";
import { mapCartItem } from "../mappers/map-cart-item";
import { ICart, ICartItem } from "../types";
import { EMPTY_CART } from "../constants";

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
		return prisma.cartItem.create({
			data: { cartId: cart.id, variantId, quantity },
		});
	}

	return prisma.cartItem.update({
		where: { id: cartItem.id },
		data: {
			quantity: {
				increment: quantity,
			},
		},
	});
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

function calculateCart(items: ICartItem[]) {
	const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);

	const subtotal = items.reduce(
		(sum, item) => sum + item.price * item.quantity,
		0
	);

	return { totalItems, subtotal, total: subtotal };
}
