import { Button } from "@/components/ui/button";
import OrderNumber from "./order-number";
import OrderStatus from "./order-status";
import { ChevronDown, MoveRight, Undo } from "lucide-react";
import OrderConfirmModal from "./order-confirm-modal";
import { useUIStore } from "@/lib/store/ui.store";
import { useCancelOrder } from "@/features/orders/hooks/use-cancel-order";
import Link from "next/link";
import { canCancelOrder } from "@/features/orders/services/order-status.service";
import { changeOrderStatus } from "@/features/orders/services/order.service";
import { IOrder } from "@/types/account/orders/orders.types";
import { useRouter } from "next/navigation";

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
        <div className="flex flex-col justify-between w-1/4">
            <div className="flex items-center gap-3">
                <OrderStatus status={data.status} />
                <OrderNumber orderNumber={data.orderNumber} />
            </div>
            <Link
                href={`/account/orders/${data.id}`}
                className="group/order-back flex gap-2 items-center text-black/50 text-md font-bold hover:text-black transition-brand"
            >
                View details <MoveRight className="size-4 stroke-black/50 group-hover/order-back:stroke-black transition-brand" />
            </Link>
        </div>
    );
}
