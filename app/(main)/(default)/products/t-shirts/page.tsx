import { getProducts } from "@/lib/get-products";
import TShirtsClient from "./client";

export default async function TShirts() {
    const products = await getProducts({ categorySlug: "t-shirts" });

    return <TShirtsClient products={products} />;
}
