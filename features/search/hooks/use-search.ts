import useDebounce from "@/hooks/useDebounce";
import { useQuery } from "@tanstack/react-query";
import { searchQueries } from "../query-options";

export function useSearch(query: string) {
    const debouncedQuery = useDebounce(query, 250);

    return useQuery({
        ...searchQueries.list(debouncedQuery),
        enabled: debouncedQuery.trim().length > 1,
    });
}
