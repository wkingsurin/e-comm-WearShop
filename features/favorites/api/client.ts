import { FavoriteMap } from "../types";

export async function getFavorites(): Promise<FavoriteMap> {
	const res = await fetch("/api/favorites", { credentials: "include" });

	if (!res.ok) {
		throw new Error("Failed to fetch favorites");
	}

	return res.json();
}

export async function addFavorite(productId: string) {
	const response = await fetch("/api/favorites", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({ productId }),
	});

	if (!response.ok) {
		throw new Error("Failed to add favorite");
	}
}

export async function deleteFavorite(productId: string) {
	const response = await fetch(`/api/favorites?productId=${productId}`, {
		method: "DELETE",
	});

	if (!response.ok) {
		throw new Error("Failed to delete favorite");
	}
}

export async function toggleFavorite(productId: string) {
	const response = await fetch("/api/favorites/toggle", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({ productId }),
	});

	if (!response.ok) {
		throw new Error("Toggle failed");
	}

	return response.json() as Promise<{ isFavorite: boolean }>;
}
