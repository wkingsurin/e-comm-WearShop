import { useMutation, useQueryClient } from "@tanstack/react-query";
import { cancelOrder } from "../api/client";
import { queryKeys } from "@/lib/react-query/query-keys";
import { IOrder } from "@/types/store/orders.types";
import { OrderStatus } from "@/prisma/generated/prisma/enums";

interface CancelOrderInput {
	orderId: string;
}

export function useCancelOrder() {
	const queryClient = useQueryClient();

	return useMutation({
		mutationFn: ({ orderId }: CancelOrderInput) => cancelOrder(orderId),

		onMutate: async ({ orderId }) => {
			await queryClient.cancelQueries({ queryKey: queryKeys.orders });

			const previousOrders = queryClient.getQueryData<IOrder[]>(
				queryKeys.orders
			);

			queryClient.setQueryData<IOrder[]>(queryKeys.orders, (old) => {
				if (!old) return old;

				return old.map((order) =>
					order.id === orderId
						? { ...order, status: OrderStatus.CANCELLED }
						: order
				);
			});

			return { previousOrders };
		},

		onError: (_, __, context) => {
			queryClient.setQueryData(queryKeys.orders, context?.previousOrders);
		},

		onSuccess: (order) => {
			queryClient.setQueryData<IOrder[]>(queryKeys.orders, (old) => {
				if (!old) return old;

				return old.map((item) => (item.id === order.id ? order : item));
			});
		},

		onSettled: () => {
			queryClient.invalidateQueries({ queryKey: queryKeys.orders });
		},
	});
}
