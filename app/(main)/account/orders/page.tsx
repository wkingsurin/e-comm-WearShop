"use client";

import { useCartStore } from "@/lib/store/cart.store";
import Order from "./order";
import useOrders from "@/components/hooks/useOrders";
import Dummy from "@/components/shared/dummy";
import { Package } from "lucide-react";

export default function Orders() {
	const hasHydrated = useCartStore((s) => s._hasHydrated);
	const { ordersList } = useOrders();

	return (
		<div className="flex flex-col gap-3 w-full min-h-[492px] p-4 rounded-lg border border-black/10 bg-[#D9D9D9]/10">
			<div className="flex items-center justify-between">
				<span className="text-xl font-medium tracking-wider">Delivery</span>
				{hasHydrated && ordersList.length !== 0 && (
					<div className="h-7 rounded-md font-medium px-3 py-[3px] bg-black/5 leading-lg">
						Tue, 5/26 - Sat, 5/30
					</div>
				)}
			</div>
			{hasHydrated && ordersList.length !== 0 && (
				<>
					{ordersList.map((order) => (
						<div key={order.id} className="flex flex-col gap-3">
							{order.items.map((item) => {
								return <Order key={item.id} data={item} />;
							})}
						</div>
					))}
				</>
			)}
			{hasHydrated && ordersList.length === 0 && (
				<Dummy icon={Package} text="No orders" />
			)}
		</div>
	);
}
