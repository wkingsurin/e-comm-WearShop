import DashboardWrapper from "@/components/shared/dashboard-wrapper";
import Dummy from "@/components/shared/dummy";
import SortSelect from "@/components/shared/sort-select";
import ProductCard from "@/components/widgets/product-card/product-card";
import { Heart } from "lucide-react";
import { getFavorites } from "./actions";
import DashboardWrapperTitle from "@/components/shared/dashboard-wrapper-title";
import { auth } from "@/auth";
import { getFavoriteMap } from "@/features/favorites/services/favorites.service";
import { getQueryClient } from "@/lib/react-query/get-query-client";
import { queryKeys } from "@/lib/react-query/query-keys";
import { getProducts } from "@/lib/get-products";
import { FavoritesClient } from "./client";

export default async function Favorites() {
    // const session = await auth();

    // const favoriteMap = session?.user?.id
    //     ? await getFavoriteMap(session.user.id)
    //     : {};

    // const queryClient = getQueryClient();

    // queryClient.setQueryData(queryKeys.favorites, favoriteMap);

    const products = await getProducts();

	// const favorites = products.filter((product) => favoriteMap[product.id]);

    return (
        <DashboardWrapper
            pageTitle={<DashboardWrapperTitle title="Favorites" />}
        >
            <FavoritesClient products={products} />
        </DashboardWrapper>
    );
}
