"use client";

import { Button } from "../ui/button";
import { Heart } from "lucide-react";
import { useFavorites } from "../../hooks/useFavorites";
import { IFavoriteButtonProps } from "@/app/types/components/shared/shared.types";
import { useUIStore } from "@/lib/store/ui.store";

export default function FavoriteButton({
	data,
	inline = false,
}: IFavoriteButtonProps) {
	const openConfirm = useUIStore((s) => s.openConfirm);
	const { isFavorite, toggleFavorite } = useFavorites();
	const isFav = isFavorite(data.productId);

	const handleDelete = () => {
		openConfirm({
			title: "Delete favorite?",
			content: (
				<p className="font-sans font-medium tracking-wider">
					You’re sure? Undo this isn’t possible!
				</p>
			),
			confirmText: "Delete",
			cancelText: "Cancel",
			onConfirm: () => {
				toggleFavorite(data);
			},
		});
	};

	return (
		<Button
			size="icon-lg"
			className={`group/tag w-[30px] h-[30px] ${
				inline ? "w-10 h-10" : "absolute z-2 top-[6px] right-[6px]"
			} bg-transparent hover:bg-transparent backdrop-blur-[12px]`}
			onClick={(e) => {
				e.preventDefault();
				e.stopPropagation();

				if (isFav) {
					handleDelete();
					return;
				}
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
