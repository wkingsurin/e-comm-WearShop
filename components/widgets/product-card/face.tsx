"use client";

import RemoveButton from "@/components/shared/remove-button";
import Image from "next/image";
import useLastSeen from "@/hooks/useLastSeen";
import { mapProductToFavorite } from "@/app/mappers/mapper";
import Link from "next/link";
import FastViewButton from "./fast-view-button";
import { IProductFaceProps } from "@/types/components/widgets/product-card.types";
import HeartButton from "@/components/shared/heart-button";

export default function Face({
    data,
    defaultVariant,
    isFavorite,
    type = "Default",
}: IProductFaceProps) {
    const { addLastSeen } = useLastSeen();

    const favData = mapProductToFavorite(data);

    const defaultColorId = defaultVariant.attributes.colorId;
    const defaultColor = data.options.color.find(
        (c) => c.id === defaultColorId,
    );
    const defaultSize = defaultVariant.attributes.size;

    if (!defaultColor) return;

    return (
        <Link
            href={`/products/${data.slug}?color=${defaultColor.slug}&size=${defaultSize}`}
            className="relative flex items-center justify-center w-full h-[260px] bg-[#F4F4F6] rounded-xl overflow-hidden trnasition-all duration-300 cursor-pointer"
            onClick={() => {
                addLastSeen(data);
            }}
        >
            <FastViewButton data={data} variantId={defaultVariant.id} />
            {type === "Favorite" ? (
                <RemoveButton data={favData} />
            ) : (
                <HeartButton productId={data.id} isFavorite={isFavorite} />
            )}
            <div className="absolute z-1 w-full h-full bg-transparent group-hover/card:bg-black/15 transition-brand"></div>
            <Image
                src={defaultColor.images[0].src}
                alt={data.title}
                width={332}
                height={480}
                priority
                className="rounded-xl w-[180px] h-[200px] object-contain scale-99 group-hover/card:scale-101 transition-brand"
            />
        </Link>
    );
}
