import { Button } from "@/components/ui/button";
import OrderNumber from "./order-number";
import OrderStatus from "./order-status";
import { ChevronDown, Undo } from "lucide-react";
import OrderConfirmModal from "./order-confirm-modal";
import { useUIStore } from "@/lib/store/ui.store";
import { useCancelOrder } from "@/features/orders/hooks/use-cancel-order";
import Link from "next/link";
import { canCancelOrder } from "@/features/orders/services/order-status.service";
import { changeOrderStatus } from "@/features/orders/services/order.service";
import { IOrder } from "@/types/account/orders/orders.types";

export default function OrderMenu({
    data,
    toggleOrder,
}: {
    data: IOrder;
    toggleOrder: () => void;
}) {
    const { mutate: cancel } = useCancelOrder();
    const openConfirm = useUIStore((s) => s.openConfirm);

    const cancelOrder = () => {
        openConfirm({
            title: "Cancel this order?",
            content: <OrderConfirmModal data={data} />,
            confirmText: "Confirm",
            cancelText: "Cancel",
            onConfirm: () => cancel({ orderId: data.id }),
        });
    };

    return (
        <div className="flex justify-between">
            <div className="flex items-center gap-4">
                <span className="flex items-center font-sans font-medium text-xl tracking-wider">
                    Order
                </span>
                <OrderNumber orderNumber={data.orderNumber} />
                <OrderStatus status={data.status} />
            </div>
            <div className="flex items-center gap-3">
                <Link href={`./orders/${data.id}`}>Details</Link>
                <div className="flex items-center rounded-xl font-medium px-3 py-[3px] bg-black/5 leading-lg">
                    Tue, 5/26 - Sat, 5/30
                </div>
                {canCancelOrder(data.status) && (
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
                )}
                <Button
                    className="w-10 h-10 bg-black/15 hover:bg-black/25"
                    onClick={toggleOrder}
                >
                    <ChevronDown
                        className={`size-4 stroke-[1.5px] stroke-black`}
                    />
                </Button>
            </div>
        </div>
    );
}
