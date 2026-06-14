// import { IProduct } from "@/types/store/ui.types";

// export function searchProducts(query: string) {
// 	const data =
// 		typeof window !== "undefined" ? localStorage.getItem("showcase") : null;

// 	if (!data) return;
// 	const products = JSON.parse(data).state.products;

// 	if (!query.trim()) return [];

// 	const normalizedQuery = query.toLowerCase().trim();

// 	return products
// 		.map((product: IProduct) => {
// 			let score = 0;

// 			if (product.title.toLowerCase().includes(normalizedQuery)) {
// 				score += 10;
// 			}

// 			if (product.brand.name.toLowerCase().includes(normalizedQuery)) {
// 				score += 6;
// 			}

// 			if (product.category.name.toLowerCase().includes(normalizedQuery)) {
// 				score += 4;
// 			}

// 			return { product, score };
// 		})
// 		.filter((x) => x.score > 0)
// 		.sort((a, b) => b.score - a.score)
// 		.map((x) => x.product);
// }
