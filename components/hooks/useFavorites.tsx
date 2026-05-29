"use client";

import { IFavorite, useFavoriteStore } from "@/lib/store/favorites.store";

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
