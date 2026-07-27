"use client";

import ProtectedState from "@/components/shared/protected-state";
import OrdersSkeleton from "@/features/orders/components/skeleton/orders-skeleton";
import { Lock } from "lucide-react";
import { useSession } from "next-auth/react";

export default function OrdersLoading() {
    const { status } = useSession();

    if (status === "unauthenticated") {
        return (
            <ProtectedState
                icon={Lock}
                description="Track your orders, reorder orders and view details."
            />
        );
    }
    
    return <OrdersSkeleton />;
}
