import { getProducts } from "@/lib/get-products";
import { FavoritesClient } from "./client";

export default async function Favorites() {
    const products = await getProducts();

    return <FavoritesClient products={products} />;
}
