"use client";

import { IFavorite, useFavoriteStore } from "@/lib/store/favorites.store";
import { Button } from "../ui/button";
import { Heart } from "lucide-react";

interface IProps {
	data: IFavorite;
}

export default function FavoriteButton({ data }: IProps) {
	const isFav = useFavoriteStore((s) => !!s.favoritesIds[data.id]);
	const toggle = useFavoriteStore((s) => s.toggleFavorite);

	return (
		<Button
			size="icon-lg"
			className={`group/tag absolute top-[6px] right-[6px] bg-black/10 backdrop-blur-[12px] hover:bg-[#EC0404]/10 ${
				isFav && "bg-[#EC0404]/10"
			}`}
			onClick={(e) => {
				e.stopPropagation();
				toggle(data);
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
