import { useOrdersStore } from "@/lib/store/orders.store";
import { IOrder } from "@/types/store/orders.types";

export default function useOrders() {
	const hasHydrated = useOrdersStore((s) => s._hasHydrated);
	const store = useOrdersStore();

	if (!hasHydrated) {
		return {
			ordersIds: {} as Record<string, string>,
			orders: {} as Record<string, IOrder>,
			ordersList: [] as IOrder[],
			createOrder: () => {},
			removeOrder: () => {},
		};
	}

	return { ...store, ordersList: Object.values(store.orders || {}) };
}
