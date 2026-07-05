import { useQuery } from "@tanstack/react-query";
import { orderQueries } from "../query-options";

export function useOrder(orderId: string) {
	return useQuery(orderQueries.detail(orderId));
}
