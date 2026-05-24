import { create } from "zustand";
import { persist } from "zustand/middleware";
import { IProduct } from "./ui.store";

export interface IOrder extends IProduct {
	totalPrice: number;
}

interface OrdersState {
	ordersIds: Record<string, string>;
	ordersItems: Record<string, IOrder>;
	_hasHydrated: boolean;

	setHydrated: (state: boolean) => void;
	createOrder: (order: IOrder) => void;
	removeOrder: (state: IOrder) => void;
}

export const useOrdersStore = create<OrdersState>()(
	persist(
		(set, get) => ({
			ordersIds: {},
			ordersItems: {},
			_hasHydrated: false,

			createOrder: (order) => {
				const id = order.id;

				set((state) => {
					const nextIds = { ...state.ordersIds };
					const nextItems = { ...state.ordersItems };

					nextIds[id] = id;
					nextItems[id] = order;

					return { ordersIds: nextIds, ordersItems: nextItems };
				});
			},

			removeOrder: (order) => {
				const id = order.id;

				set((state) => {
					const nextIds = { ...state.ordersIds };
					const nextItems = { ...state.ordersItems };

					delete nextIds[id];
					delete nextItems[id];

					return { ordersIds: nextIds, ordersItems: nextItems };
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
