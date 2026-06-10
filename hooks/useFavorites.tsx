"use client";

import { useFavoriteStore } from "@/lib/store/favorites.store";
import { IFavorite } from "@/types/store/favorites.types";

export function useFavorites() {
	const hasHydrated = useFavoriteStore((s) => s._hasHydrated);
	const store = useFavoriteStore();

	if (!hasHydrated) {
		return {
			items: [] as IFavorite[],
			toggleFavorite: () => {},
			isFavorite: () => false,
		};
	}

	return { ...store };
}
