import { ProductPageState } from "@/types/store/product-page.types";
import { create } from "zustand";
import { persist } from "zustand/middleware";

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
