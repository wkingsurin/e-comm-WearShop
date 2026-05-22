"use client";

import { ShoppingBag } from "lucide-react";
import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";
import { IProduct, useUIStore } from "@/lib/store/ui.store";
import { useState } from "react";
import FavoriteButton from "../shared/favorite-button";
import RemoveButton from "../shared/remove-button";
import { useFavorites } from "../hooks/useFavorites";

interface IProps {
	data: IProduct;
	type?: "Default" | "Favourite";
}

export default function ProductCard({ data, type = "Default" }: IProps) {
	// const data = { title: "Under Armour", price: 7790, currency: "$" }
	const updateOverlay = useUIStore((s) => s.updateOverlay);
	const updateModal = useUIStore((s) => s.updateModal);

	const src = (size: number) => `/image-${size}.png`;

	const contentType = "FastWatch";

	const deleteItem = (id: string) => {
		const products = useUIStore.getState().cart.products;
		const updatedProducts = products.filter((item) => item.id !== id);
		useUIStore.getState().updateCart({ products: updatedProducts });
	};

	return (
		<div
			className={`group/card flex flex-col gap-4 rounded-xl w-full ${
				type === "Favourite" ? "md:w-1/3" : "md:w-1/4"
			} md:max-w-[305px]`}
		>
			<div
				className="relative flex items-center justify-center w-full h-[380px] rounded-xl bg-[#F4F4F6] border border-transparent group-hover/card:border-black overflow-hidden trnasition-all duration-300 cursor-zoom-in"
				onClick={() => {
					updateOverlay({ open: true });
					updateModal({ contentType });
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
				{type === "Favourite" ? (
					<RemoveButton data={data} />
				) : (
					<FavoriteButton data={data} />
				)}
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
							updateModal({ contentType });
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
