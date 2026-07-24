import Skeleton from "@/components/shared/skeleton";
import OrderItemSkeleton from "./order-item-skeleton";

export default function OrderProductsSkeleton() {
    return (
        <div className="flex flex-col gap-4 w-full rounded-xl bg-[#F8F9FA] px-3 py-6 md:p-6">
            <Skeleton className="w-[120px] h-6" />
            <div className="flex flex-col gap-3 [&>*:not(:last-child)]:border-b [&>*:not(:last-child)]:border-[#E5E7EB] [&>*:not(:last-child)]:pb-3">
                {[1, 2, 3].map((item) => {
                    return <OrderItemSkeleton key={item} />;
                })}
            </div>
        </div>
    );
}
