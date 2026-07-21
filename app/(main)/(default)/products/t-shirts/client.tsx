"use client";

import Container from "@/components/shared/container";
import Section from "@/components/shared/section";
import SectionTitle from "@/components/shared/section-title";
import SortSelect from "@/components/shared/sort-select";
import ProductCard from "@/components/widgets/product-card/product-card";
import { useFavorites } from "@/features/favorites/hooks/use-favorites";
import { IProduct } from "@/types/store/ui.types";

export default function TShirtsClient({ products }: { products: IProduct[] }) {
    const { data: favorites = {} } = useFavorites();

    return (
        <Section>
            <Container className="px-2 md:px-4!">
                <div className="flex flex-col gap-5">
                    <div className="relative flex flex-col gap-4 lg:flex-row items-start lg:items-center lg:gap-auto justify-between px-2 md:px-0!">
                        <div className="flex order-2 lg:order-1 items-start gap-[6px]">
                            <SectionTitle>T-Shirts</SectionTitle>
                            <span className="text-base font-normal tracking-wider leading-base">
                                ({products.length})
                            </span>
                        </div>
                        <SortSelect className="flex order-1 lg:order-2 gap-3 lg:absolute lg:-top-[12px] right-0" />
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-1 lg:gap-5">
                        {products.map((item) => (
                            <ProductCard
                                key={item.id}
                                data={item}
                                isFavorite={!!favorites[item.id]}
                            />
                        ))}
                    </div>
                </div>
            </Container>
        </Section>
    );
}
