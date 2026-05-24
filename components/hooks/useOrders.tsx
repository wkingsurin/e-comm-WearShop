import { IOrder, useOrdersStore } from "@/lib/store/orders.store";

export default function useOrders() {
	const hasHydrated = useOrdersStore((s) => s._hasHydrated);
	const store = useOrdersStore();

	if (!hasHydrated) {
		return {
			ordersIds: {} as Record<string, string>,
			ordersItems: {} as Record<string, IOrder>,
			ordersItemsList: [],
			createOrder: () => {},
			removeOrder: () => {},
		};
	}

	return { ...store, ordersItemsList: Object.values(store.ordersItems || {}) };
}
