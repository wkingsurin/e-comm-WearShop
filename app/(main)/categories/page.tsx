import { auth } from "@/auth";
import { getProducts } from "../../../lib/get-products";
import CategoriesClient from "./categories-client";
import { getQueryClient } from "@/lib/react-query/get-query-client";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import { getFavoriteMap } from "@/features/favorites/services/favorites.service";
import { queryKeys } from "@/lib/react-query/query-keys";

export default async function Categories() {
    const products = await getProducts();

    return <CategoriesClient products={products} />;
}
