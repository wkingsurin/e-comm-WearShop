"use client";

import Link from "next/link";
import FastViewButton from "./fast-view-button";
import { IProductFaceProps } from "@/types/components/widgets/product-card.types";
import HeartButton from "@/components/shared/heart-button";
import { useAddLastSeen } from "@/features/last-seen/hooks/use-add-last-seen";
import ProductCarousel from "./carousel";

export default function GalleryMobile({
    data,
    defaultVariant,
    isFavorite,
}: IProductFaceProps) {
    const { mutate: addLastSeen } = useAddLastSeen();

    const defaultColorId = defaultVariant.attributes.colorId;
    const defaultColor = data.options.color.find(
        (c) => c.id === defaultColorId,
    );
    const defaultSize = defaultVariant.attributes.size;

    if (!defaultColor) return;

    return (
        <Link
            href={`/products/${data.slug}?color=${defaultColor.slug}&size=${defaultSize}`}
            className="relative flex items-center justify-center w-full h-[260px] bg-[#F4F4F6] rounded-xl overflow-hidden trnasition-all duration-300 cursor-pointer select-none"
            onClick={() => {
                addLastSeen(data.id);
            }}
            draggable={false}
        >
            <FastViewButton data={data} variantId={defaultVariant.id} />
            <HeartButton
                productId={data.id}
                isFavorite={isFavorite}
                size="sm"
            />
            <ProductCarousel images={defaultColor.images} />
        </Link>
    );
}
