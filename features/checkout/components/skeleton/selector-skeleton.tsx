import Skeleton from "@/components/shared/skeleton";

export default function SelectorSkeleton() {
    return (
        <div className="flex flex-col gap-4 w-full md:w-1/2 min-h-[94px] bg-white rounded-xl px-3 py-6 md:p-6">
            <Skeleton className="w-50 h-5" />
            <div className="flex flex-col gap-2">
                {[1, 2, 3].map((item) => {
                    return <Skeleton key={item} className="w-full h-10" />;
                })}
            </div>
        </div>
    );
}
