"use client";

import LastSeenSkeleton from "./skeleton/last-seen-skeleton";
import { useLastSeen } from "@/features/last-seen/hooks/use-last-seen";
import Section from "@/components/shared/section";
import Container from "@/components/shared/container";
import SectionSubtitle from "@/components/shared/section-subtitle";
import SectionTitle from "@/components/shared/section-title";
import SortSelect from "@/components/shared/sort-select";
import ProductCard from "@/components/widgets/product-card/product-card";
import { useFavoritesMap } from "@/features/favorites/hooks/use-favorites-map";

export default function LastSeenClient() {
    const { data: favorites = {} } = useFavoritesMap();
    const { data: products = [], isPending } = useLastSeen();

    if (isPending) {
        return <LastSeenSkeleton />;
    }

    if (!products.length) return null;

    return (
        <Section>
            <Container>
                <div className="flex flex-col gap-5">
                    <div className="flex flex-col gap-4 md:gap-0 md:flex-row items-start md:items-center justify-between px-2 md:px-0!">
                        <div className="flex flex-col gap-[6px] order-2 md:order-1">
                            <SectionSubtitle>You See</SectionSubtitle>
                            <SectionTitle>Last seen products</SectionTitle>
                        </div>
                        <SortSelect className="order-1 md:order-2" />
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-1 lg:gap-5">
                        {products.map((product) => {
                            return (
                                <ProductCard
                                    key={product.id}
                                    data={product}
                                    isFavorite={!!favorites[product.id]}
                                />
                            );
                        })}
                    </div>
                </div>
            </Container>
        </Section>
    );
}
