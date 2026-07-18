import { queryKeys } from "@/lib/react-query/query-keys";
import { queryOptions } from "@tanstack/react-query";
import { searchProducts } from "./api/client";

export const searchQueries = {
    list: (query: string) =>
        queryOptions({
            queryKey: queryKeys.search(query),
            queryFn: () => searchProducts(query),
        }),
};
