"use client";

import { favoriteQueries } from "@/features/favorites/query-options";
import { useQuery } from "@tanstack/react-query";

interface IProps {
    enabled?: boolean;
}

export function useFavoritesMap({ enabled = true }: IProps = {}) {
    return useQuery({ ...favoriteQueries.map(), enabled });
}
