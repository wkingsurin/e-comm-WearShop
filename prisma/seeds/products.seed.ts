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

	// for (const product of productsNew) {
	// 	slugMap.set(product.slug, (slugMap.get(product.slug) ?? 0) + 1);
	// }

	// console.log([...slugMap.entries()].filter(([_, count]) => count > 1));

	// Check sku dupliactes
	// const skus = productsNew.flatMap((product) =>
	// 	product.variants.map((variant) => variant.sku)
	// );

	// const dupliactes = skus.filter((sku, index) => skus.indexOf(sku) !== index);
	// console.log(`[Duplicates SKUs]:`, dupliactes);

	await prisma.$transaction(async (tx) => {
		for (const product of products) {
			const createdProduct = await tx.product.create({
				data: {
					title: product.title,
					slug: product.slug,
					description: product.title,
					currency: product.currency,

					brandId: brandMap[product.brand.slug],
					categoryId: categoriesMap[product.category.slug],

					isAvailable: product.isAvailable,
					isNew: product.isNew,
				},
			});

			const uniqueColors = [
				...new Map(
					product.variants.map((variant) => [variant.attributes.color, variant])
				).values(),
			];

			const createdColors = await Promise.all(
				uniqueColors.map((variant) =>
					tx.productColor.create({
						data: {
							productId: createdProduct.id,
							name: variant.attributes.color,
							slug: slugify(variant.attributes.color),
							images: {
								create: variant.images.map((image) => ({
									src: image.src,
								})),
							},
						},
					})
				)
			);

			const colorMap = Object.fromEntries(
				createdColors.map((color) => [color.name, color.id])
			);

			await tx.variant.createMany({
				data: product.variants.map((variant) => ({
					sku: variant.sku,

					price: variant.price,
					oldPrice: variant.oldPrice,

					stock: variant.stock,

					size: variant.attributes.size,

					colorId: colorMap[variant.attributes.color],

					productId: createdProduct.id,
				})),
			});

			// await tx.product.create({
			// 	data: {
			// 		title: product.title,

			// 		slug: product.slug,

			// 		description: product.title,

			// 		currency: product.currency,

			// 		isAvailable: product.isAvailable,

			// 		isNew: product.isNew,

			// 		brandId: brandMap[product.brand.slug],

			// 		categoryId: categoriesMap[product.category.slug],

			// 		variants: {
			// 			create: product.variants.map((variant) => ({
			// 				sku: variant.sku,

			// 				price: variant.price,

			// 				oldPrice: variant.oldPrice,

			// 				stock: variant.stock,

			// 				color: {
			// 					connect: {
			// 						id:
			// 					}
			// 				},

			// 				size: variant.attributes.size,

			// 				images: {
			// 					create: variant.images.map((image) => ({
			// 						src: image.src,
			// 					})),
			// 				},
			// 			})),
			// 		},
			// 	},
			// });
		}
	});
}

const slugify = (value: string) => {
	return value
		.toLowerCase()
		.replaceAll("/", "-")
		.replaceAll("&", "and")
		.replace(/\s+/g, "-");
};
