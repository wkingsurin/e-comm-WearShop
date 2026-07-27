import CheckoutSummarySkeleton from "./checkout-summary-skeleton";
import CheckoutItemsSkeleton from "./checkout-items-skeleton";
import DashboardWrapper from "@/components/shared/dashboard-wrapper";
import SelectorSkeleton from "./selector-skeleton";
import ShippingSkeleton from "./shipping-skeleton";
import CheckoutEditSkeleton from "./checkout-edit-skeleton";
import Skeleton from "@/components/shared/skeleton";

export default function CheckoutSkeleton() {
    return (
        <div className="flex flex-col gap-5">
            <div className="flex gap-3 lg:flex-row items-center lg:gap-4 px-3 md:px-0!">
                <Skeleton className="w-[70px] h-[18px]" />
                <Skeleton className="w-30 h-6" />
            </div>

            <div className="relative flex flex-col md:flex-row items-start gap-5 w-full">
                <div className="flex flex-col gap-5 w-full md:w-[65%]">
                    <DashboardWrapper className="min-h-[230px]! hover:shadow-transparent">
                        <CheckoutItemsSkeleton />
                    </DashboardWrapper>
                    <div className="flex flex-col gap-5 md:flex-row w-full">
                        <SelectorSkeleton />
                        <SelectorSkeleton />
                    </div>
                    <ShippingSkeleton />
                </div>
                <div className="relative md:sticky md:top-[154px] flex flex-col gap-4 w-full md:w-[35%]">
                    <CheckoutSummarySkeleton />
                    <CheckoutEditSkeleton />
                </div>
            </div>
        </div>
    );
}
