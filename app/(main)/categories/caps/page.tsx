import { getProducts } from "../../../../lib/get-products";
import CapsClient from "./client";

export default async function Caps() {
	const products = await getProducts({ categorySlug: "caps" });

	return <CapsClient products={products} />;
}
