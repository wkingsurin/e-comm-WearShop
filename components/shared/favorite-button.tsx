"use client";

import { Button } from "../ui/button";
import { Heart } from "lucide-react";
import { useFavorites } from "../hooks/useFavorites";
import { IFavoriteButtonProps } from "@/app/types/components/shared/shared.types";

export default function FavoriteButton({
	data,
	inline = false,
}: IFavoriteButtonProps) {
	const { isFavorite, toggleFavorite } = useFavorites();
	const isFav = isFavorite(data.productId);

	return (
		<Button
			size="icon-lg"
			className={`group/tag ${
				inline ? "" : "absolute z-2 top-[6px] right-[6px]"
			} bg-transparent hover:bg-transparent backdrop-blur-[12px] w-[30px] h-[30px]`}
			onClick={(e) => {
				e.preventDefault();
				e.stopPropagation();
				toggleFavorite(data);
			}}
		>
			<Heart
				className={`size-5 stroke-black stroke-[1.5px] group-hover/tag:stroke-[#F51E1E] group-hover/tag:fill-[#F51E1E] ${
					isFav && "fill-[#F51E1E] stroke-[#F51E1E]!"
				}`}
			/>
		</Button>
	);
}
