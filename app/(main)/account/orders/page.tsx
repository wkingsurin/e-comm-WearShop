"use client";

import { useOrdersStore } from "@/lib/store/orders.store";
import Order from "./order";
import useOrders from "@/components/hooks/useOrders";
import Dummy from "@/components/shared/dummy";
import { Package } from "lucide-react";
import DashboardWrapper from "@/components/shared/dashboard-wrapper";

export default function Orders() {
	const hasHydrated = useOrdersStore((s) => s._hasHydrated);
	const { ordersList } = useOrders();

	return (
		<DashboardWrapper pageTitle="Orders">
			{hasHydrated && ordersList.length > 0 && (
				<>
					{ordersList.map((order) => {
						return <Order key={order.id} data={order} />;
					})}
				</>
			)}
			{hasHydrated && ordersList.length === 0 && (
				<Dummy icon={Package} text="You haven`t orders" />
			)}
		</DashboardWrapper>
	);
}
