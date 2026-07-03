import { DeliveryMethod, PaymentMethod } from "@/prisma/generated/prisma/enums";

export interface ICheckout {
	address: string;
	city: string;
	country: string;
	postalCode: string;
	paymentMethod: PaymentMethod | null;
	deliveryMethod: DeliveryMethod | null;
}
