"use client";

import Skeleton from "@/components/shared/skeleton";

export default function ShippingSkeleton() {
    return (
        <div className="flex flex-col gap-3 min-h-[94px] bg-white rounded-xl px-3 py-6 md:p-6">
            <div className="flex items-center gap-3">
                <Skeleton className="w-30 h-6" />
                <Skeleton className="w-50 h-4" />
            </div>

            <div className="flex flex-col gap-2">
                <div className="flex items-center gap-3">
                    <Skeleton className="w-10 h-10" />
                    <Skeleton className="w-20 h-4" />
                </div>
                <div className="flex items-center gap-3">
                    <Skeleton className="w-10 h-10" />
                    <Skeleton className="w-50 h-4" />
                </div>
                <div className="flex items-center gap-3">
                    <Skeleton className="w-10 h-10" />
                    <Skeleton className="w-30 h-4" />
                </div>
            </div>
        </div>
    );
}
