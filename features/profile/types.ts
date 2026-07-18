import { Prisma } from "@/prisma/generated/prisma/client";

export interface UpdateUserProfileDTO {
    name: string;
}

export interface UpdateUserAddressDTO {
    country: string;
    city: string;
    street: string;
    postalCode: string;
    phone?: string;
}

export interface IUser {
    id: string;
    name: string;
    email: string;
    createdAt: Date;
    address: {
        recipient: string;
        country: string;
        city: string;
        street: string;
        postalCode: string;
        phone?: string;
        createdAt: Date;
        updatedAt: Date;
    };
}

export type UserWithRelations = Prisma.UserGetPayload<{
    select: {
        id: true;
        name: true;
        email: true;
        createdAt: true;
        address: {
            select: {
                recipient: true;
                country: true;
                city: true;
                street: true;
                postalCode: true;
                phone: true;
                createdAt: true;
                updatedAt: true;
            };
        };
    };
}>;
