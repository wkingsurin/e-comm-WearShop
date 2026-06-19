"use client";

import Order from "./order";
import Dummy from "@/components/shared/dummy";
import { Package } from "lucide-react";
import DashboardWrapper from "@/components/shared/dashboard-wrapper";
import { IOrder } from "@/types/store/orders.types";

export default function Orders() {
	const ordersList: IOrder[] = [];

	return (
		<DashboardWrapper pageTitle="Orders">
			{ordersList.length > 0 && (
				<>
					{ordersList.map((order) => {
						return <Order key={order.id} data={order} />;
					})}
				</>
			)}
			{ordersList.length === 0 && (
				<Dummy icon={Package} text="You haven`t orders" />
			)}
		</DashboardWrapper>
	);
}
