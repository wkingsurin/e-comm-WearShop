import { prisma } from "@/lib/prisma";
import { products } from "@/products";

export async function seedBrands() {
	const brands = [
		...new Map(
			products.map((product) => [product.brand.slug, product.brand])
		).values(),
	];

	await prisma.brand.createMany({
		data: brands.map((brand) => ({
			name: brand.name,
			slug: brand.slug,
		})),
		skipDuplicates: true,
	});
}
