import { prisma } from "@/lib/prisma";
import { mapProduct } from "../app/mappers/map-product";

type getProductsParams = {
	categorySlug?: string;
	brandSlug?: string;
	isNew?: boolean;
};

export async function getProducts(params?: getProductsParams) {
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
			brand: true,
			category: true,
			variants: {
				where: {
					isActive: true,
				},
				orderBy: { size: "asc" },
			},
			productColors: { include: { images: true }, orderBy: { name: "asc" } },
		},
	});

	return products.map(mapProduct);
}
