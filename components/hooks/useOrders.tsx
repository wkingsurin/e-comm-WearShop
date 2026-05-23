import { useOrdersStore } from "@/lib/store/orders.store";
import { IProduct } from "@/lib/store/ui.store";

export default function useOrders() {
	const hasHydrated = useOrdersStore((s) => s._hasHydrated);
	const store = useOrdersStore();

	if (!hasHydrated) {
		return {
			ordersIds: {} as Record<string, string>,
			ordersItems: {} as Record<string, IProduct>,
			ordersItemsList: [],
		};
	}

	return { ...store, ordersItemsList: Object.values(store.ordersItems || {}) };
}
