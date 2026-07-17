import { prisma } from "@/lib/prisma";
import { mapCartItem } from "../mappers/map-cart-item";
import { ICart } from "../types";
import { EMPTY_CART } from "../constants";
import { calculateCart } from "../utils/calculate-cart";

export async function addToCart(
    cartId: string,
    variantId: string,
    quantity: number,
) {
    let cartItem = await prisma.cartItem.findUnique({
        where: {
            cartId_variantId: {
                cartId: cartId,
                variantId,
            },
        },
    });

    if (!cartItem) {
        cartItem = await prisma.cartItem.create({
            data: { cartId: cartId, variantId, quantity },
        });

        return { cartItem };
    }

    await ensureEnoughStock(variantId, cartItem.quantity + 1);

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
                orderBy: { createdAt: "desc" },
                include: {
                    variant: {
                        include: {
                            product: {
                                select: {
                                    brand: {
                                        select: { name: true, slug: true },
                                    },
                                    category: {
                                        select: { name: true, slug: true },
                                    },
                                    productColors: {
                                        orderBy: { name: "asc" },
                                        select: {
                                            id: true,
                                            name: true,
                                            slug: true,
                                            images: {
                                                select: { id: true, src: true },
                                            },
                                        },
                                    },
                                    title: true,
                                    currency: true,
                                },
                            },
                        },
                    },
                },
            },
        },
    });

    console.log(`[getCartitems] cart:`, cart);

    if (!cart) return EMPTY_CART;

    const items = cart.items.map(mapCartItem);

    return { items, ...calculateCart(items) };
}

export async function updateQuantity(cartItemId: string, quantity: number) {
    const item = await prisma.cartItem.findFirst({
        where: { id: cartItemId },
    });

    if (!item) {
        throw new Error("Cart item not found");
    }

    await ensureEnoughStock(item.variantId, quantity);

    await prisma.cartItem.update({
        where: { id: cartItemId },
        data: { quantity },
    });

    return { cartItemId, quantity };
}

export async function removeItem(userId: string, cartItemId: string) {
    const item = await prisma.cartItem.findFirst({
        where: { id: cartItemId },
    });

    if (!item) {
        throw new Error("Cart item not found");
    }

    await prisma.cartItem.delete({ where: { id: cartItemId } });
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
