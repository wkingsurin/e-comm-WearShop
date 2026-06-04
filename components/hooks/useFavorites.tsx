"use client";

import { IFavorite } from "@/app/types/store/favorites.types";
import { useFavoriteStore } from "@/lib/store/favorites.store";

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
