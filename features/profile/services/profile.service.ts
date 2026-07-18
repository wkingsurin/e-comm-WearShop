import { prisma } from "@/lib/prisma";
import { mapUser } from "../mappers/map-user";

export async function getUserProfile(userId: string) {
    const user = await prisma.user.findFirst({
        where: { id: userId },
        select: {
            id: true,
            name: true,
            email: true,
            createdAt: true,
            address: {
                select: {
                    recipient: true,
                    country: true,
                    city: true,
                    street: true,
                    postalCode: true,
                    phone: true,
                    createdAt: true,
                    updatedAt: true,
                },
            },
        },
    });

    if (!user) {
        throw new Error("User not found");
    }

    return mapUser(user);
}

export async function updateUserAddress(
    userId: string,
    addressData: {
        recipient: string;
        country: string;
        city: string;
        street: string;
        postalCode: string;
        phone?: string;
    },
) {
    return prisma.userAddress.upsert({
        where: { userId },
        update: addressData,
        create: { userId, ...addressData },
    });
}

export async function updateUserProfile(userId: string, name: string) {
    return prisma.user.update({ where: { id: userId }, data: { name } });
}
