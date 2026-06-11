import { IColorsLinkProps } from "@/types/components/widgets/colors.types";
import Image from "next/image";
import Link from "next/link";

export default function ColorsLink({ variant, active }: IColorsLinkProps) {
	return (
		<Link
			key={variant.id}
			data-id={variant.attributes.color}
			href={`./${variant.id}`}
			className={`group/color flex flex-col gap-3 items-center text-black/50 hover:text-black transition-brand ${
				active && "text-black!"
			}`}
		>
			<div
				className={`relative flex items-center justify-center w-[60px] h-[80px] border border-transparent group-hover/color:border-black bg-[#F4F4F6] rounded-md overflow-hidden transition-brand ${
					active && "border-black!"
				}`}
			>
				<div
					className={`absolute w-full h-full ${
						active ? "bg-black/10" : "bg-transparent"
					}`}
				></div>
				<Image
					src={variant.images[0].src}
					alt={variant.attributes.color}
					width={169}
					height={240}
					className="rounded-md w-[49px] h-[70px] object-contain"
				/>
			</div>
			<p className="text-md font-mono tracking-wide">{variant.attributes.color}</p>
		</Link>
	);
}
