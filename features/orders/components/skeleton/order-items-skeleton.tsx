import OrderItemSkeleton from "./order-item-skeleton";

export default function OrderItemsSkeleton() {
    return (
        <div className="grid grid-cols-3 lg:grid-cols-4 gap-3 h-full">
            {[1, 2, 3, 4].map((item) => {
                return <OrderItemSkeleton key={item} />;
            })}
        </div>
    );
}
