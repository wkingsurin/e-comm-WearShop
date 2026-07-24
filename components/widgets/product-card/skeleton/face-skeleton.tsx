import ImageSkeleton from "@/components/shared/image-skeleton";
import Skeleton from "@/components/shared/skeleton";

export default function FaceSkeleton() {
    return (
        <div className="relative flex items-center justify-center w-full h-[260px] bg-[#F4F4F6] rounded-xl overflow-hidden trnasition-all duration-30 select-none">
            <Skeleton className="absolute! top-[6px] right-[6px] w-10 h-10" />
            <ImageSkeleton className="absolute w-full h-full" />
        </div>
    );
}
