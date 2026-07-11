import { getProducts } from "@/lib/get-products";
import { getFavorites } from "../favorites/actions";
import PurchasesClient from "./client";
import { getQueryClient } from "@/lib/react-query/get-query-client";
import { queryKeys } from "@/lib/react-query/query-keys";
import { getFavoriteMap } from "@/features/favorites/services/favorites.service";
import { auth } from "@/auth";

export default async function Purchases() {
		// const session = await auth();
	
		// const favoriteMap = session?.user?.id
		// 	? await getFavoriteMap(session.user.id)
		// 	: {};
	
		// const queryClient = getQueryClient();
	
		// await queryClient.setQueryData(queryKeys.favorites, favoriteMap);
	
		const products = await getProducts();
	
		// const favorites = products.filter((product) => favoriteMap[product.id]);

	return <PurchasesClient products={products} />;
}
