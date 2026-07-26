import { mapProduct } from "@/app/mappers/map-product";
import { prisma } from "@/lib/prisma";
import { productInclude } from "@/types/prisma/includes";

export async function getLastSeen(userId: string) {
    const lastSeen = await prisma.lastSeenProduct.findMany({
        where: { userId },
        orderBy: { viewedAt: "desc" },
        take: 5,
        include: {
            product: {
                include: productInclude,
            },
        },
    });

    return lastSeen.map((item) => mapProduct(item.product));
}

export async function addLastSeen(userId: string, productId: string) {
    await prisma.lastSeenProduct.upsert({
        where: {
            userId_productId: {
                userId,
                productId,
            },
        },
        update: {
            viewedAt: new Date(),
        },
        create: { userId, productId },
    });
}
