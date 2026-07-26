"use client";

import { useQuery } from "@tanstack/react-query";
import { lastSeenQueries } from "../query-options";

export function useLastSeen() {
    return useQuery(lastSeenQueries.all());
}
