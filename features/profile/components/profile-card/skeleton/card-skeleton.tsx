import Skeleton from "@/components/shared/skeleton";
import MarkerSkeleton from "./marker-skeleton";

export default function ProfileCardSkeleton() {
    return (
        <div className="flex flex-col items-start gap-4 bg-[#F8F9FA] rounded-xl p-3">
            <div className="flex flex-col md:flex-row h-5 gap-0 md:gap-2 items-center">
                <MarkerSkeleton />
            </div>
            <div className="flex flex-col items-start gap-4">
                <div className="flex gap-3 items-center">
                    <Skeleton className="w-7 h-7" />
                    <Skeleton className="w-30 h-5" />
                </div>

                <div className="flex gap-3 items-center">
                    <Skeleton className="w-7 h-7" />
                    <Skeleton className="w-30 h-5" />
                </div>
                <Skeleton className="w-20 h-6" />
            </div>
        </div>
    );
}
