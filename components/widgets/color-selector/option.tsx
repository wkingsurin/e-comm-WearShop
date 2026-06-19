import { IColorsOptionProps } from "@/types/components/widgets/colors.types";
import Image from "next/image";

export default function ColorsOption({
	id,
	name,
	slug,
	previewImage,
	changeActiveColorId,
	isActive,
}: IColorsOptionProps) {
	return (
		<div
			data-id={slug}
			className={`group/color flex flex-col gap-1 items-center text-black/50 hover:text-black transition-brand ${
				isActive && "text-black!"
			}`}
			onClick={() => {
				changeActiveColorId(id);
			}}
		>
			<div
				className={`relative flex items-center justify-center w-[60px] h-[80px] border border-transparent group-hover/color:border-black bg-[#F4F4F6] rounded-md overflow-hidden transition-brand ${
					isActive && "border-black!"
				}`}
			>
				<div
					className={`absolute w-full h-full ${
						isActive ? "bg-black/10" : "bg-transparent"
					}`}
				></div>
				<Image
					src={previewImage}
					alt={name}
					width={169}
					height={240}
					className="rounded-md w-[49px] h-[70px] object-contain"
				/>
			</div>
			<p className="text-md font-mono tracking-wide">{name}</p>
		</div>
	);
}
