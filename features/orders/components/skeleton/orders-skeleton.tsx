import DashboardWrapper from "@/components/shared/dashboard-wrapper";
import OrderSkeleton from "./order-skeleton";

export default function OrdersSkeleton() {
    return (
        <DashboardWrapper className="min-h-[534px] px-1! md:px-6!">
            {[1, 2, 3].map((order) => {
                return <OrderSkeleton key={order} />;
            })}
        </DashboardWrapper>
    );
}
