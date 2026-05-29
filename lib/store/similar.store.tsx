import { create } from "zustand";
import { persist } from "zustand/middleware";
import { IProduct, IVariant } from "./ui.store";

interface SimilarState {
	similarProducts: IProduct[];
	_hasHydrated: boolean;

	setHydrated: (state: boolean) => void;
	computeSimilarProducts: (
		currentProduct: IProduct,
		currentVariant: IVariant,
		allProducts: IProduct[]
	) => void;
}

export const useSimilarStore = create<SimilarState>()(
	persist(
		(set) => ({
			similarProducts: [],
			_hasHydrated: false,

			computeSimilarProducts: (currentProduct, currentVariant, allProducts) => {
				const priceMargin = currentVariant.price * 0.2;
				const minPrice = currentVariant.price - priceMargin;
				const maxPrice = currentVariant.price + priceMargin;
				const LIMIT = 4;

				const filtered = allProducts.filter(
					(product) =>
						product.category.name === currentProduct.category.name &&
						product.variants[0].price >= minPrice &&
						product.variants[0].price <= maxPrice &&
						product.id !== currentProduct.id
				);

				const limitProducts = filtered.slice(0, LIMIT);

				set({ similarProducts: limitProducts });
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
