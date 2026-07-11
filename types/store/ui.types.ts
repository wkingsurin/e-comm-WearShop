import { ReactNode } from "react";
import { IOrder } from "./orders.types";

export interface IOverlay {
	open: boolean;
}
export interface IModal {
	target: {
		product: IProduct | IOrder | null;
		variantId: string | null;
	};
	contentType:
		| "QuickView"
		| "CancelOrder"
		| "ConfirmModal"
		| "DialogModal"
		| null;
}

export interface IColorOption {
	id: string;
	name: string;
	slug: string;

	images: {
		id: string;
		src: string;
	}[];
}
export interface IVariant {
	id: string;
	sku: string;
	price: number;
	oldPrice: number | null;
	stock: number;
	attributes: { colorId: string; size: string };
}
export interface IProduct {
	id: string;
	title: string;
	slug: string;
	description: string;
	currency: string;

	brand: {
		name: string;
		slug: string;
	};

	category: {
		name: string;
		slug: string;
	};

	isAvailable: boolean;
	isNew?: boolean;

	options: {
		color: IColorOption[];
		size: { value: string }[];
	};

	variants: IVariant[];
}

export interface ConfirmData {
	title: string;
	content: ReactNode;
	confirmText?: string;
	cancelText?: string;
	onConfirm: () => void;
}

export interface DialogData {
	title: string;
	content: ReactNode;
}

export type UIState = {
	overlay: IOverlay;
	modal: IModal;
	sortOption: "higher" | "lower";
	confirmData: ConfirmData | null;
	dialogData: DialogData | null;

	updateOverlay: (updatedOverlay: IOverlay) => void;
	updateModal: (updatedModal: IModal) => void;
	changeModalType: (type: IModal["contentType"]) => void;
	updateModalTarget: (target: {
		product: IProduct | IOrder | null;
		variantId: string | null;
	}) => void;
	updateSortOption: (option: "higher" | "lower") => void;
	openConfirm: (data: ConfirmData) => void;
	clearConfirm: () => void;
	openDialog: (data: DialogData) => void;
	clearDialog: () => void;
};
