import { getProducts } from "@/lib/get-products";
import ProductsClient from "./products-client";
import { shuffle } from "@/lib/shuffle";

export default async function Products() {
    const products = await getProducts();

    const shuffledProducts = shuffle(products);

    return <ProductsClient products={shuffledProducts} />;
}
