"use client";

import FavoriteButton from "@/components/shared/favorite-button";
import RemoveButton from "@/components/shared/remove-button";
import Image from "next/image";
import Discount from "./discount";
import useLastSeen from "@/hooks/useLastSeen";
import { mapProductToFavorite } from "@/app/mappers/mapper";
import Link from "next/link";
import FastViewButton from "./fast-view-button";
import { IProductFaceProps } from "@/types/components/widgets/product-card.types";

export default function Face({
	data,
	defaultVariant,
	type = "Default",
}: IProductFaceProps) {
	const { addLastSeen } = useLastSeen();

	const favData = mapProductToFavorite(data);

	const defaultColorId = defaultVariant.attributes.colorId;
	const defaultColor = data.options.color.find((c) => c.id === defaultColorId);
	const defaultSize = defaultVariant.attributes.size;

	if (!defaultColor) return;

	return (
		<Link
			href={`/products/${data.slug}?color=${defaultColor.slug}&size=${defaultSize}`}
			className="relative flex items-center justify-center w-full h-[340px] bg-[#F4F4F6] rounded-xl overflow-hidden trnasition-all duration-300 cursor-pointer"
			onClick={() => {
				addLastSeen(data);
			}}
		>
			<FastViewButton data={data} variantId={defaultVariant.id} />
			{type === "Favorite" ? (
				<RemoveButton data={favData} />
			) : (
				<FavoriteButton data={favData} />
			)}
			<Discount value="-35%" />
			<div className="absolute z-1 w-full h-full bg-transparent group-hover/card:bg-black/10 transition-brand"></div>
			<Image
				src={defaultColor.images[0].src}
				alt={data.title}
				width={332}
				height={480}
				priority
				className="rounded-xl w-[220px] h-[318px] object-contain scale-99 group-hover/card:scale-101 transition-brand"
			/>
		</Link>
	);
}
