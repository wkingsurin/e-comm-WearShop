import { getFavorites } from "../favorites/actions";
import PurchasesClient from "./client";

export default async function Purchases() {
	const products = await getFavorites();

	return <PurchasesClient products={products} />;
}
