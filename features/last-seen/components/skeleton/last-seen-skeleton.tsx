import Container from "../../../../components/shared/container";
import Section from "../../../../components/shared/section";
import Skeleton from "../../../../components/shared/skeleton";
import ProductCardSkeleton from "../../../../components/widgets/product-card/skeleton/product-card-skeleton";

export default function LastSeenSkeleton() {
    return (
        <Section>
            <Container className="h-[441px]">
                <div className="flex flex-col gap-5">
                    <div className="flex flex-col gap-4 md:gap-0 md:flex-row items-start md:items-center justify-between px-2 md:px-0!">
                        <div className="flex flex-col gap-[6px] order-2 md:order-1">
                            <Skeleton className="w-20 h-6" />
                            <Skeleton className="w-65 h-6" />
                        </div>
                        <Skeleton className="order-1 md:order-2 w-40 h-9" />
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-1 lg:gap-5">
                        {[1, 2, 3, 4, 5].map((product) => {
                            return <ProductCardSkeleton key={product} />;
                        })}
                    </div>
                </div>
            </Container>
        </Section>
    );
}
