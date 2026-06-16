import { prisma } from "@/lib/prisma";
import { products } from "@/products";

export async function seedProducts() {
	const brands = await prisma.brand.findMany();
	const categories = await prisma.category.findMany();

	const brandMap = Object.fromEntries(
		brands.map((brand) => [brand.slug, brand.id])
	);

	const categoriesMap = Object.fromEntries(
		categories.map((category) => [category.slug, category.id])
	);

	// Check slug duplicates
	// const slugMap = new Map<string, number>();

	// for (const product of products) {
	// 	slugMap.set(product.slug, (slugMap.get(product.slug) ?? 0) + 1);
	// }

	// console.log([...slugMap.entries()].filter(([_, count]) => count > 1));

	// Check sku dupliactes
	// const skus = products.flatMap((product) =>
	// 	product.variants.map((variant) => variant.sku)
	// );

	// const dupliactes = skus.filter((sku, index) => skus.indexOf(sku) !== index);
	// console.log(`[Duplicates SKUs]:`, dupliactes);

	await prisma.$transaction(async (tx) => {
		for (const product of products) {
			await tx.product.create({
				data: {
					title: product.title,

					slug: product.slug,

					description: product.description,

					currency: product.currency,

					isAvailable: product.isAvailable,

					isNew: product.isNew,

					brandId: brandMap[product.brand.slug],

					categoryId: categoriesMap[product.category.slug],

					variants: {
						create: product.variants.map((variant) => ({
							sku: variant.sku,

							price: variant.price,

							oldPrice: variant.oldPrice,

							stock: variant.stock,

							color: variant.attributes.color,

							size: variant.attributes.size,

							images: {
								create: variant.images.map((image) => ({
									src: image.src,
								})),
							},
						})),
					},
				},
			});
		}
	});
}
