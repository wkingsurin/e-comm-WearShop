import { prisma } from "@/lib/prisma";
import { products } from "@/products";

export default async function seedColors() {
	const dbProducts = await prisma.product.findMany();

	const productMap = Object.fromEntries(
		dbProducts.map((product) => [product.slug, product.id])
	);

	for (const product of products) {
		const uniqueColors = [
			...new Map(
				product.variants.map((variant) => [variant.attributes.color, variant])
			).values(),
		];

		await prisma.productColor.createMany({
			data: uniqueColors.map((variant) => ({
				name: variant.attributes.color,
				slug: variant.attributes.color.toLowerCase(),
				productId: productMap[product.slug],
			})),
			skipDuplicates: true,
		});
	}
}
