import { IUser } from "./types";

export const EMPTY_USER_PROFILE: IUser = {
    id: "",
    name: "",
    email: "",
    createdAt: new Date(),
    address: {
        recipient: "",
        country: "",
        city: "",
        street: "",
        postalCode: "",
        phone: "",
        createdAt: new Date(),
        updatedAt: new Date(),
    },
};
