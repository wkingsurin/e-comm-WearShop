import { useQuery } from "@tanstack/react-query";
import { orderQueries } from "../query-options";

export function useOrders() {
	return useQuery(orderQueries.all());
}
