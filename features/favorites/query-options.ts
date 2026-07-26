import { queryOptions } from "@tanstack/react-query";
import { getFavorites, getFavoritesMap } from "./api/client";
import { queryKeys } from "../../lib/react-query/query-keys";

export const favoriteQueries = {
    map: () =>
        queryOptions({
            queryKey: queryKeys.favoritesMap,
            queryFn: getFavoritesMap,
            staleTime: 5 * 60 * 1000,
        }),
    all: () =>
        queryOptions({
            queryKey: queryKeys.favorites,
            queryFn: getFavorites,
            staleTime: 5 * 60 * 1000,
        }),
};
