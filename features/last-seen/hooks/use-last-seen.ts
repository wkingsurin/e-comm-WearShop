"use client";

import { useQuery } from "@tanstack/react-query";
import { lastSeenQueries } from "../query-options";

interface IProps {
    enabled?: boolean;
}

export function useLastSeen({ enabled = true }: IProps = {}) {
    return useQuery({ ...lastSeenQueries.all(), enabled });
}
