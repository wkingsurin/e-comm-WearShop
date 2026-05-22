"use client";

import { Heart, ShoppingBag, Trash, Trash2 } from "lucide-react";
import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";
import { useUIStore } from "@/lib/store/ui.store";

interface IProps {
	fav?: boolean;
}

export default function ProductCard({ fav }: IProps) {
	const data = { title: "Under Armour", price: 7790, currency: "$" };
	const updateOverlay = useUIStore((s) => s.updateOverlay);
	const updateModal = useUIStore((s) => s.updateModal);

	const src = (size: number) => `/image-${size}.png`;

	const type = "FastWatch";

	return (
		<div
			className={`group/card flex flex-col gap-4 rounded-xl w-full ${
				fav ? "md:w-1/3" : "md:w-1/4"
			} md:max-w-[305px]`}
		>
			<div
				className="relative flex items-center justify-center w-full h-[380px] rounded-xl bg-[#F4F4F6] border border-transparent group-hover/card:border-black overflow-hidden trnasition-all duration-300 cursor-zoom-in"
				onClick={() => {
					updateOverlay({ open: true });
					updateModal({ contentType: type });
				}}
			>
				<Image
					src={src(480)}
					alt={data.title}
					width={332}
					height={480}
					priority
					className="rounded-xl w-[220px] h-[318px]"
				/>
				<Button
					size="icon-lg"
					className="group/tag absolute top-3 right-3 bg-black/10 backdrop-blur-[12px] hover:bg-[#EC0404]/10"
					onClick={(e) => e.stopPropagation()}
				>
					{fav ? (
						<Trash2 className="size-5 stroke-black stroke-[1.5px] group-hover/tag:stroke-[#EC0404] transition-brand" />
					) : (
						<Heart className="size-5 stroke-black stroke-[1.5px] group-hover/tag:stroke-[#EC0404] group-hover/tag:fill-[#EC0404]" />
					)}
				</Button>
			</div>
			<div className="flex flex-col gap-4">
				<Link
					href="/"
					className="font-mono font-medium uppercase tracking-wider leading-lg"
				>
					{data.title}
				</Link>
				<div className="flex items-center justify-between gap-10">
					<span className="font-medium text-lg tracking-wider leading-md">
						{data.currency} {data.price / 100 + "0"}
					</span>
					<Button
						className="gap-3"
						onClick={() => {
							updateOverlay({ open: true });
							updateModal({ contentType: type });
						}}
					>
						<ShoppingBag className="size-4 stroke-[1.5px] stroke-white" />
						Pack
					</Button>
				</div>
			</div>
		</div>
	);
}
