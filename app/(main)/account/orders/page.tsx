"use client";

import Order from "./order";
import useOrders from "@/components/hooks/useOrders";

export default function Orders() {
	const { ordersItemsList } = useOrders();

	return (
		<div className="flex flex-col gap-3 w-full p-4 rounded-lg border border-black/10 bg-[#D9D9D9]/10">
			<div className="flex items-center justify-between">
				<span className="text-xl font-medium tracking-wider">Delivery</span>
				<div className="h-7 rounded-md font-medium px-3 py-[3px] bg-black/5 leading-lg">
					Tue, 5/26 - Sat, 5/30
				</div>
			</div>
			<div className="flex flex-col gap-3">
				{ordersItemsList.map((item) => {
					return <Order key={item.id} data={item} />;
				})}
			</div>
		</div>
	);
}
