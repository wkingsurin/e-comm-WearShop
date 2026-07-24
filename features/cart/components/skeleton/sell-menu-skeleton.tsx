import CartSummarySkeleton from "./cart-summary-skeleton";
import PaymentsSkeleton from "./payments-skeleton";

export default function SellMenuSkeleton() {
    return (
        <div className="relative lg:sticky lg:top-[154px] flex flex-col gap-5 w-full md:w-[35%]">
            <CartSummarySkeleton />
            <PaymentsSkeleton />
        </div>
    );
}
