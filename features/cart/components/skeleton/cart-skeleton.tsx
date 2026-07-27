import DashboardWrapper from "@/components/shared/dashboard-wrapper";
import CartItemSkeleton from "./cart-item-skeleton";
import SellMenuSkeleton from "./sell-menu-skeleton";

export default function CartSkeleton() {
    return (
        <div
            className={`relative flex flex-col md:flex-row items-start gap-5 min-h-[598px]`}
        >
            <DashboardWrapper className="min-h-[598px] md:w-[65%] hover:shadow-none">
                {
                    <div className="flex flex-col gap-4 flex-1 [&>*:not(:last-child)]:border-b [&>*:not(:last-child)]:pb-4">
                        {[1, 2, 3].map((item) => (
                            <CartItemSkeleton key={item} />
                        ))}
                    </div>
                }
            </DashboardWrapper>
            <SellMenuSkeleton />
        </div>
    );
}
