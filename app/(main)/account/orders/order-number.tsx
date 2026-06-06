import { IOrder } from "@/app/types/store/orders.types";

export default function OrderNumber({
	orderNumber,
}: {
	orderNumber: IOrder["orderNumber"];
}) {
	return (
		<span className="flex items-center font-mono font-medium italic">
			{orderNumber}
		</span>
	);
}
