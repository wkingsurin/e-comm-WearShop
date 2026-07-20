import DashboardWrapper from "@/components/shared/dashboard-wrapper";
import { getProducts } from "@/lib/get-products";
import { FavoritesClient } from "./client";

export default async function Favorites() {
    const products = await getProducts();

    return (
        <DashboardWrapper className="min-h-[534px] px-1! md:px-6!">
            <FavoritesClient products={products} />
        </DashboardWrapper>
    );
}
