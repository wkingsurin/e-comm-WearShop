import { getProducts } from "../../../lib/get-products";
import CategoriesClient from "./categories-client";

export default async function Categories() {
    const products = await getProducts();

    return <CategoriesClient products={products} />;
}
