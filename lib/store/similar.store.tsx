import { create } from "zustand";
import { persist } from "zustand/middleware";
import { IProduct } from "./ui.store";

interface SimilarState {
	similarProducts: IProduct[];
	isLoading: boolean;
	_hasHydrated: boolean;

	setHydrated: (state: boolean) => void;
	computeSimilarProducts: (
		currentProduct: IProduct,
		allProducts: IProduct[]
	) => void;
}

export const useSimilarStore = create<SimilarState>()(
	persist(
		(set) => ({
			similarProducts: [],
			_hasHydrated: false,
			isLoading: false,

			computeSimilarProducts: (currentProduct, allProducts) => {
				const priceMargin = currentProduct.price * 0.2;
				const minPrice = currentProduct.price - priceMargin;
				const maxPrice = currentProduct.price + priceMargin;

				const filtered = allProducts.filter((product) => {
					return (
						product.category === currentProduct.category &&
						product.price >= minPrice &&
						product.price <= maxPrice &&
						product.id !== currentProduct.id
					);
				});

				const limitProducts = filtered.slice(0, 4);

				set({ similarProducts: limitProducts, isLoading: false });
			},
			setHydrated: (state) => set({ _hasHydrated: state }),
		}),
		{
			name: "similar-products",
			onRehydrateStorage: (state) => {
				return () => state.setHydrated(true);
			},
		}
	)
);
