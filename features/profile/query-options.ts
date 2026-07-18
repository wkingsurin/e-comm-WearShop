import { queryKeys } from "@/lib/react-query/query-keys";
import { queryOptions } from "@tanstack/react-query";
import { getUserProfile } from "./api/client";

export const userProfileQueries = {
    all: () =>
        queryOptions({ queryKey: queryKeys.profile, queryFn: getUserProfile }),
};
