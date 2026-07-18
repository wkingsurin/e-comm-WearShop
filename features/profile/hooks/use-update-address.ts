import { useMutation } from "@tanstack/react-query";
import { getQueryClient } from "@/lib/react-query/get-query-client";
import { updateUserAddress } from "../api/client";
import { queryKeys } from "@/lib/react-query/query-keys";
import { IUser } from "../types";

export default function useUpdateAddress() {
    const queryClient = getQueryClient();

    return useMutation({
        mutationFn: updateUserAddress,

        onMutate: async (data) => {
            await queryClient.cancelQueries({ queryKey: queryKeys.profile });

            const previousAddress = queryClient.getQueryData<IUser>(
                queryKeys.profile,
            );

            queryClient.setQueryData<IUser>(queryKeys.profile, (old) => {
                if (!old) return old;

                return { ...old, ...data };
            });

            return { previousAddress };
        },

        onError: (_, __, context) => {
            queryClient.setQueryData(
                queryKeys.profile,
                context?.previousAddress,
            );
        },

        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: queryKeys.profile });
        },
    });
}
