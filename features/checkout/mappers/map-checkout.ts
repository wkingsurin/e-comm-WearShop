import { Checkout } from "@/prisma/generated/prisma/client";
import { ICheckout } from "../types";

export const mapCheckout = (checkout: Checkout): ICheckout => {
	const { address, city, country, postalCode, paymentMethod, deliveryMethod } =
		checkout;

	return {
		address: address ?? "",
		city: city ?? "",
		country: country ?? "",
		postalCode: postalCode ?? "",
		paymentMethod: paymentMethod ?? null,
		deliveryMethod: deliveryMethod ?? null,
	};
};
