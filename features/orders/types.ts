import {
	Checkout,
	DeliveryMethod,
	PaymentMethod,
} from "@/prisma/generated/prisma/client";

export type ValidCheckout = Checkout & {
	address: string;
	city: string;
	country: string;
	postalCode: string;
	deliveryMethod: DeliveryMethod;
	paymentMethod: PaymentMethod;
};
