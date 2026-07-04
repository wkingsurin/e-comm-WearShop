import { CartItemWithVariant, CartWithRelations } from "@/features/cart/types";
import { Checkout } from "@/prisma/generated/prisma/client";
import { ValidCheckout } from "../types";

export function validateCart(
	cart: CartWithRelations | null
): asserts cart is CartWithRelations {
	if (!cart) {
		throw new Error("Cart not found");
	}

	if (cart.items.length === 0) {
		throw new Error("Cart is empty");
	}
}

export function validateCheckout(
	checkout: Checkout | null
): asserts checkout is ValidCheckout {
	if (!checkout) {
		throw new Error("Checkout not found");
	}

	if (
		!checkout.address ||
		!checkout.city ||
		!checkout.country ||
		!checkout.postalCode
	) {
		throw new Error("Shipping address is incompatible");
	}

	if (!checkout.paymentMethod) {
		throw new Error("Select payment method");
	}

	if (!checkout.deliveryMethod) {
		throw new Error("Select delivery method");
	}
}

export function validateStock(items: CartItemWithVariant[]) {
	for (const item of items) {
		if (item.quantity > item.variant.stock) {
			throw new Error(`${item.variant.product.title} is out of stock`);
		}
	}
}
