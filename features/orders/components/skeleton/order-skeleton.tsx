import OrderContentSkeleton from "./order-content-skeleton";
import OrderMenuSkeleton from "./order-menu-skeleton";

export default function OrderSkeleton() {
    return (
        <div
            className={`flex flex-col md:flex-row gap-3 w-full h-[282px] md:h-[214px] px-3 py-4 md:p-4 rounded-lg bg-[#F8F9FA] transition-brand`}
        >
            <OrderMenuSkeleton />
            <OrderContentSkeleton />
        </div>
    );
}
