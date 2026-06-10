import { OrdersState } from "@/types/store/orders.types";
import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useOrdersStore = create<OrdersState>()(
	persist(
		(set) => ({
			ordersIds: {},
			orders: {},
			_hasHydrated: false,

			createOrder: (order) => {
				const id = order.id;

				set((state) => {
					const nextIds = { ...state.ordersIds };
					const nextOrders = { ...state.orders };

					nextIds[id] = id;
					nextOrders[id] = order;

					return { ordersIds: nextIds, orders: nextOrders };
				});
			},

			removeOrder: (order) => {
				const id = order.id;

				set((state) => {
					const nextIds = { ...state.ordersIds };
					const nextOrders = { ...state.orders };

					delete nextIds[id];
					delete nextOrders[id];

					return { ordersIds: nextIds, orders: nextOrders };
				});
			},

			setHydrated: (state) => set({ _hasHydrated: state }),
		}),
		{
			name: "user-orders",
			onRehydrateStorage: (state) => () => state.setHydrated(true),
		}
	)
);
