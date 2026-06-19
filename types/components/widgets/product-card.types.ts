import { IProduct, IVariant } from "../../store/ui.types";

export interface IDiscountProps {
	value: string;
}

export interface IFastViewButtonProps {
	data: IProduct;
	variantId: string;
}

export interface IProductCardProps {
	data: IProduct;
	type?: "Default" | "Favourite";
}

export interface IProductDescriptionProps {
	data: IProduct;
	defaultVariant: IVariant;
}

export interface IProductFaceProps {
	data: IProduct;
	defaultVariant: IVariant;
	disablePicking?: boolean;
	type?: "Default" | "Favourite";
}
