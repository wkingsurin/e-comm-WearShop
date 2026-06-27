import { getProducts } from "../../../../lib/get-products";
import JeansClient from "./client";

export default async function Jeans() {
	const products = await getProducts({ categorySlug: "jeans" });

	return <JeansClient products={products} />;
}
