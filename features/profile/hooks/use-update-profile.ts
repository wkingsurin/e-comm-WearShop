import { getQueryClient } from "@/lib/react-query/get-query-client";
import { useMutation } from "@tanstack/react-query";
import { updateUserProfile } from "../api/client";
import { queryKeys } from "@/lib/react-query/query-keys";
import { IUser } from "../types";

export function useUpdateProfile() {
    const queryClinet = getQueryClient();

    return useMutation({
        mutationFn: updateUserProfile,
        onMutate: async (data) => {
            await queryClinet.cancelQueries({ queryKey: queryKeys.profile });

            const previousProfile = queryClinet.getQueryData<IUser>(
                queryKeys.profile,
            );

            queryClinet.setQueryData<IUser>(queryKeys.profile, (old) => {
                if (!old) return old;

                return { ...old, ...data };
            });

            return { previousProfile };
        },
        onError: (_, __, context) => {
            queryClinet.setQueryData(
                queryKeys.profile,
                context?.previousProfile,
            );
        },
    });
}
