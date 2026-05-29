import { create } from "zustand";
import { persist } from "zustand/middleware";
import { ICartItem } from "./cart.store";

export type OrderStatus =
	| "pending_payment"
	| "paid"
	| "processing"
	| "shipped"
	| "delivered"
	| "completed"
	| "cancelled"
	| "refunded";

export type PaymentMethod = "card_online" | "sbp" | "cash_on_delivery";

export type DeliveryMethod = "pickup_point" | "courier" | "post";

export interface IOrderAddress {
	country: string;
	city: string;
	street: string;
	house: string;
	apartment?: string;
	postalCode?: string;
	pickupPointId?: string;
}

export interface IOrderUser {
	userId?: string;
	firstName: string;
	lastName: string;
	email: string;
	phone: string;
}

export interface IOrder {
	id: string;
	orderNumber: string;
	createdAt: string;
	updatedAt: string;

	user: IOrderUser;
	deliveryMethod: DeliveryMethod;
	deliveryAddress: IOrderAddress;

	items: ICartItem[];

	currency: string;
	totalItemsPrice: number;
	discountAmount: number;
	deliveryPrice: number;
	totalPrice: number;

	status: OrderStatus;
	paymentMethod: PaymentMethod;
	isPaid: boolean;
	paymentId?: string;
}

interface OrdersState {
	ordersIds: Record<string, string>;
	orders: Record<string, IOrder>;
	_hasHydrated: boolean;

	setHydrated: (state: boolean) => void;
	createOrder: (order: IOrder) => void;
	removeOrder: (state: IOrder) => void;
}

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
