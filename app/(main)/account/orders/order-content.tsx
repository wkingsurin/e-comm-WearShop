import { IOrder } from "@/app/types/store/orders.types";
import OrderItems from "./order-items";

export default function OrderContent({ data }: { data: IOrder }) {
	return (
		<>
			<div className="flex justify-between">
				<span className="text-lg font-medium tracking-wider leading-lg">
					Goods:
				</span>
				<span className="text-lg font-medium tracking-wider leading-lg">
					$ {data.totalItemsPrice / 100 + "0"}
				</span>
			</div>
			<OrderItems data={data.items} />
		</>
	);
}
