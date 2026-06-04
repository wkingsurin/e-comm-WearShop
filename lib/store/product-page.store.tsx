import { create } from "zustand";
import { persist } from "zustand/middleware";
import { ProductPageState } from "@/app/types/store/product-page.types";

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
