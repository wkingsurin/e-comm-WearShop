import { CartState } from "@/types/store/cart.types";
import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useCartStore = create<CartState>()(
	persist(
		(set) => ({
			cartItemsIds: {},
			cartItems: {},
			cartTotal: 0,
			_hasHydrated: false,

			removeItem: (product) => {
				const cartItemId = product.cartItemId;

				set((state) => {
					const nextIds = { ...state.cartItemsIds };
					const nextItems = { ...state.cartItems };
					let nextTotal = state.cartTotal;

					const productTotalPrice =
						nextItems[cartItemId].quantity * product.price;
					nextTotal -= productTotalPrice;

					delete nextIds[cartItemId];
					delete nextItems[cartItemId];

					return {
						cartItemsIds: nextIds,
						cartItems: nextItems,
						cartTotal: nextTotal,
					};
				});
			},
			addItem: (product) => {
				const cartItemId = product.cartItemId;

				set((state) => {
					const nextIds = { ...state.cartItemsIds };
					const nextItems = { ...state.cartItems };
					let nextTotal = state.cartTotal;

					nextIds[cartItemId] = product.cartItemId;
					nextItems[cartItemId] = product;
					nextTotal += product.price;

					return {
						cartItemsIds: nextIds,
						cartItems: nextItems,
						cartTotal: nextTotal,
					};
				});
			},
			incrementItem: (product) => {
				const cartItemId = product.cartItemId;

				set((state) => {
					const nextItems = { ...state.cartItems };
					let nextTotal = state.cartTotal;

					const nextQuantity = product.quantity + 1;

					if (nextQuantity <= product.maxStock) {
						nextItems[cartItemId] = { ...product, quantity: nextQuantity };
						nextTotal += product.price;
					}

					return { cartItems: nextItems, cartTotal: nextTotal };
				});
			},
			decrementItem: (product) => {
				const cartItemId = product.cartItemId;

				set((state) => {
					const nextItems = { ...state.cartItems };
					let nextTotal = state.cartTotal;

					const nextQuantity = product.quantity - 1;

					if (nextQuantity <= 0) return { cartTotal: nextTotal };

					nextItems[cartItemId] = {
						...product,
						quantity: nextQuantity,
					};
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
