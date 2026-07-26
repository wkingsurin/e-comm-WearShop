import { IProduct } from "@/types/store/ui.types";
import { FavoriteMap } from "../types";

export async function getFavoritesMap(): Promise<FavoriteMap> {
    const response = await fetch("/api/favorites/map", {
        credentials: "include",
    });

    if (!response.ok) {
        throw new Error("Failed to fetch favorites map");
    }

    return response.json();
}

export async function getFavorites(): Promise<IProduct[]> {
    const response = await fetch("/api/favorites", { credentials: "include" });

    if (!response.ok) {
        throw new Error("Failed to fetch favorites");
    }

    return response.json();
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
