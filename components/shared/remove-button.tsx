"use client";

import { useFavoriteStore } from "@/lib/store/favorites.store";
import { IFavourite } from "@/lib/store/ui.store";
import { Button } from "../ui/button";
import { Trash2 } from "lucide-react";

interface IProps {
	data: IFavourite;
}

export default function RemoveButton({ data }: IProps) {
	const remove = useFavoriteStore((s) => s.removeFavorite);

	return (
		<Button
			size="icon-lg"
			className={`group/tag absolute top-[6px] right-[6px] bg-black/10 backdrop-blur-[12px] hover:bg-[#EC0404]/10`}
			onClick={(e) => {
				e.stopPropagation();
				remove(data);
			}}
		>
			<Trash2
				className={`size-5 stroke-black stroke-[1.5px] group-hover/tag:stroke-[#EC0404] transition-brand`}
			/>
		</Button>
	);
}
