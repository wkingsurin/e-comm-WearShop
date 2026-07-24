import Skeleton from "@/components/shared/skeleton";

export default function PaymentsSkeleton() {
    return (
        <div className="flex flex-col gap-3 min-h-[94px] bg-white rounded-xl px-3 py-6 lg:p-6 hover:shadow-[0_0_12px_-3px_rgba(0,0,0,.1)] transition-brand">
            <Skeleton className="w-[140px] h-5" />
            <div className="flex gap-2">
                {[1, 2, 3].map((item) => (
                    <Skeleton key={item} className="w-1/3 h-10" />
                ))}
            </div>
        </div>
    );
}
