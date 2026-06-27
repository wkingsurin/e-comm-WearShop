"use client";

import { Button } from "../ui/button";
import { Heart } from "lucide-react";
import { IHeartButtonProps } from "@/types/components/shared/shared.types";
import { useUIStore } from "@/lib/store/ui.store";
import { useToggleFavorite } from "@/features/favorites/hooks/use-toggle-favorite";

export default function HeartButton({
	productId,
	isFavorite,
	inline = false,
}: IHeartButtonProps) {
	const { mutate: toggle, isPending } = useToggleFavorite();

	const openConfirm = useUIStore((s) => s.openConfirm);

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
			onConfirm: async () => {
				toggle(productId);
			},
		});
	};

	return (
		<Button
			size="icon-lg"
			className={`group/tag w-[30px] h-[30px] ${
				inline ? "w-10 h-10" : "absolute z-2 top-[6px] right-[6px]"
			} bg-transparent hover:bg-transparent backdrop-blur-[12px]`}
			disabled={isPending}
			onClick={(e) => {
				e.preventDefault();
				e.stopPropagation();

				if (isFavorite) {
					handleDelete();
				} else {
					toggle(productId);
				}
			}}
		>
			<Heart
				className={`size-5 stroke-black stroke-[1.5px] group-hover/tag:stroke-[#F51E1E] group-hover/tag:fill-[#F51E1E] ${
					isFavorite && "fill-[#F51E1E] stroke-[#F51E1E]!"
				}`}
			/>
		</Button>
	);
}
