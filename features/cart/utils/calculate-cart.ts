import { ICartItem } from "../types";

export function calculateCart(items: ICartItem[]) {
	let totalItems = 0;

	let subtotal = 0;

	for (const item of items) {
		totalItems += item.quantity;
		subtotal += item.price * item.quantity;
	}

	return { totalItems, subtotal, total: subtotal };
}
