import { mapProduct } from "@/app/mappers/map-product";
import { prisma } from "@/lib/prisma";

export async function searchProducts(query: string) {
    if (!query.trim()) return [];

    const products = await prisma.product.findMany({
        where: {
            OR: [
                { title: { contains: query, mode: "insensitive" } },
                { brand: { name: { contains: query, mode: "insensitive" } } },
                {
                    category: {
                        name: { contains: query, mode: "insensitive" },
                    },
                },
                {
                    variants: {
                        some: {
                            color: {
                                name: { contains: query, mode: "insensitive" },
                            },
                        },
                    },
                },
            ],
        },
        include: {
            brand: true,
            category: true,
            productColors: {
                include: { images: true },
            },
            variants: { include: { color: true } },
        },

        take: 8,
    });

    return products.map(mapProduct);
}
