import { OrderStatus } from "@/prisma/generated/prisma/browser";
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

export const ORDER_STATUS_TRANSITIONS: Record<OrderStatus, OrderStatus[]> = {
    PENDING: [OrderStatus.PAID, OrderStatus.CANCELLED],

    PAID: [OrderStatus.PROCESSING, OrderStatus.CANCELLED],

    PROCESSING: [OrderStatus.SHIPPED, OrderStatus.CANCELLED],

    SHIPPED: [OrderStatus.DELIVERED],

    DELIVERED: [],

    CANCELLED: [],
};

export function canChangeOrderStatus(current: OrderStatus, next: OrderStatus) {
    return ORDER_STATUS_TRANSITIONS[current].includes(next);
}

export const ORDER_STATUS = {
    PENDING: {
        label: "Pending",
        color: "bg-yellow-500/75",
    },

    PAID: {
        label: "Paid",
        color: "bg-blue-500/75",
    },

    PROCESSING: {
        label: "Processing",
        color: "bg-indigo-500/75",
    },

    SHIPPED: {
        label: "Shipped",
        color: "bg-purple-500/75",
    },

    DELIVERED: {
        label: "Delivered",
        color: "bg-green-600/75",
    },

    CANCELLED: {
        label: "Cancelled",
        color: "bg-red-600/75",
    },
} satisfies Record<OrderStatus, { label: string; color: string }>;
