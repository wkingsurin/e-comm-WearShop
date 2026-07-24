import OrderDeliverySkeleton from "./order-delivery-skeleton";
import OrderProductsSkeleton from "./order-products-skeleton";

export default function OrderContentSkeleton() {
    return (
        <div className="flex flex-col gap-5">
            <OrderDeliverySkeleton />
            <OrderProductsSkeleton />
        </div>
    );
}
