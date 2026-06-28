import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addToCart } from "../api/client";
import { queryKeys } from "@/lib/react-query/query-keys";
import { AddToCartInput, ICart } from "../types";

export function useAddToCart() {
	const queryClient = useQueryClient();

	return useMutation({
		mutationFn: ({ variantId, quantity }: AddToCartInput) =>
			addToCart({ variantId, quantity }),

		onMutate: async (input) => {
			await queryClient.cancelQueries({ queryKey: queryKeys.cart });

			const previousCart = queryClient.getQueryData<ICart>(queryKeys.cart);

			queryClient.setQueryData<ICart>(queryKeys.cart, (old) => {
				if (!old) {
					return {
						items: [input.item],
						totalItems: input.quantity,
						subtotal: input.item.price * input.quantity,
						total: input.item.price * input.quantity,
					};
				}

				const items = [...old.items];

				const index = items.findIndex(
					(item) => item.variantId === input.variantId
				);

				if (index >= 0) {
					items[index] = {
						...items[index],
						quantity: items[index].quantity + input.quantity,
					};
				} else {
					items.push(input.item);
				}

				const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);

				const subtotal = items.reduce(
					(sum, item) => sum + item.price * item.quantity,
					0
				);

				return {
					items,
					totalItems,
					subtotal,
					total: subtotal,
				};
			});

			return { previousCart };
		},

		onError: (_, __, context) => {
			queryClient.setQueryData(queryKeys.cart, context?.previousCart);
		},

		onSettled: () => {
			queryClient.invalidateQueries({ queryKey: queryKeys.cart });
		},
		// onSuccess: () => {
		// 	queryClient.invalidateQueries({ queryKey: queryKeys.cart });
		// },
	});
}
