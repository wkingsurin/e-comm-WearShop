import PriceLabelSkeleton from "./price-label-skeleton";

export default function PriceListSkeleton() {
    return (
        <div className="flex flex-col gap-3">
            {[1, 2, 3, 4].map((price) => {
                return <PriceLabelSkeleton key={price} />;
            })}
        </div>
    );
}
