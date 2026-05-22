import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface IFavorite {
	id: string;
	title: string;
	image: string;
	category: string;
	size: string;
	color: string;
	price: number;
	currency: string;
}

interface FavoriteState {
	favoritesIds: Record<string, boolean>;
	favoritesItems: Record<string, IFavorite>;
	_hasHydrated: boolean;

	toggleFavorite: (product: IFavorite) => void;
	removeFavorite: (product: IFavorite) => void;
	isFavorite: (id: string) => boolean;
	setHydrated: (state: boolean) => void;
}

export const useFavoriteStore = create<FavoriteState>()(
	persist(
		(set, get) => ({
			favoritesIds: {},
			favoritesItems: {},
			_hasHydrated: false,

			toggleFavorite: (product) => {
				const id = product.id;
				const isFav = !!get().favoritesIds[id];

				set((state) => {
					const nextIds = { ...state.favoritesIds };
					const nextItems = { ...state.favoritesItems };

					if (isFav) {
						delete nextIds[id];
						delete nextItems[id];
					} else {
						nextIds[id] = true;
						nextItems[id] = product;
					}

					return { favoritesIds: nextIds, favoritesItems: nextItems };
				});
			},

			removeFavorite: (product) => {
				const id = product.id;
				const isFav = !!get().favoritesIds[id];

				set((state) => {
					const nextIds = { ...state.favoritesIds };
					const nextItems = { ...state.favoritesItems };

					if (isFav) {
						delete nextIds[id];
						delete nextItems[id];
					}

					return { favoritesIds: nextIds, favoritesItems: nextItems };
				});
			},

			isFavorite: (id) => !!get().favoritesIds[id],

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
