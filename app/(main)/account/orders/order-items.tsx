import { IOrder } from "@/app/types/store/orders.types";
import OrderItem from "./order-item";

export default function OrderItems({ data }: { data: IOrder["items"] }) {
	return (
		<div className="flex flex-col gap-3">
			{data.map((item) => {
				return <OrderItem key={item.id} data={item} />;
			})}
		</div>
	);
}
