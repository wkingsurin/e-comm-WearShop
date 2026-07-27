import { getProducts } from "@/lib/get-products";
import SneakersClient from "./client";

export default async function Sneakers() {
    const products = await getProducts({ categorySlug: "sneakers" });

    return <SneakersClient products={products} />;
}
