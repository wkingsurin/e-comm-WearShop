"use client";

import DashboardWrapper from "@/components/shared/dashboard-wrapper";
import { useOrder } from "@/features/orders/hooks/use-order";
import { EMPTY_ORDER } from "@/features/orders/constants";
import OrderMenu from "@/features/orders/components/details/order-menu";
import OrderContent from "@/features/orders/components/details/order-content";

export default function OrderPageClient({ orderId }: { orderId: string }) {
    const { data: order = EMPTY_ORDER } = useOrder(orderId);

    return (
        <DashboardWrapper pageTitle={<OrderMenu order={order} />}>
            <OrderContent order={order} />
        </DashboardWrapper>
    );
}
