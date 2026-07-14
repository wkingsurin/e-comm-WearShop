"use client";

// import { useSimilarStore } from "@/lib/store/similar.store";

import Main from "@/components/main";
import Container from "@/components/shared/container";
import Section from "@/components/shared/section";
import SectionTitle from "@/components/shared/section-title";
import SimilarSection from "@/components/widgets/similar-section";
import LastSeenSection from "@/components/widgets/last-seen-section";
import Gallery from "./gallery";
import Description from "./description";
import SellMenu from "./sell-menu";
import { IProduct } from "@/types/store/ui.types";
import { useRouter, useSearchParams } from "next/navigation";
import {
    getColorBySlug,
    getCurrentVariant,
} from "@/lib/selectors/product.selectors";
import { useFavorites } from "@/features/favorites/hooks/use-favorites";
import { MoveLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

interface IProps {
    product: IProduct;
}

export interface IDetails {
    id: string;
    label: string;
    description: string;
}

export default function ProductClient({ product }: IProps) {
    const { data: favorites = {} } = useFavorites();

    const searchParams = useSearchParams();
    const selectedColorSlug = searchParams.get("color");
    const selectedSize = searchParams.get("size");

    const detailsData: IDetails[] = [
        {
            id: "1",
            label: "Fabric type",
            description: "80% Cotton, 20% Polyester - PES",
        },
        {
            id: "2",
            label: "Care instructions",
            description: "Machine Wash",
        },
        {
            id: "3",
            label: "Origin",
            description: "Imported",
        },
    ];

    const router = useRouter();

    // const computeSimilarProducts = useSimilarStore(
    // 	(s) => s.computeSimilarProducts
    // );

    if (!selectedColorSlug) return null;

    const currentColor = getColorBySlug(product, selectedColorSlug);
    const selectedColorId = currentColor?.id;

    if (!currentColor || !selectedSize || !selectedColorId) return;

    const currentVariant = getCurrentVariant(
        product,
        selectedColorId,
        selectedSize,
    );

    const images = currentColor.images;

    if (!currentVariant || !images) return;

    return (
        <Main>
            <Section>
                <Container>
                    <div className="flex flex-col gap-5">
                        <div className="flex gap-4">
                            <Button
                                className="group/page-back flex items-center gap-3 font-bold text-md leading-base tracking-wider text-black/50 hover:no-underline cursor-pointer h-auto px-0 hover:text-black"
                                onClick={() => router.back()}
                                variant="link"
                            >
                                <MoveLeft className="size-4 stroke-black/50 group-hover/page-back:stroke-black transition-brand" />{" "}
                                Back
                            </Button>
                            <SectionTitle>
                                {product.category.name} {product.title}
                            </SectionTitle>
                        </div>
                        <div className="flex gap-5 min-h-[640px]">
                            <Gallery
                                key={currentVariant.id}
                                productName={product.title}
                                images={images}
                            />
                            <div className="flex gap-4 items-start justify-between w-full">
                                <Description
                                    product={product}
                                    currentVariant={currentVariant}
                                    detailsData={detailsData}
                                    activeColorId={selectedColorId}
                                />
                                {currentVariant.stock === 0 && (
                                    <span className="flex items-center justify-center w-full h-10 rounded-xl bg-black/10 tracking-wide">
                                        Out of stock
                                    </span>
                                )}
                                {currentVariant.stock > 0 && (
                                    <SellMenu
                                        product={product}
                                        currentVariant={currentVariant}
                                        isFavorite={!!favorites[product.id]}
                                    />
                                )}
                            </div>
                        </div>
                    </div>
                </Container>
            </Section>
            <SimilarSection />
            <LastSeenSection />
        </Main>
    );
}
