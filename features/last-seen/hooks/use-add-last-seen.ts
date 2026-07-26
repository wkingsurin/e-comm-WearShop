import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addLastSeen } from "../api/client";
import { queryKeys } from "@/lib/react-query/query-keys";

export function useAddLastSeen() {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: addLastSeen,

        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: queryKeys.lastSeen });
        },
    });
}
