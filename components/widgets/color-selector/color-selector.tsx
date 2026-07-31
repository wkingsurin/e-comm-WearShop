import { IColorsProps } from "@/types/components/widgets/colors.types";
import ColorSelectorWrapper from "./color-selector-wrapper";

export default function ColorSelector({
	colors,
	activeColorId,
	changeActiveColorId,
	defaultSize,
	type,
	resetQuantity
}: IColorsProps) {
	return (
		<ColorSelectorWrapper
			colors={colors}
			activeColorId={activeColorId}
			changeActiveColorId={changeActiveColorId}
			defaultSize={defaultSize}
			type={type}
			resetQuantity={resetQuantity}
		/>
	);
}
