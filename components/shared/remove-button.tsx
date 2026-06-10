"use client";

import { Button } from "../ui/button";
import { Trash2 } from "lucide-react";
import { useFavorites } from "../../hooks/useFavorites";
import { useUIStore } from "@/lib/store/ui.store";
import { IRemoveButtonProps } from "@/types/components/shared/shared.types";

export default function RemoveButton({ data }: IRemoveButtonProps) {
	const { toggleFavorite } = useFavorites();
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
			onConfirm: () => {
				toggleFavorite(data);
			},
		});
	};

	return (
		<Button
			size="icon-lg"
			className={`group/tag absolute z-2 top-[6px] right-[6px] w-[30px] h-[30px] bg-transparent hover:bg-transparent backdrop-blur-[12px]`}
			onClick={(e) => {
				e.preventDefault();
				e.stopPropagation();
				handleDelete();
			}}
		>
			<Trash2
				className={`size-4 stroke-black stroke-[1.5px] group-hover/tag:stroke-[#EC0404] transition-brand`}
			/>
		</Button>
	);
}
