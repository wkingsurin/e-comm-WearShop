"use client";

import { Heart, Minus, Plus, Trash2 } from "lucide-react";
import { Button } from "../ui/button";
import Image from "next/image";
import { IProduct, useUIStore } from "@/lib/store/ui.store";
import { useState } from "react";

interface IProps {
	data: IProduct;
}

export default function CartProductCard({ data }: IProps) {
	const [value, setValue] = useState<number>(1);
	const [favourite, setFavourite] = useState<boolean>(false);

	const onIncrement = () => setValue((prevValue) => prevValue + 1);
	const onDecrement = () =>
		setValue((prevValue) => (prevValue > 1 ? prevValue - 1 : prevValue));

	const toFavourites = () => {
		setFavourite((prev) => !prev);
	};

	const deleteItem = (id: string) => {
		const products = useUIStore.getState().cart.products;
		const updatedProducts = products.filter((item) => item.id !== id);
		useUIStore.getState().updateCart({ products: updatedProducts });
	};

	return (
		<div
			key={data.id}
			className="flex gap-[30px] bg-black/5 hover:bg-black/10 rounded-xl p-[3px] pr-[18px] overflow-hidden transition-brand"
		>
			<div className="relative w-[160px] h-[192px] bg-[#F4F4F6] rounded-md">
				<Image
					src={`/${data.image}`}
					alt={data.title}
					width={169}
					height={240}
					className="rounded-md w-full h-full object-contain cursor-zoom-in"
				/>
				<Button
					size="icon-lg"
					className={`group/tag absolute top-[6px] right-[6px] bg-black/10 backdrop-blur-[12px] hover:bg-[#EC0404]/10 ${
						favourite && "bg-[#EC0404]/10"
					}`}
					onClick={toFavourites}
				>
					<Heart
						className={`size-5 stroke-black stroke-[1.5px] group-hover/tag:stroke-[#EC0404] group-hover/tag:fill-[#EC0404] ${
							favourite && "fill-[#EC0404] stroke-[#EC0404]!"
						}`}
					/>
				</Button>
			</div>
			<div className="flex gap-[60px] justify-between flex-1 py-3">
				<div className="flex flex-col items-start justify-between">
					<div className="flex flex-col gap-[6px] font-mono">
						<span className="font-medium text-lg leading-lg tracking-wider">
							{data.title}
						</span>
						<p className="tracking-wider leading-lg">{data.category}</p>
						<p className="tracking-wider leading-lg">{data.size}</p>
						<p className="tracking-wider leading-lg">{data.color}</p>
					</div>

					<div className="group/amount flex rounded-xl bg-white border-[0.5px] border-black/10 hover:border-black/15 hover:shadow-[0_0_9px_-3px_var(--black)]/25 transition-brand">
						<Button
							className="flex gap-3 w-10 h-10 bg-white hover:bg-white"
							onClick={onDecrement}
						>
							<Minus className="size-4 stroke-[1.5px] stroke-black" />
						</Button>
						<span className="flex items-center justify-center w-10 h-10 font-mono tracking-wider leading-lg">
							{value}
						</span>
						<Button
							className="flex gap-3 w-10 h-10 bg-white hover:bg-white"
							onClick={onIncrement}
						>
							<Plus className="size-4 stroke-[1.5px] stroke-black" />
						</Button>
					</div>
				</div>
				<div className="flex flex-col justify-between items-end">
					<Button
						className="group/cancel flex gap-3 w-10 h-10 bg-black/10 hover:bg-[#EC0404]/10 text-black hover:text-[#EC0404]/75"
						onClick={() => {
							deleteItem(data.id);
						}}
					>
						<Trash2 className="size-4 stroke-[1.5px] stroke-black group-hover/cancel:stroke-[#EC0404]/75 transition-brand" />
					</Button>
					<span className="font-medium text-lg tracking-wider leading-md">
						{data.currency} {(data.price * value) / 100 + "0"}
					</span>
				</div>
			</div>
		</div>
	);
}
