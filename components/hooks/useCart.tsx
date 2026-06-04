import { ICartItem } from "@/app/types/store/cart.types";
import { IProduct } from "@/app/types/store/ui.types";
import { useCartStore } from "@/lib/store/cart.store";

export default function useCart() {
	const hasHydrated = useCartStore((s) => s._hasHydrated);
	const store = useCartStore();

	if (!hasHydrated) {
		return {
			cartItemsIds: {} as Record<string, string>,
			cartItems: {} as Record<string, IProduct>,
			cartItemsList: [] as ICartItem[],
			cartTotal: 0 as number,
			removeItem: () => {},
			addItem: () => {},
			incrementItem: () => {},
			decrementItem: () => {},
		};
	}
	return { ...store, cartItemsList: Object.values(store.cartItems || {}) };
}
