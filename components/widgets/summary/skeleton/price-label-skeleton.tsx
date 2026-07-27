import Skeleton from "@/components/shared/skeleton";

export default function PriceLabelSkeleton() {
    return (
        <div className="flex justify-between">
            <Skeleton className="w-[170px] h-5" />
            <Skeleton className="w-[70px] h-5" />
        </div>
    );
}
