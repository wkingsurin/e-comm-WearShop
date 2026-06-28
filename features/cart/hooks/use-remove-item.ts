import { useMutation, useQueryClient } from "@tanstack/react-query";
import { removeItem } from "../api/client";
import { queryKeys } from "@/lib/react-query/query-keys";
import { ICart } from "../types";
import { calculateCart } from "../utils/calculate-cart";

export default function useRemoveItem() {
	const queryClient = useQueryClient();

	return useMutation({
		mutationFn: removeItem,

		onMutate: async (cartItemId: string) => {
			await queryClient.cancelQueries({ queryKey: queryKeys.cart });

			const previousCart = queryClient.getQueryData<ICart>(queryKeys.cart);

			queryClient.setQueryData<ICart>(queryKeys.cart, (old) => {
				if (!old) return old;

				const items = old.items.filter(
					(item) => item.cartItemId !== cartItemId
				);

				return { items, ...calculateCart(items) };
			});

			return { previousCart };
		},

		onError: (_, __, context) => {
			queryClient.setQueryData(queryKeys.cart, context?.previousCart);
		},

		onSettled: () => {
			queryClient.invalidateQueries({ queryKey: queryKeys.cart });
		},
	});
}
