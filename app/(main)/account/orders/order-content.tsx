import { IOrder } from "@/types/store/orders.types";
import OrderItems from "./order-items";

export default function OrderContent({ data }: { data: IOrder }) {
	return (
		<>
			<div className="flex gap-4">
				<span className="font-normal tracking-wider leading-lg">
					Delivery method:
				</span>
				<p className="font-mono capitalize leading-lg">
					{data.delivery.method}
				</p>
			</div>
			<div className="flex justify-between">
				<span className="font-normal tracking-wider leading-lg">Goods:</span>
				<span className="font-medium tracking-wider leading-lg">
					$ {data.totals.total / 100 + "0"}
				</span>
			</div>
			<OrderItems data={data.items} currency={data.currency} />
		</>
	);
}
