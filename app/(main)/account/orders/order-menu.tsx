import { Button } from "@/components/ui/button";
import OrderNumber from "./order-number";
import OrderStatus from "./order-status";
import { ChevronDown, Undo } from "lucide-react";
import { IOrder } from "@/app/types/store/orders.types";
import OrderConfirmModal from "./order-confirm-modal";
import useOrders from "@/components/hooks/useOrders";
import { useUIStore } from "@/lib/store/ui.store";

export default function OrderMenu({
	data,
	toggleOrder,
}: {
	data: IOrder;
	toggleOrder: () => void;
}) {
	const openConfirm = useUIStore((s) => s.openConfirm);
	const { removeOrder } = useOrders();

	const cancelOrder = () => {
		openConfirm({
			title: "Cancel this order?",
			content: <OrderConfirmModal data={data} />,
			confirmText: "Confirm",
			cancelText: "Cancel",
			onConfirm: () => removeOrder(data),
		});
	};

	return (
		<div className="flex justify-between">
			<div className="flex items-center gap-4">
				<span className="flex items-center font-sans font-medium text-xl tracking-wider">
					Order
				</span>
				<OrderNumber orderNumber={data.orderNumber} />
				<OrderStatus orderId={data.id} />
			</div>
			<div className="flex gap-3">
				<div className="flex items-center rounded-xl font-medium px-3 py-[3px] bg-black/5 leading-lg">
					Tue, 5/26 - Sat, 5/30
				</div>
				<Button
					className="group/cancel flex gap-3 bg-black/10 hover:bg-[#EC0404]/10 text-black hover:text-[#EC0404]/75"
					onClick={(e) => {
						e.stopPropagation();
						cancelOrder();
					}}
				>
					Cancel
					<Undo className="size-4 stroke-[1.5px] stroke-black group-hover/cancel:stroke-[#EC0404]/75 transition-brand" />
				</Button>
				<Button
					className="w-10 h-10 bg-black/15 hover:bg-black/25"
					onClick={toggleOrder}
				>
					<ChevronDown className={`size-4 stroke-[1.5px] stroke-black`} />
				</Button>
			</div>
		</div>
	);
}
