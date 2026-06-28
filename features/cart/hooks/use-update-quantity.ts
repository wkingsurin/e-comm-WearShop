import { queryKeys } from "@/lib/react-query/query-keys";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateQuantity } from "../api/client";
import { ICart } from "../types";
import { calculateCart } from "../utils/calculate-cart";

interface updateQuantityInput {
	cartItemId: string;
	quantity: number;
}

export function useUpdateQunatity() {
	const queryClient = useQueryClient();

	return useMutation({
		mutationFn: ({ cartItemId, quantity }: updateQuantityInput) =>
			updateQuantity(cartItemId, quantity),

		onMutate: async ({ cartItemId, quantity }) => {
			await queryClient.cancelQueries({ queryKey: queryKeys.cart });

			const previousCart = queryClient.getQueryData<ICart>(queryKeys.cart);

			queryClient.setQueryData<ICart>(queryKeys.cart, (old) => {
				if (!old) return old;

				const items = old.items.map((item) =>
					item.cartItemId === cartItemId ? { ...item, quantity } : item
				);

				return { items, ...calculateCart(items) };
			});

			return { previousCart };
		},

		onError: (_, __, context) => {
			queryClient.setQueryData(queryKeys.cart, context?.previousCart);
		},

		onSettled: () => {
			queryClient.invalidateQueries({
				queryKey: queryKeys.cart,
			});
		},
	});
}
