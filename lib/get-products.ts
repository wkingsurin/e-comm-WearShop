import { prisma } from "@/lib/prisma";
import { mapProduct } from "../app/mappers/map-product";
import { unstable_cache } from "next/cache";

type getProductsParams = {
    categorySlug?: string;
    brandSlug?: string;
    isNew?: boolean;
};

export async function getProducts(params?: getProductsParams) {
    return unstable_cache(
        async () => {
            const products = await prisma.product.findMany({
                where: {
                    ...(params?.categorySlug && {
                        category: {
                            slug: params.categorySlug,
                        },
                    }),
                    ...(params?.brandSlug && {
                        brand: {
                            slug: params.brandSlug,
                        },
                    }),
                    ...(params?.isNew !== undefined && {
                        isNew: params.isNew,
                    }),
                },
                include: {
                    brand: { select: { name: true, slug: true } },
                    category: { select: { name: true, slug: true } },
                    variants: {
                        where: {
                            isActive: true,
                        },
                        orderBy: [{ colorId: "asc" }, { size: "asc" }],
                        select: {
                            id: true,
                            sku: true,
                            colorId: true,
                            size: true,
                            stock: true,
                            price: true,
                            oldPrice: true,
                        },
                    },
                    productColors: {
                        orderBy: { name: "asc" },
                        select: {
                            id: true,
                            name: true,
                            slug: true,
                            images: { select: { id: true, src: true } },
                        },
                    },
                },
            });

            return products.map(mapProduct);
        },
        [
            "products",
            params?.categorySlug ?? "all",
            params?.brandSlug ?? "all",
            params?.isNew ? "new" : "all",
        ],
        { tags: ["products"], revalidate: 1 },
        // { tags: ["products"], revalidate: 60 * 60 },
    )();
}
