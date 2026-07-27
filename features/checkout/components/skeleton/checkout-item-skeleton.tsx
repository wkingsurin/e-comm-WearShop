import ImageSkeleton from "@/components/shared/image-skeleton";
import Skeleton from "@/components/shared/skeleton";

export default function CheckoutItemSkeleton() {
    return (
        <div className="flex flex-col items-center gap-3 p-3 rounded-md bg-[#E5E7EB]/50 overflow-hidden">
            <ImageSkeleton className="w-[83px] h-25" />
            <div className="flex flex-col gap-[6px] items-center text-center">
                <Skeleton className="w-20 h-5" />
                <Skeleton className="w-25 h-5" />
            </div>
        </div>
    );
}
