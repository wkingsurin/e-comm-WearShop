import { CartItemWithVariant } from "@/features/cart/types";

export function calculateTotals(items: CartItemWithVariant[]) {
	const totalItemsPrice = items.reduce(
		(sum, item) => sum + item.variant.price * item.quantity,
		0
	);

	const discountAmount = 0;
	const deliveryPrice = 0;

	return {
		totalItemsPrice,
		discountAmount,
		deliveryPrice,
		totalPrice: totalItemsPrice - discountAmount + deliveryPrice,
	};
}
