"use client";

import { useQuery } from "@tanstack/react-query";
import { favoriteQueries } from "../query-options";

export function useFavorites() {
    return useQuery(favoriteQueries.all());
}
