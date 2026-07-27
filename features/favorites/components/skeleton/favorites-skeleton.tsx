import DashboardWrapper from "@/components/shared/dashboard-wrapper";
import ProductCardSkeleton from "@/components/widgets/product-card/skeleton/product-card-skeleton";

export default function FavoritesSkeleton() {
    return (
        <DashboardWrapper className="min-h-[534px] px-1! md:px-6! hover:shadow-none">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1 lg:gap-5">
                {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => {
                    return <ProductCardSkeleton key={item} />;
                })}
            </div>
        </DashboardWrapper>
    );
}
