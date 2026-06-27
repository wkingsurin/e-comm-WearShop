import { queryOptions } from "@tanstack/react-query";
import { getFavorites } from "./client";
import { queryKeys } from "@/lib/react-query/query-keys";

export const favoriteQueries = {
	all: () =>
		queryOptions({
			queryKey: queryKeys.favorites,
			queryFn: getFavorites,
		}),
};
