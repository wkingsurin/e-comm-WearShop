import { create } from "zustand";
import { persist } from "zustand/middleware";
import { IProduct } from "./ui.store";

interface ProductPageState {
	product: IProduct | null;
	_hasHydrated: boolean;

	setHydrated: (state: boolean) => void;
	setProduct: (product: IProduct | null) => void;
}

export const useProductPageStore = create<ProductPageState>()(
	persist(
		(set) => ({
			product: null,
			_hasHydrated: false,

			setProduct: (product) => set({ product: product }),
			setHydrated: (state) => set({ _hasHydrated: state }),
		}),
		{
			name: "user-product-page",
			onRehydrateStorage: (state) => {
				return () => state.setHydrated(true);
			},
		}
	)
);
