import OrdersClient from "./client";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import { auth } from "@/auth";
import { EMPTY_ORDERS } from "@/features/orders/constants";
import { getQueryClient } from "@/lib/react-query/get-query-client";
import { queryKeys } from "@/lib/react-query/query-keys";
import { getOrders } from "@/features/orders/services/order.service";

export default async function Orders() {
	const session = await auth();

	const orders = session?.user?.id
		? await getOrders(session.user.id)
		: EMPTY_ORDERS;

	const queryClient = getQueryClient();

	queryClient.setQueryData(queryKeys.orders, orders);

	return (
		<HydrationBoundary state={dehydrate(queryClient)}>
			<OrdersClient />
		</HydrationBoundary>
	);
}
