"use client";

import { useOrder } from "@/features/orders/hooks/use-order";
import { EMPTY_ORDER } from "@/features/orders/constants";
import { useRouter } from "next/navigation";
import { useUIStore } from "@/lib/store/ui.store";
import ShippingForm from "@/features/checkout/components/shipping-form/form";
import DashboardWrapper from "@/components/shared/dashboard-wrapper";
import { Button } from "@/components/ui/button";
import { MoveLeft } from "lucide-react";
import OrderContent from "@/features/orders/components/details/order-content";
import OrderSummary from "@/features/orders/components/details/order-summary";
import OrderReturn from "@/features/orders/components/details/order-return";
import OrderConfirmModal from "@/features/orders/components/order-confirm-modal";
import { useCancelOrder } from "@/features/orders/hooks/use-cancel-order";

export default function OrderPageClient({ orderId }: { orderId: string }) {
    const { data: order = EMPTY_ORDER } = useOrder(orderId);
    const { mutate: cancelOrder } = useCancelOrder();

    const openDialog = useUIStore((s) => s.openDialog);
    const openConfirm = useUIStore((s) => s.openConfirm);

    const handleEdit = () => {
        openDialog({
            title: "",
            content: (
                <ShippingForm
                    initialValues={{
                        country: order.shipping.city,
                        city: order.shipping.city,
                        address: order.shipping.address,
                        postalCode: order.shipping.postalCode,
                    }}
                />
            ),
        });
    };

    const handleCancel = () => {
        openConfirm({
            title: "Cancel this order?",
            content: <OrderConfirmModal data={order} />,
            onConfirm: () => cancelOrder({ orderId }),
        });
    };

    const router = useRouter();

    return (
        <div className="relative flex items-start gap-4 w-full">
            <DashboardWrapper
                className="max-w-[65%]"
                pageTitle={
                    <div className="flex items-center justify-between w-full">
                        <Button
                            variant="link"
                            className="group/details-back flex gap-2 h-auto hover:no-underline cursor-pointer text-md font-bold text-black/50 hover:text-black px-0"
                            onClick={() => router.back()}
                        >
                            <MoveLeft className="size-4 stroke-black/50 group-hover/details-back:stroke-black transition-brand" />
                            Back
                        </Button>
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
                    currency={order.currency}
                    itemsAmount={order.items.length}
                    totals={order.totals}
                />
                <OrderReturn onEdit={handleEdit} onCancel={handleCancel} />
            </div>
        </div>
    );
}
