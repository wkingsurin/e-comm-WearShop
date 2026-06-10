"use client";

import FavoriteButton from "@/components/shared/favorite-button";
import RemoveButton from "@/components/shared/remove-button";
import Image from "next/image";
import Discount from "./discount";
import useLastSeen from "@/components/hooks/useLastSeen";
import { mapProductToFavorite } from "@/app/mappers/mapper";
import Link from "next/link";
import { IProductFaceProps } from "@/app/types/components/widgets/product-card.types";
import FastViewButton from "./fast-view-button";

export default function ProductFace({
	data,
	type = "Default",
}: IProductFaceProps) {
	const { addLastSeen } = useLastSeen();

	const favData = mapProductToFavorite(data);

	return (
		<Link
			href={`/product/${data.id}/${data.variants[0].id}`}
			className="relative flex items-center justify-center w-full h-[340px] bg-[#F4F4F6] rounded-xl overflow-hidden trnasition-all duration-300 cursor-pointer"
			onClick={() => {
				addLastSeen(data);
			}}
		>
			<FastViewButton data={data} />
			{type === "Favourite" ? (
				<RemoveButton data={favData} />
			) : (
				<FavoriteButton data={favData} />
			)}
			<Discount value="-35%" />
			<div className="absolute z-1 w-full h-full bg-transparent group-hover/card:bg-black/10 transition-brand"></div>
			<Image
				src={data.variants[0].images[0].src}
				alt={data.title}
				width={332}
				height={480}
				priority
				className="rounded-xl w-[220px] h-[318px] object-contain scale-99 group-hover/card:scale-101 transition-brand"
			/>
		</Link>
	);
}
