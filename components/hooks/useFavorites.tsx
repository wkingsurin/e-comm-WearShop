"use client";

import { IFavorite, useFavoriteStore } from "@/lib/store/favorites.store";

export function useFavorites() {
	const hasHydrated = useFavoriteStore((s) => s._hasHydrated);
	const store = useFavoriteStore();

	if (!hasHydrated) {
		return {
			favoritesIds: {} as Record<string, boolean>,
			favoritesItems: {} as Record<string, IFavorite>,
			favoritesList: [] as IFavorite[],
			toggleFavorite: () => {},
			removeFavorite: () => {},
			isFavorite: () => false,
		};
	}

	return { ...store, favoritesList: Object.values(store.favoritesItems || {}) };
}
