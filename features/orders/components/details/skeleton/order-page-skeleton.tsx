import DashboardWrapper from "@/components/shared/dashboard-wrapper";
import Skeleton from "@/components/shared/skeleton";
import OrderContentSkeleton from "./order-content-skeleton";
import OrderSummarySkeleton from "./order-summary-skeleton";
import OrderReturnSkeleton from "./order-return-skeleton";

export default function OrderPageSkeleton() {
    return (
        <div className="relative flex flex-col md:flex-row items-start gap-5 w-full">
            <DashboardWrapper
                className="w-full md:w-[65%] px-1! md:px-6! hover:shadow-none"
                pageTitle={
                    <div className="px-2">
                        <Skeleton className="w-[140px] h-4" />
                    </div>
                }
            >
                <OrderContentSkeleton />
            </DashboardWrapper>
            <div className="relative md:sticky md:top-[154px] flex flex-col gap-4 w-full md:w-[35%]">
                <OrderSummarySkeleton />
                <OrderReturnSkeleton />
            </div>
        </div>
    );
}
