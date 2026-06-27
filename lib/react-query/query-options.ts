import { queryOptions } from "@tanstack/react-query";
import { getFavorites } from "../../features/favorites/api/client";
import { queryKeys } from "./query-keys";

export const favoriteQueries = {
	all: () =>
		queryOptions({
			queryKey: queryKeys.favorites,
			queryFn: getFavorites,
		}),
};
