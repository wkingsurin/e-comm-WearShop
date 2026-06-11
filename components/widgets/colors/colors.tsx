import { IColorsProps } from "@/types/components/widgets/colors.types";
import ColorsWrapper from "./colors-wrapper";

export default function Colors({
	product,
	variantIndex,
	changeVariant,
	resetQuantity,
	type,
}: IColorsProps) {
	return (
		<ColorsWrapper
			product={product}
			variantIndex={variantIndex}
			changeVariant={changeVariant}
			resetQuantity={resetQuantity}
			type={type}
		/>
	);
}
