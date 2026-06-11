import { IProduct, IVariant } from "@/types/store/ui.types";

export interface IColorsProps {
	product: IProduct;
	variantIndex?: number;
	changeVariant?: (index: number) => void;
	resetQuantity?: () => void;
	type: "Modal" | "Page";
}

export interface IColorsLinkProps {
	variant: IVariant;
	active: boolean;
}

export interface IColorsOptionProps {
	variant: IVariant;
	active: boolean;
	index: number;
	changeVariant?: (index: number) => void;
	resetQuantity?: () => void;
}

export interface IColorsWrapperProps {
	product: IProduct;
	variantIndex?: number;
	changeVariant?: (index: number) => void;
	resetQuantity?: () => void;
	type: "Modal" | "Page";
}
