import Skeleton from "@/components/shared/skeleton";

export default function TotalPriceSkeleton() {
    return (
        <div className="flex justify-between border-t-[1px] border-[#E5E7EB] pt-4">
            <Skeleton className="w-[170px] h-[22px]" />
            <Skeleton className="w-[70px] h-[22px]" />
        </div>
    );
}
