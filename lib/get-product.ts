import { prisma } from "@/lib/prisma";
import { mapProduct } from "../app/mappers/map-product";
import { unstable_cache } from "next/cache";

type getProductParams = {
    productSlug: string;
};

export async function getProduct(params: getProductParams) {
    return unstable_cache(
        async () => {
            const product = await prisma.product.findUnique({
                where: {
                    slug: params.productSlug,
                },

                include: {
                    brand: true,
                    category: true,

                    variants: {
                        where: { isActive: true },
                        orderBy: [{ colorId: "asc" }, { size: "asc" }],
                    },
                    productColors: {
                        include: { images: true },
                        orderBy: { name: "asc" },
                    },
                },
            });

            if (!product) {
                return null;
            }

            return mapProduct(product);
        },
        ["product", params.productSlug],
        { tags: ["product"], revalidate: 60 * 60 },
    )();
}
