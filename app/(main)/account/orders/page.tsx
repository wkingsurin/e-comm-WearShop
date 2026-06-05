"use client";

import Order from "./order";
import useOrders from "@/components/hooks/useOrders";

export default function Orders() {
	const { ordersList } = useOrders();

	return (
		<div className="flex flex-col gap-5 w-full">
			{ordersList.map((order) => {
				return <Order key={order.id} data={order} />;
			})}
		</div>
	);
}
