import { ICheckout } from "./types";

export const EMPTY_CHECKOUT: ICheckout = {
    address: "",
    city: "",
    country: "",
    postalCode: "",
    paymentMethod: null,
    deliveryMethod: null,
    customerName: "",
    createdAt: new Date(),
    updatedAt: new Date(),
};
