import Skeleton from "@/components/shared/skeleton";
import SummarySkeleton from "@/components/widgets/summary/skeleton/summary-skeleton";

export default function OrderSummarySkeleton() {
    return (
        <SummarySkeleton>
            <Skeleton className="w-full h-[50px]" />
        </SummarySkeleton>
    );
}
