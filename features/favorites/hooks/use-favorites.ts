"use client";

import { favoriteQueries } from "@/lib/react-query/query-options";
import { useQuery } from "@tanstack/react-query";

export function useFavorites() {
	return useQuery(favoriteQueries.all());

	// const query = useQuery(favoriteQueries.all());

	// return {
	// 	favoriteIds: query.data ?? {},
	// 	...query,
	// };
}
