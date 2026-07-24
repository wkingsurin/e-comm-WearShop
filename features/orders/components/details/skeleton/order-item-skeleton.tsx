import ImageSkeleton from "@/components/shared/image-skeleton";
import Skeleton from "@/components/shared/skeleton";

export default function OrderItemSkeleton() {
    return (
        <div className="relative flex items-start justify-between w-full overflow-hidden">
            <div className="flex gap-3 items-center mr-12">
                <ImageSkeleton className="w-[83px] h-25" />
                <div className="flex flex-col gap-[6px] leading-lg tracking-wider text-black/50">
                    <Skeleton className="w-[140px] h-5" />
                    <Skeleton className="w-[80px] h-5" />
                    <Skeleton className="w-[120px] h-5" />
                </div>
            </div>
            <Skeleton className="w-10 h-10 mt-[6px] mr-[6px]" />
        </div>
    );
}
