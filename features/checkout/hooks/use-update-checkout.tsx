import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateCheckout } from "../api/client";
import { queryKeys } from "@/lib/react-query/query-keys";
import { ICheckout } from "../types";

export function useUpdateCheckout() {
	const queryClient = useQueryClient();

	return useMutation({
		mutationFn: updateCheckout,

		onMutate: async (data) => {
			await queryClient.cancelQueries({ queryKey: queryKeys.checkout });

			const previousCheckout = queryClient.getQueryData<ICheckout>(
				queryKeys.checkout
			);

			queryClient.setQueryData<ICheckout>(queryKeys.checkout, (old) => {
				if (!old) return old;

				return { ...old, ...data };
			});

			return { previousCheckout };
		},

		onError: (_, __, context) => {
			queryClient.setQueryData(queryKeys.checkout, context?.previousCheckout);
		},

		onSettled: () => {
			queryClient.invalidateQueries({ queryKey: queryKeys.checkout });
		},
	});
}
