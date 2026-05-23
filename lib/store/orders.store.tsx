import { create } from "zustand";
import { persist } from "zustand/middleware";
import { IProduct } from "./ui.store";

interface OrdersState {
	ordersIds: Record<string, string>;
	ordersItems: Record<string, IProduct>;
	_hasHydrated: boolean;

	setHydrated: (state: boolean) => void;
}

export const useOrdersStore = create<OrdersState>()(
	persist(
		(set, get) => ({
			ordersIds: {},
			ordersItems: {},
			_hasHydrated: false,
      
			setHydrated: (state) => set({ _hasHydrated: state }),
		}),
		{
			name: "user-orders",
			onRehydrateStorage: (state) => () => state.setHydrated(true),
		}
	)
);
