import DashboardWrapper from "@/components/shared/dashboard-wrapper";
import DashboardWrapperTitle from "@/components/shared/dashboard-wrapper-title";
import { getProducts } from "@/lib/get-products";
import { FavoritesClient } from "./client";

export default async function Favorites() {
    const products = await getProducts();

    return (
        <DashboardWrapper
            className="min-h-[534px]"
            pageTitle={<DashboardWrapperTitle title="Favorites" />}
        >
            <FavoritesClient products={products} />
        </DashboardWrapper>
    );
}
