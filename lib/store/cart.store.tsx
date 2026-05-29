import { create } from "zustand";
import { persist } from "zustand/middleware";
import { IProduct } from "./ui.store";

export interface ICartItem
	extends Pick<IProduct, "id" | "title" | "slug" | "currency"> {
	cartItemId: string;

	variantId: string;
	sku: string;

	price: number;
	oldPrice?: number;
	image: string;

	selectedColor: string;
	selectedSize: string;

	quantity: number;

	maxStock: number;

	brandName: string;
	categorySlug: string;
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
				const id = product.id;

				set((state) => {
					const nextItems = { ...state.cartItems };
					let nextTotal = state.cartTotal;

					nextItems[id] = { ...product, quantity: nextItems[id].quantity + 1 };
					nextTotal += product.price;

					return { cartItems: nextItems, cartTotal: nextTotal };
				});
			},
			decrementItem: (product) => {
				const id = product.id;

				set((state) => {
					const nextItems = { ...state.cartItems };
					let nextTotal = state.cartTotal;

					if (product.quantity === 1) return { cartTotal: nextTotal };

					nextItems[id] = { ...product, quantity: nextItems[id].quantity - 1 };
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
