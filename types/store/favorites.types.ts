export interface IFavorite {
	id: string;
	userId: string;
	productId: string;
	createdAt: string;
}

export interface FavoriteState {
	items: IFavorite[];
	_hasHydrated: boolean;

	toggleFavorite: (product: IFavorite) => void;
	isFavorite: (id: string) => boolean;
	setHydrated: (state: boolean) => void;
}
