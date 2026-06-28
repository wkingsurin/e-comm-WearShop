import { useQuery } from "@tanstack/react-query";
import { cartQueries } from "../query-options";

export function useCart() {
	return useQuery(cartQueries.all());
}
