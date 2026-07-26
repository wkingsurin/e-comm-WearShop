import Skeleton from "@/components/shared/skeleton";

export default function DescriptionSkeleton() {
    return (
        <div className="flex flex-col justify-between gap-3 px-3 pb-3 h-[95px]">
            <div className="flex justify-between items-center">
                <div className="flex items-end gap-1">
                    <Skeleton className="w-16 h-5" />
                    <Skeleton className="w-14 h-5" />
                </div>
                <Skeleton className="w-10 h-4" />
            </div>
            <div className="flex flex-col gap-[6px] items-start leading-base text-sans uppercase tracking-wider">
                <Skeleton className="w-[70%] h-5" />
                <Skeleton className="w-[50%] h-3" />
            </div>
        </div>
    );
}
