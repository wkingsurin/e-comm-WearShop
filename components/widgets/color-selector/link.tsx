import { IColorsLinkProps } from "@/types/components/widgets/colors.types";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function ColorsLink({
	id,
	name,
	slug,
	isActive,
	previewImage,
	defaultSize,
}: IColorsLinkProps) {
	const splittedPathname = usePathname().split("/");
	const productSlug = splittedPathname[splittedPathname.length - 1];

	return (
		<div className="flex flex-col gap-1 items-center">
			<Link
				key={id}
				data-id={slug}
				href={`./${productSlug}?color=${slug}&size=${defaultSize}`}
				className={`group/color text-black/50 hover:text-black transition-brand ${
					isActive && "text-black!"
				}`}
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
			</Link>
			<p className="text-md font-mono tracking-wide">{name}</p>
		</div>
	);
}
