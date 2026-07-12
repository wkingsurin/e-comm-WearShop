import { getProducts } from "@/lib/get-products";
import PurchasesClient from "./client";

export default async function Purchases() {
    const products = await getProducts();

    return <PurchasesClient products={products} />;
}
