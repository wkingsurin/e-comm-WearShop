import { prisma } from "@/lib/prisma";
import { mapProduct } from "../app/mappers/map-product";

type getProductParams = {
	productSlug: string;
};

export async function getProduct(params: getProductParams) {
	const product = await prisma.product.findUnique({
		where: {
			slug: params.productSlug,
		},

		include: {
			brand: true,
			category: true,

			variants: {
				where: { isActive: true },
				orderBy: { size: "asc" },
			},
			productColors: { include: { images: true }, orderBy: { name: "asc" } },
		},
	});

	if (!product) {
		return null;
	}

	return mapProduct(product);
}
