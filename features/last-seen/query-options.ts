import { queryOptions } from "@tanstack/react-query";
import { queryKeys } from "../../lib/react-query/query-keys";
import { getLastSeen } from "./api/client";

export const lastSeenQueries = {
    all: () =>
        queryOptions({
            queryKey: queryKeys.lastSeen,
            queryFn: getLastSeen,
        }),
};
