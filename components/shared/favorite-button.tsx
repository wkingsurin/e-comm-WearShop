"use client";

import { IFavorite } from "@/lib/store/favorites.store";
import { Button } from "../ui/button";
import { Heart } from "lucide-react";
import { useFavorites } from "../hooks/useFavorites";

interface IProps {
	data: IFavorite;
	inline?: boolean;
}

export default function FavoriteButton({ data, inline = false }: IProps) {
	const { isFavorite, toggleFavorite } = useFavorites();
	const isFav = isFavorite(data.productId);

	return (
		<Button
			size="icon-lg"
			className={`group/tag ${
				inline ? "" : "absolute top-[6px] right-[6px]"
			} bg-black/10 backdrop-blur-[12px] hover:bg-[#EC0404]/10 ${
				isFav && "bg-[#EC0404]/10"
			}`}
			onClick={(e) => {
				e.preventDefault();
				e.stopPropagation();
				toggleFavorite(data);
			}}
		>
			<Heart
				className={`size-5 stroke-black stroke-[1.5px] group-hover/tag:stroke-[#EC0404] group-hover/tag:fill-[#EC0404] ${
					isFav && "fill-[#EC0404] stroke-[#EC0404]!"
				}`}
			/>
		</Button>
	);
}
