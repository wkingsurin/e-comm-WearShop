import { useProductPageStore } from "@/lib/store/product-page.store";

export default function useProduct() {
	const hasHydrated = useProductPageStore((s) => s._hasHydrated);
	const store = useProductPageStore();

	if (!hasHydrated) {
		return {
			product: null,
			setProduct: () => {},
		};
	}

	return { ...store };
}
