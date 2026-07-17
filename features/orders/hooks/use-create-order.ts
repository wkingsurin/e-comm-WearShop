import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createOrder } from "../api/client";
import { queryKeys } from "@/lib/react-query/query-keys";
import { EMPTY_CART } from "@/features/cart/constants";
import { useRouter } from "next/navigation";

export function useCreateOrder() {
    const queryClient = useQueryClient();
    const router = useRouter();

    return useMutation({
        mutationFn: createOrder,
        onSuccess: (order) => {
            queryClient.setQueryData(queryKeys.cart, EMPTY_CART);

            queryClient.invalidateQueries({ queryKey: queryKeys.orders() });

            queryClient.invalidateQueries({ queryKey: queryKeys.checkout });

            router.push(`/checkout/success/${order.id}`);
        },
    });
}
