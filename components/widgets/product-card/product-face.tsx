"use client";

import FavoriteButton from "@/components/shared/favorite-button";
import RemoveButton from "@/components/shared/remove-button";
import { IProduct, useUIStore } from "@/lib/store/ui.store";
import Image from "next/image";
import Discount from "./discount";
import useLastSeen from "@/components/hooks/useLastSeen";

interface IProps {
	data: IProduct;
	disablePicking?: boolean;
	type?: "Default" | "Favourite";
}

export default function ProductFace({ data, type = "Default" }: IProps) {
	const updateOverlay = useUIStore((s) => s.updateOverlay);
	const updateModal = useUIStore((s) => s.updateModal);
	const { addLastSeen } = useLastSeen();

	const contentType = "FastWatch";

	const src = () => `/${data.image}`;

	return (
		<div
			className="relative flex items-center justify-center w-full h-[380px] rounded-xl bg-[#F4F4F6] border border-transparent group-hover/card:border-black overflow-hidden trnasition-all duration-300 cursor-zoom-in"
			onClick={() => {
				updateOverlay({ open: true });
				updateModal({ target: { ...data, amount: 1 }, contentType });
				addLastSeen(data);
			}}
		>
			<Image
				src={src()}
				alt={data.title}
				width={332}
				height={480}
				priority
				className="rounded-xl w-[220px] h-[318px] object-contain"
			/>
			{type === "Favourite" ? (
				<RemoveButton data={data} />
			) : (
				<FavoriteButton data={data} />
			)}
			<Discount value="-35%" />
		</div>
	);
}
