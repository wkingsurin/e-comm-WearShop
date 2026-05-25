import { create } from "zustand";
import { IProduct } from "./ui.store";

interface SimilarState {
	similarProducts: IProduct[];
	isLoading: boolean;

	computeSimilarProducts: (
		currentProduct: IProduct,
		allProducts: IProduct[]
	) => void;
}

export const useSimilarStore = create<SimilarState>()((set) => ({
	similarProducts: [],
	isLoading: false,

	computeSimilarProducts: (currentProduct, allProducts) => {
		set({ isLoading: true });

		setTimeout(() => {
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
		}, 300);
	},
}));
