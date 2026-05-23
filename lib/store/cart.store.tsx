import { create } from "zustand";
import { persist } from "zustand/middleware";
import { IProduct } from "./ui.store";

export interface ICartItem extends IProduct {
	amount: number;
}
interface CartState {
	cartItemsIds: Record<string, string>;
	cartItems: Record<string, ICartItem>;
	cartTotal: number;
	_hasHydrated: boolean;

	addItem: (product: ICartItem) => void;
	removeItem: (product: ICartItem) => void;
	incrementItem: (product: ICartItem) => void;
	decrementItem: (product: ICartItem) => void;
	setHydrated: (state: boolean) => void;
}

export const useCartStore = create<CartState>()(
	persist(
		(set, get) => ({
			cartItemsIds: {},
			cartItems: {},
			cartTotal: 0,
			_hasHydrated: false,

			removeItem: (product) => {
				const id = product.id;

				set((state) => {
					const nextIds = { ...state.cartItemsIds };
					const nextItems = { ...state.cartItems };
					let nextTotal = state.cartTotal;

					const productTotalPrice = nextItems[id].amount * product.price;
					nextTotal -= productTotalPrice;

					delete nextIds[id];
					delete nextItems[id];

					return {
						cartItemsIds: nextIds,
						cartItems: nextItems,
						cartTotal: nextTotal,
					};
				});
			},
			addItem: (product) => {
				const id = product.id;

				set((state) => {
					const nextIds = { ...state.cartItemsIds };
					const nextItems = { ...state.cartItems };
					let nextTotal = state.cartTotal;

					nextIds[id] = id;
					nextItems[id] = product;
					nextTotal += product.price;

					return {
						cartItemsIds: nextIds,
						cartItems: nextItems,
						cartTotal: nextTotal,
					};
				});
			},
			incrementItem: (product) => {
				const id = product.id;

				set((state) => {
					const nextIds = { ...state.cartItemsIds };
					const nextItems = { ...state.cartItems };
					let nextTotal = state.cartTotal;

					nextItems[id] = { ...product, amount: nextItems[id].amount + 1 };
					nextTotal += product.price;

					return { cartItems: nextItems, cartTotal: nextTotal };
				});
			},
			decrementItem: (product) => {
				const id = product.id;

				set((state) => {
					const nextIds = { ...state.cartItemsIds };
					const nextItems = { ...state.cartItems };
					let nextTotal = state.cartTotal;

					if (product.amount === 1) return { cartTotal: nextTotal };

					nextItems[id] = { ...product, amount: nextItems[id].amount - 1 };
					nextTotal -= product.price;

					return { cartItems: nextItems, cartTotal: nextTotal };
				});
			},
			setHydrated: (state) => set({ _hasHydrated: state }),
		}),
		{
			name: "user-cart",
			onRehydrateStorage: (state) => {
				return () => state.setHydrated(true);
			},
		}
	)
);
