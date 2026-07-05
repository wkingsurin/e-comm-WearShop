import { EMPTY_ORDER } from "@/features/orders/constants";
import { getOrder } from "@/features/orders/services/order.service";
import { getQueryClient } from "@/lib/react-query/get-query-client";
import { queryKeys } from "@/lib/react-query/query-keys";
import { auth } from "@/auth";
import OrderPageClient from "./client";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";

interface IProps {
	params: Promise<{ id: string }>;
}

export default async function OrderPage({ params }: IProps) {
	const session = await auth();

	// order.id
	const { id } = await params;

	const order = session?.user?.id
		? await getOrder(session.user.id, id)
		: EMPTY_ORDER;

	const queryClient = getQueryClient();

	queryClient.setQueryData(queryKeys.order(id), order);

	return (
		<HydrationBoundary state={dehydrate(queryClient)}>
			<OrderPageClient orderId={id} />
		</HydrationBoundary>
	);
}
