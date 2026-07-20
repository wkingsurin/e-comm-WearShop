"use client";

import { useFavorites } from "@/features/favorites/hooks/use-favorites";
import useLastSeen from "../../hooks/useLastSeen";
import Container from "../shared/container";
import Section from "../shared/section";
import SectionSubtitle from "../shared/section-subtitle";
import SectionTitle from "../shared/section-title";
import SortSelect from "../shared/sort-select";
import ProductCard from "./product-card/product-card";

export default function LastSeenSection() {
    const { data: favorites = {} } = useFavorites();
    const { lastSeenIds, lastSeenItems } = useLastSeen();

    const orderedProducts = [...lastSeenIds]
        .reverse()
        .map((id) => lastSeenItems[id]);

    if (orderedProducts.length === 0) return null;

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
                        {orderedProducts.map((product) => {
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
