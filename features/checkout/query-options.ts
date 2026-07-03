import { queryKeys } from "@/lib/react-query/query-keys";
import { queryOptions } from "@tanstack/react-query";
import { getCheckout } from "./api/client";

export const checkoutQueries = {
	all: () =>
		queryOptions({ queryKey: queryKeys.checkout, queryFn: getCheckout }),
};
