import { IProduct } from "../../store/ui.types";

export interface IDiscountProps {
	value: string;
}

export interface IFastViewButtonProps {
	data: IProduct;
}

export interface IProductCardProps {
	data: IProduct;
	type?: "Default" | "Favourite";
}

export interface IProductDescriptionProps {
	data: IProduct;
}

export interface IProductFaceProps {
	data: IProduct;
	disablePicking?: boolean;
	type?: "Default" | "Favourite";
}
