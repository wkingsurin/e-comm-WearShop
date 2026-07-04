import { queryKeys } from "@/lib/react-query/query-keys";
import { queryOptions } from "@tanstack/react-query";
import { getOrders } from "./api/client";

export const orderQueries = {
	all: () => queryOptions({ queryKey: queryKeys.orders, queryFn: getOrders }),
};
