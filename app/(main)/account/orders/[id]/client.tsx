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
        <div className="relative flex items-start gap-4 w-full">
            <DashboardWrapper
                className="max-w-[65%]"
                pageTitle={
                    <div className="flex items-center justify-between w-full">
                        <Link
                            href="/account/orders"
                            className="group/details-back flex items-center gap-2 h-auto hover:no-underline cursor-pointer text-md font-bold text-black/50 hover:text-black px-0 transition-brand"
                        >
                            <MoveLeft className="size-4 stroke-black/50 group-hover/details-back:stroke-black transition-brand" />
                            Back
                        </Link>
                        <span className="text-sm font-medium leading-lg tracking-wider text-black/25">
                            ID {order.orderNumber.split("-")[1]}
                        </span>
                    </div>
                }
            >
                <OrderContent order={order} />
            </DashboardWrapper>
            <div className="sticky top-[154px] flex flex-col gap-4 w-[35%]">
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
