import Skeleton from "@/components/shared/skeleton";

export default function OrderMenuSkeleton() {
    return (
        <div className="flex flex-row md:flex-col justify-between w-full md:w-1/4">
            <div className="flex items-center gap-3">
                <Skeleton className="w-20 h-5" />
                <Skeleton className="w-25 h-5" />
            </div>
            <Skeleton className="w-[120px] h-5" />
        </div>
    );
}
