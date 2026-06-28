import { ICart } from "../types";

export async function getCart(): Promise<ICart> {
	const response = await fetch("/api/cart", { credentials: "include" });

	if (!response.ok) {
		throw new Error("Failed to fetch cart");
	}

	return response.json();
}

export async function addToCart(data: { variantId: string; quantity: number }) {
	const response = await fetch("/api/cart", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(data),
	});

	if (!response.ok) {
		throw new Error("Failed to add item");
	}
}
