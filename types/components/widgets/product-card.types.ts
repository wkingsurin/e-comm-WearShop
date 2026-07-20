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
	isFavorite: boolean;
	type?: "Default" | "Favorite";
}

export interface IProductDescriptionProps {
	data: IProduct;
	defaultVariant: IVariant;
}

export interface IProductFaceProps {
	data: IProduct;
	isFavorite: boolean;
	defaultVariant: IVariant;
	disablePicking?: boolean;
}
