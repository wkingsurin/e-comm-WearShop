import Skeleton from "@/components/shared/skeleton";
import ImageSkeleton from "@/components/shared/image-skeleton";

export default function CartItemSkeleton() {
    return (
        <div className="flex gap-5 overflow-hidden transition-brand">
            <ImageSkeleton className="w-[133px] h-[160px]" />
            <div className="flex gap-[60px] justify-between flex-1 py-2">
                <div className="flex flex-col items-start justify-between">
                    <div className="flex flex-col gap-[6px] w-full">
                        <Skeleton className="w-full md:w-50 h-[19px]" />
                        <Skeleton className="w-full md:w-20 h-[22px]" />
                    </div>

                    <Skeleton className="w-30 h-[50px] md:h-10" />

                    <Skeleton className="w-20 h-[22px]" />
                </div>
                <Skeleton className="w-10 h-10" />
            </div>
        </div>
    );
}
