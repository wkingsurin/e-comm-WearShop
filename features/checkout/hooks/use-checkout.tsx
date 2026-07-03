import { useQuery } from "@tanstack/react-query";
import { checkoutQueries } from "../query-options";

export function useCheckout() {
	return useQuery(checkoutQueries.all());
}
