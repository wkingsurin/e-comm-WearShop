import { IColorsWrapperProps } from "@/types/components/widgets/colors.types";
import ColorsOption from "./option";
import ColorsLink from "./link";
import { usePathname } from "next/navigation";

export default function ColorsWrapper({
	product,
	variantIndex,
	changeVariant,
	resetQuantity,
	type,
}: IColorsWrapperProps) {
	const pathname = usePathname();

	return (
		<div className="flex flex-col gap-2 w-full">
			<span className="font-medium tracking-wider leading-lg">Colors</span>
			<div className="flex gap-3">
				{product.variants.map((variant, index) => {
					return type === "Modal" ? (
						<ColorsOption
							key={variant.id}
							variant={variant}
							index={index}
							changeVariant={changeVariant}
							resetQuantity={resetQuantity}
							active={variantIndex === index}
						/>
					) : (
						<ColorsLink
							key={variant.id}
							variant={variant}
							active={pathname.includes(variant.id)}
						/>
					);
				})}
			</div>
		</div>
	);
}
