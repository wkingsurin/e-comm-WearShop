import { getProducts } from "../../../../lib/get-products";
import ProductsClient from "./products-client";

export default async function Categories() {
    const products = await getProducts();

    return <ProductsClient products={products} />;
}
