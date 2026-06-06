import { IOrder } from "@/app/types/store/orders.types";
import { useOrdersStore } from "@/lib/store/orders.store";

export default function OrderStatus({ orderId }: { orderId: IOrder["id"] }) {
	const status = useOrdersStore((s) => s.orders[orderId].status);

	const statusDescription = {
		pending_payment: "Awaiting payment",
		paid: "Processing",
		processing: "Processing",
		shipped: "In delivery",
		delivered: "Delivered",
		completed: "Delivered",
		cancelled: "Cancelled",
		refunded: "Refunded",
	};

	return (
		<span className="flex items-center h-[30px] px-3 rounded-[50px] bg-black/75 text-white tracking-wide leading-base">
			{statusDescription[status]}
		</span>
	);
}
