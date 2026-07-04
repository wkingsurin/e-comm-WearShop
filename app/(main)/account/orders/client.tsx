"use client";

import DashboardWrapper from "@/components/shared/dashboard-wrapper";
import Order from "./order";
import Dummy from "@/components/shared/dummy";
import { Package } from "lucide-react";
import { useOrders } from "@/features/orders/hooks/use-orders";
import { EMPTY_ORDERS } from "@/features/orders/constants";

export default function OrdersClient() {
	const { data: orders = EMPTY_ORDERS } = useOrders();

	console.log(`[orders]:`, orders);

	return (
		<DashboardWrapper pageTitle="Orders">
			{orders.length > 0 && (
				<>
					{orders.map((order) => {
						return <Order key={order.id} data={order} />;
					})}
				</>
			)}
			{orders.length === 0 && (
				<Dummy icon={Package} text="You haven`t orders" />
			)}
		</DashboardWrapper>
	);
}
