import { FavoriteState } from "@/types/store/favorites.types";
import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useFavoriteStore = create<FavoriteState>()(
	persist(
		(set, get) => ({
			items: [],
			_hasHydrated: false,

			toggleFavorite: (product) => {
				set((state) => {
					const exists = state.items.some((item) => item.id === product.id);

					if (exists) {
						return {
							items: state.items.filter((item) => item.id !== product.id),
						};
					}

					return {
						items: [
							...state.items,
							{ ...product, createdAt: new Date().toISOString() },
						],
					};
				});
			},
			isFavorite: (id) => !!get().items.some((item) => item.id === id),

			setHydrated: (state) => set({ _hasHydrated: state }),
		}),
		{
			name: "user-favorites",
			onRehydrateStorage: (state) => {
				return () => state.setHydrated(true);
			},
		}
	)
);
