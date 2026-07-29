"use client";

import { useQuery } from "@tanstack/react-query";
import { favoriteQueries } from "../query-options";

interface IProps {
    enabled?: boolean;
}

export function useFavorites({ enabled = true }: IProps = {}) {
    return useQuery({ ...favoriteQueries.all(), enabled });
}
