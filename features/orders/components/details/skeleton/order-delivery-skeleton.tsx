import Skeleton from "@/components/shared/skeleton";

export default function OrderDeliverySkeleton() {
    return (
        <div className="flex flex-col gap-4 w-full rounded-xl bg-[#F8F9FA] px-3 py-6 md:p-6">
            <div className="flex gap-3 items-center">
                <Skeleton className="w-50 h-6" />
                <Skeleton className="w-20 h-6" />
            </div>
            <div className="flex flex-col gap-2">
                <div className="flex items-center gap-3">
                    <Skeleton className="w-10 h-10" />
                    <Skeleton className="w-[140px] h-4" />
                </div>
                <div className="flex items-center gap-3">
                    <Skeleton className="w-10 h-10" />
                    <Skeleton className="w-[320px] h-4" />
                </div>
                <div className="flex items-center gap-3">
                    <Skeleton className="w-10 h-10" />
                    <Skeleton className="w-[160px] h-4" />
                </div>
            </div>
        </div>
    );
}
