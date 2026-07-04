import { IOrder } from "@/types/store/orders.types";

export async function createOrder() {
	const response = await fetch("/api/orders", {
		method: "POST",
	});

	if (!response.ok) {
		const error = await response.json();

		console.error(error);

		throw new Error(error.message);
	}

	return response.json();
}

export async function getOrders(): Promise<IOrder[]> {
	const response = await fetch("/api/orders", { credentials: "include" });

	if (!response.ok) {
		throw new Error("Failed to fetch orders");
	}

	return response.json();
}

export async function cancelOrder(orderId: string) {
	const response = await fetch("/api/orders/cancel", {
		method: "PATCH",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify({ orderId }),
	});

	if (!response.ok) {
		throw new Error("Failed to cancel order");
	}

	return response.json();
}
