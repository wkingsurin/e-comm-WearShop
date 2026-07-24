"use client";

import DashboardWrapper from "@/components/shared/dashboard-wrapper";
import Dummy from "@/components/shared/dummy";
import { Lock, Package } from "lucide-react";
import { useOrders } from "@/features/orders/hooks/use-orders";
import { EMPTY_ORDERS } from "@/features/orders/constants";
import Order from "@/features/orders/components/order";
import { useSession } from "next-auth/react";
import ProtectedState from "@/components/shared/protected-state";

export default function OrdersClient() {
    const session = useSession();
    const authorized = session.status === "authenticated";

    const { data: orders = EMPTY_ORDERS } = useOrders();

    return (
        <>
            {!authorized ? (
                <ProtectedState
                    icon={Lock}
                    description="Track your orders, reorder orders and view details."
                />
            ) : (
                <DashboardWrapper
                    className={`${!authorized && "justify-center"} min-h-[534px] px-1! md:px-6!`}
                >
                    {orders.length > 0 && (
                        <>
                            {orders.map((order) => {
                                return <Order key={order.id} data={order} />;
                            })}
                        </>
                    )}
                    {orders.length === 0 && (
                        <Dummy icon={Package} text="You haven`t orders" />
                    )}
                </DashboardWrapper>
            )}
        </>
    );
}
