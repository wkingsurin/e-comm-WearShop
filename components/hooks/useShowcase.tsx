import { useShowcaseStore } from "@/lib/store/showcase.store";
import { IProduct } from "@/lib/store/ui.store";

export default function useShowcase() {
	const hasHydrated = useShowcaseStore((s) => s._hasHydrated);
	const store = useShowcaseStore();

	if (!hasHydrated) {
		return {
			products: [] as IProduct[],
			setProducts: () => [],
		};
	}

	return { ...store };
}
