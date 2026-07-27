import CheckoutItemSkeleton from "./checkout-item-skeleton";

export default function CheckoutItemsSkeleton() {
    return (
        <div className="grid grid-cols-3 md:grid-cols-5 gap-3">
            {[1, 2, 3].map((item) => (
                <CheckoutItemSkeleton key={item} />
            ))}
        </div>
    );
}
