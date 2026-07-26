import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toggleFavorite } from "../api/client";
import { favoriteQueries } from "../query-options";

export function useToggleFavorite() {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: toggleFavorite,

        onMutate: async (prodictId: string) => {
            await queryClient.cancelQueries({
                queryKey: favoriteQueries.map().queryKey,
            });

            const previousFavorites =
                queryClient.getQueryData<Record<string, boolean>>(
                    favoriteQueries.map().queryKey,
                ) || {};

            const next = { ...previousFavorites };

            if (next[prodictId]) {
                delete next[prodictId];
            } else {
                next[prodictId] = true;
            }

            queryClient.setQueryData(favoriteQueries.map().queryKey, next);

            return { previousFavorites };
        },

        onError: (err, productId, context) => {
            if (context?.previousFavorites) {
                queryClient.setQueryData(
                    favoriteQueries.map().queryKey,
                    context.previousFavorites,
                );
            }
        },

        onSuccess: (data) => {
            queryClient.setQueryData(
                favoriteQueries.map().queryKey,
                (prev = {}) => ({
                    ...prev,
                    ...data,
                }),
            );
        },
    });
}
