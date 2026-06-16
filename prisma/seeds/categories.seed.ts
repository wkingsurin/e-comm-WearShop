import { prisma } from "@/lib/prisma";
import { products } from "@/products";

export async function seedCategories() {
	const categories = [
		...new Map(
			products.map((product) => [product.category.slug, product.category])
		).values(),
	];

	await prisma.category.createMany({
		data: categories.map((category) => ({
			name: category.name,
			slug: category.slug,
		})),
		skipDuplicates: true,
	});
}
