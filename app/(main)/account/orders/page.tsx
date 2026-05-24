"use client";

import { IOrder } from "@/lib/store/orders.store";
import Order from "./order";
import useOrders from "@/components/hooks/useOrders";

export default function Orders() {
	const data: IOrder[] = [
		{
			id: "1",
			title: "UNDER ARMOUR",
			image: "image-white-240.png",
			category: "Hoodie",
			size: "M",
			color: "White",
			price: 11990,
			currency: "$",
			totalPrice: 11990,
		},
		{
			id: "2",
			title: "UNDER ARMOUR",
			image: "image-white-240.png",
			category: "Hoodie",
			size: "M",
			color: "White",
			price: 11990,
			currency: "$",
			totalPrice: 11990,
		},
	];

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
