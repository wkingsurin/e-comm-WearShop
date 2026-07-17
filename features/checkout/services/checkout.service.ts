import { prisma } from "@/lib/prisma";
import { DeliveryMethod, PaymentMethod } from "@/prisma/generated/prisma/enums";

export interface UpdateCheckoutDTO {
    address?: string;
    city?: string;
    country?: string;
    postalCode?: string;
    paymentMethod?: PaymentMethod | null;
    deliveryMethod?: DeliveryMethod | null;
}

export async function getCheckout(userId: string) {
    const checkout = await prisma.checkout.findUnique({
        where: { userId },
        select: {
            address: true,
            city: true,
            country: true,
            postalCode: true,

            paymentMethod: true,
            deliveryMethod: true,

            user: { select: { name: true } },

            createdAt: true,
            updatedAt: true,
        },
    });

    return {
        address: checkout?.address,
        city: checkout?.city,
        country: checkout?.country,
        postalCode: checkout?.postalCode,

        paymentMethod: checkout?.paymentMethod,
        deliveryMethod: checkout?.deliveryMethod,

        customerName: checkout?.user.name,

        createdAt: checkout?.createdAt,
        updatedAt: checkout?.updatedAt,
    };
}

export async function updateCheckout(userId: string, data: UpdateCheckoutDTO) {
    return prisma.checkout.upsert({
        where: { userId },
        update: data,
        create: { userId, ...data },
    });
}
