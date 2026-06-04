export interface IOverlay {
	open: boolean;
}
export interface IModal {
	target: IProduct | null;
	contentType: "FastWatch" | "CancelOrder" | null;
}

export interface IVariant {
	id: string;
	sku: string;
	price: number;
	oldPrice?: number;
	stock: number;
	attributes: { color: string; size: string };
	href: { small: string; medium: string; large: string; original: string };
	images: { id: string; src: string }[];
}
export interface IProduct {
	id: string;
	title: string;
	slug: string;
	description: string;
	currency: string;

	brand: {
		id: string;
		name: string;
		slug: string;
	};

	category: {
		id: string;
		name: string;
		slug: string;
	};

	isAvailable: boolean;
	isNew?: boolean;

	options: { color: string[]; size: { label: string; value: string }[] };

	variants: IVariant[];
}

export type UIState = {
	overlay: IOverlay;
	modal: IModal;
	selectedProduct: IProduct;
	sortOption: "higher" | "lower";

	updateOverlay: (updatedOverlay: IOverlay) => void;
	updateModal: (updatedModal: IModal) => void;
	changeModalType: (type: IModal["contentType"]) => void;
	updateModalTarget: (target: IProduct | null) => void;
	updateSelectedProduct: (product: IProduct) => void;
	updateSortOption: (option: "higher" | "lower") => void;
};
