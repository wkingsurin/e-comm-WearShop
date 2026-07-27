import Skeleton from "@/components/shared/skeleton";

export default function CheckoutEditSkeleton() {
    return (
        <div className="flex flex-col gap-4 bg-white rounded-xl px-3 py-6 md:p-6">
            <Skeleton className="w-full h-10" />
        </div>
    );
}
