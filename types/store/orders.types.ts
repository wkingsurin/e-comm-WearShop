import { ICartItem } from "@/features/cart/types";

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

export interface OrdersState {
	ordersIds: Record<string, string>;
	orders: Record<string, IOrder>;
	_hasHydrated: boolean;

	setHydrated: (state: boolean) => void;
	createOrder: (order: IOrder) => void;
	removeOrder: (state: IOrder) => void;
}
