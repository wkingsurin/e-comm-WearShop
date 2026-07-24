import { Button } from "@/components/ui/button";
import { Pencil } from "lucide-react";
import { useUIStore } from "@/lib/store/ui.store";
import ShippingForm from "@/features/checkout/components/shipping-form/form";
import Skeleton from "@/components/shared/skeleton";

export default function OrderReturnSkeleton() {
    return (
        <div className="flex flex-col gap-4 bg-white rounded-xl px-3 py-6 md:p-6 hover:shadow-[0_0_12px_-3px_rgba(0,0,0,.1)] transition-brand">
            <Skeleton className="w-full h-10" />
            <Skeleton className="w-full h-[50px]" />
        </div>
    );
}
