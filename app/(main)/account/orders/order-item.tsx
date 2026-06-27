import { Button } from "@/components/ui/button";
import { Heart, RefreshCcw } from "lucide-react";
import Image from "next/image";
import { ICartItem } from "@/types/store/cart.types";
import { useToggleFavorite } from "@/features/favorites/hooks/use-toggle-favorite";

export default function OrderItem({
	data,
	isFavorite,
}: {
	data: ICartItem;
	isFavorite: boolean;
}) {
	const { mutate: toggle } = useToggleFavorite();

	const orderAgain = (id: string) => {
		console.log(`Order again [Item ID]: ${id}`);
	};

	return (
		<div
			key={data.id}
			className="flex gap-[30px] bg-black/5 hover:bg-black/10 rounded-xl p-[3px] pr-[18px] overflow-hidden transition-brand"
		>
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
						isFavorite && "bg-[#EC0404]/10"
					}`}
					onClick={() => toggle(data.id)}
				>
					<Heart
						className={`size-5 stroke-black stroke-[1.5px] group-hover/tag:stroke-[#EC0404] group-hover/tag:fill-[#EC0404] ${
							isFavorite && "fill-[#EC0404] stroke-[#EC0404]!"
						}`}
					/>
				</Button>
			</div>
			<div className="flex gap-[60px] justify-between flex-1 py-3">
				<div className="flex flex-col justify-between">
					<div className="flex flex-col gap-[6px] font-mono">
						<span className="font-medium text-lg leading-lg tracking-wider">
							{data.title}
						</span>
						<p className="tracking-wider leading-lg">{data.categorySlug}</p>
						<p className="tracking-wider leading-lg">{data.selectedSize}</p>
						<p className="tracking-wider leading-lg">{data.selectedColor}</p>
					</div>

					<Button className="flex gap-3" onClick={() => orderAgain(data.id)}>
						<RefreshCcw className="size-4 stroke-[1.5px] stroke-white" />
						Order again
					</Button>
				</div>
				<div className="flex flex-col justify-end">
					<span className="font-medium text-lg tracking-wider leading-md">
						{data.currency} {data.price / 100 + "0"}
					</span>
				</div>
			</div>
		</div>
	);
}
