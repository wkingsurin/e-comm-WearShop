import { IOrder } from "@/types/store/orders.types";

export const EMPTY_ORDERS: IOrder[] = [];
export const EMPTY_ORDER: IOrder = {
	id: "",
	orderNumber: "",
	createdAt: "",
	updatedAt: "",

	customer: {
		name: "",
		email: "",
	},

	shipping: {
		address: "",
		city: "",
		country: "",
		postalCode: "",
	},

	items: [],

	currency: "",

	totals: { items: 0, discount: 0, delivery: 0, total: 0 },

	status: "PENDING",

	payment: { method: "CARD", isPaid: false },
	delivery: { method: "COURIER" },
};
