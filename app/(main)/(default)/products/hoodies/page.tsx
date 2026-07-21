import { getProducts } from "@/lib/get-products";
import HoodiesClient from "./client";

export default async function Hoodies() {
    const products = await getProducts({ categorySlug: "hoodies" });

    return <HoodiesClient products={products} />;
}
