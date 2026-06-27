import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toggleFavorite } from "../api/client";
import { favoriteQueries } from "../api/queries";

export function useToggleFavorite() {
	const queryClient = useQueryClient();

	return useMutation({
		mutationFn: toggleFavorite,

		onMutate: async (prodictId: string) => {
			await queryClient.cancelQueries({
				queryKey: favoriteQueries.all().queryKey,
			});

			const previousFavorites =
				queryClient.getQueryData<Record<string, boolean>>(
					favoriteQueries.all().queryKey
				) || {};

			const next = { ...previousFavorites };

			if (next[prodictId]) {
				delete next[prodictId];
			} else {
				next[prodictId] = true;
			}

			queryClient.setQueryData(favoriteQueries.all().queryKey, next);

			return { previousFavorites };
		},

		onError: (err, productId, context) => {
			if (context?.previousFavorites) {
				queryClient.setQueryData(
					favoriteQueries.all().queryKey,
					context.previousFavorites
				);
			}
		},

		onSuccess: (data) => {
			queryClient.setQueryData(favoriteQueries.all().queryKey, (prev = {}) => ({
				...prev,
				...data,
			}));
		},
	});
}
