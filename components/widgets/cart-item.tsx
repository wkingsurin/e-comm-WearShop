"use client";

import { Heart, Minus, Plus, Trash2 } from "lucide-react";
import { Button } from "../ui/button";
import Image from "next/image";
import { useFavorites } from "../hooks/useFavorites";
import useCart from "../hooks/useCart";
import { mapProductToFavorite } from "@/app/mappers/mapper";
import { ICartItemProps } from "@/app/types/components/widgets/cart-item.types";
import { useUIStore } from "@/lib/store/ui.store";

export default function CartItem({ data }: ICartItemProps) {
	const openConfirm = useUIStore((s) => s.openConfirm);

	const { isFavorite, toggleFavorite } = useFavorites();
	const { removeItem, incrementItem, decrementItem } = useCart();
	const isFav = isFavorite(data.id);

	const favData = mapProductToFavorite(data);

	const handleDelete = () => {
		openConfirm({
			title: "Delete this prodict?",
			content: "You`re sure? Undo this isn`t possible!",
			confirmText: "Confirm",
			cancelText: "Cancel",
			onConfirm: () => removeItem(data),
		});
	};

	return (
		<div className="flex gap-[30px] bg-black/5 hover:bg-black/10 rounded-xl p-[3px] pr-[18px] overflow-hidden transition-brand">
			<div className="relative w-[160px] h-[192px] bg-[#F4F4F6] rounded-md">
				<Image
					src={data.image}
					alt={data.title}
					width={169}
					height={240}
					className="rounded-md w-full h-full object-contain cursor-zoom-in"
				/>
				<Button
					size="icon-lg"
					className={`group/tag absolute top-[6px] right-[6px] bg-black/10 backdrop-blur-[12px] hover:bg-[#EC0404]/10 ${
						isFav && "bg-[#EC0404]/10"
					}`}
					onClick={() => toggleFavorite(favData)}
				>
					<Heart
						className={`size-5 stroke-black stroke-[1.5px] group-hover/tag:stroke-[#EC0404] group-hover/tag:fill-[#EC0404] ${
							isFav && "fill-[#EC0404] stroke-[#EC0404]!"
						}`}
					/>
				</Button>
			</div>
			<div className="flex gap-[60px] justify-between flex-1 py-3">
				<div className="flex flex-col items-start justify-between">
					<div className="flex flex-col gap-[6px] font-mono">
						<span className="font-medium text-lg leading-lg tracking-wider">
							{data.brandName}
						</span>
						<p className="tracking-wider leading-lg">{data.categorySlug}</p>
						<p className="tracking-wider leading-lg">{data.selectedSize}</p>
						<p className="tracking-wider leading-lg">{data.selectedColor}</p>
					</div>

					<div className="group/amount flex rounded-xl bg-white border-[0.5px] border-black/10 hover:border-black/15 hover:shadow-[0_0_9px_-3px_var(--black)]/25 transition-brand">
						<Button
							className="flex gap-3 w-10 h-10 bg-white hover:bg-white"
							onClick={() => decrementItem(data)}
						>
							<Minus className="size-4 stroke-[1.5px] stroke-black" />
						</Button>
						<span className="flex items-center justify-center w-10 h-10 font-mono tracking-wider leading-lg">
							{data.quantity}
						</span>
						<Button
							className="flex gap-3 w-10 h-10 bg-white hover:bg-white"
							onClick={() => incrementItem(data)}
						>
							<Plus className="size-4 stroke-[1.5px] stroke-black" />
						</Button>
					</div>
				</div>
				<div className="flex flex-col justify-between items-end">
					<Button
						className="group/cancel flex gap-3 w-10 h-10 bg-black/10 hover:bg-[#EC0404]/10 text-black hover:text-[#EC0404]/75"
						onClick={() => {
							handleDelete();
						}}
					>
						<Trash2 className="size-4 stroke-[1.5px] stroke-black group-hover/cancel:stroke-[#EC0404]/75 transition-brand" />
					</Button>
					<span className="font-medium text-lg tracking-wider leading-md">
						{data.currency} {(data.price * data.quantity) / 100 + "0"}
					</span>
				</div>
			</div>
		</div>
	);
}
