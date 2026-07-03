import { ICheckout } from "../types";
import { UpdateCheckoutDTO } from "../services/checkout.service";

export async function getCheckout(): Promise<ICheckout> {
	const response = await fetch("/api/checkout", { credentials: "include" });

	if (!response.ok) {
		throw new Error("Failed to fetch checkout");
	}

	return response.json();
}

export async function updateCheckout(data: UpdateCheckoutDTO) {
	const response = await fetch("/api/checkout", {
		method: "PATCH",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify(data),
	});

	if (!response.ok) {
		throw new Error("Falied to update checkout");
	}
}
