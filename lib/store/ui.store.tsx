import { create } from "zustand";
import { ICartItem } from "./cart.store";

export interface IOverlay {
	open: boolean;
}
export interface IModal {
	target: ICartItem | IProduct | null;
	contentType: "FastWatch" | "CancelOrder" | null;
}
export interface IProduct {
	id: string;
	title: string;
	image: string;
	category: string;
	size: string;
	color: string;
	price: number;
	currency: string;
}
export interface ICart {
	products: IProduct[] | [];
}

type UIState = {
	overlay: IOverlay;
	modal: IModal;
	selectedProduct: IProduct;

	updateOverlay: (updatedOverlay: IOverlay) => void;
	updateModal: (updatedModal: IModal) => void;
	changeModalType: (type: IModal["contentType"]) => void;
	updateModalTarget: (target: ICartItem | IProduct | null) => void;
	updateSelectedProduct: (product: IProduct) => void;
};

export const useUIStore = create<UIState>()((set) => ({
	overlay: { open: false },
	modal: {
		target: null,
		contentType: "FastWatch",
	},
	selectedProduct: {
		id: "1",
		title: "UNDER ARMOUR",
		image: "image-white-240.png",
		category: "Hoodie",
		size: "M",
		color: "White",
		price: 11990,
		currency: "$",
	},

	updateOverlay: (updatedOverlay) => set({ overlay: { ...updatedOverlay } }),
	updateModal: (updatedModal) => set({ modal: { ...updatedModal } }),
	changeModalType: (type) =>
		set((state) => ({ modal: { ...state.modal, contentType: type } })),
	updateModalTarget: (target) =>
		set((state) => ({ modal: { ...state.modal, target: target } })),
	updateSelectedProduct: (product) => set({ selectedProduct: { ...product } }),
}));
