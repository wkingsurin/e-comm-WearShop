"use client";

import { useOrder } from "@/features/orders/hooks/use-order";
import { EMPTY_ORDER } from "@/features/orders/constants";
import { useUIStore } from "@/lib/store/ui.store";
import DashboardWrapper from "@/components/shared/dashboard-wrapper";
import { MoveLeft } from "lucide-react";
import OrderContent from "@/features/orders/components/details/order-content";
import OrderSummary from "@/features/orders/components/details/order-summary";
import OrderReturn from "@/features/orders/components/details/order-return";
import OrderConfirmModal from "@/features/orders/components/order-confirm-modal";
import { useCancelOrder } from "@/features/orders/hooks/use-cancel-order";
import { OrderStatus } from "@/prisma/generated/prisma/enums";
import Link from "next/link";

export default function OrderPageClient({ orderId }: { orderId: string }) {
    const { data: order = EMPTY_ORDER } = useOrder(orderId);
    const { mutate: cancelOrder } = useCancelOrder();

    const openConfirm = useUIStore((s) => s.openConfirm);

    const handleCancel = () => {
        openConfirm({
            title: "Cancel this order?",
            content: <OrderConfirmModal data={order} />,
            onConfirm: () => cancelOrder({ orderId }),
        });
    };

    return (
        <div className="relative flex flex-col md:flex-row items-start gap-5 w-full">
            <DashboardWrapper
                className="w-full md:w-[65%] px-1! md:px-6!"
                pageTitle={
                    <span className="text-sm font-medium leading-lg tracking-wider text-black/25 px-2">
                        ID {order.orderNumber.split("-")[1]}
                    </span>
                }
            >
                <OrderContent order={order} />
            </DashboardWrapper>
            <div className="relative md:sticky md:top-[154px] flex flex-col gap-4 w-full md:w-[35%]">
                <OrderSummary
                    status={order.status}
                    currency={order.currency}
                    itemsAmount={order.items.length}
                    totals={order.totals}
                />
                {order.status === OrderStatus.PENDING && (
                    <OrderReturn
                        initialValues={order.shipping}
                        onCancel={handleCancel}
                    />
                )}
            </div>
        </div>
    );
}
