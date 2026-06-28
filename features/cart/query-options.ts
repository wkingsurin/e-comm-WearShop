import { queryKeys } from "@/lib/react-query/query-keys";
import { queryOptions } from "@tanstack/react-query";
import { getCart } from "./api/client";

export const cartQueries = {
	all: () =>
		queryOptions({
			queryKey: queryKeys.cart,
			queryFn: getCart,
		}),
};
