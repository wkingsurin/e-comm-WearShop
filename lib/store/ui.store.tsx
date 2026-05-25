import { create } from "zustand";
import { IFavorite } from "./favorites.store";
import { ICartItem } from "./cart.store";
import { IOrder } from "./orders.store";

export interface IOverlay {
	open: boolean;
}
export interface IModal {
	target: ICartItem | null;
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
	orders: IOrder[];
	showcase: IProduct[];

	updateOverlay: (updatedOverlay: IOverlay) => void;
	updateModal: (updatedModal: IModal) => void;
	changeModalTyle: (type: IModal["contentType"]) => void;
	updateSelectedProduct: (product: IProduct) => void;
	updateShowcase: (updatedShowcase: IFavorite[]) => void;
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
	orders: [
		{
			id: "1",
			title: "UNDER ARMOUR",
			image: "image-white-240.png",
			category: "Hoodie",
			size: "M",
			color: "White",
			price: 11990,
			currency: "$",
			totalPrice: 11990,
		},
		{
			id: "2",
			title: "UNDER ARMOUR",
			image: "image-white-240.png",
			category: "Hoodie",
			size: "M",
			color: "White",
			price: 11990,
			currency: "$",
			totalPrice: 11990,
		},
	],
	showcase: [
		{
			id: "1",
			title: "UNDER ARMOUR",
			image: "image-white-240.png",
			category: "Hoodie",
			size: "M",
			color: "White",
			price: 11990,
			currency: "$",
		},
		{
			id: "2",
			title: "UNDER ARMOUR",
			image: "image-white-240.png",
			category: "Hoodie",
			size: "M",
			color: "White",
			price: 11990,
			currency: "$",
		},
		{
			id: "3",
			title: "UNDER ARMOUR",
			image: "image-white-240.png",
			category: "Hoodie",
			size: "M",
			color: "White",
			price: 11990,
			currency: "$",
		},
		{
			id: "4",
			title: "UNDER ARMOUR",
			image: "image-white-240.png",
			category: "Hoodie",
			size: "M",
			color: "White",
			price: 11990,
			currency: "$",
		},
		{
			id: "5",
			title: "UNDER ARMOUR",
			image: "image-white-240.png",
			category: "Hoodie",
			size: "M",
			color: "White",
			price: 11990,
			currency: "$",
		},
		{
			id: "6",
			title: "GUESS",
			image: "image-sneaker-240.png",
			category: "Sneakers",
			size: "M",
			color: "Black",
			price: 15990,
			currency: "$",
		},
	],

	updateOverlay: (updatedOverlay) => set({ overlay: { ...updatedOverlay } }),
	updateModal: (updatedModal) => set({ modal: { ...updatedModal } }),
	changeModalTyle: (type) =>
		set((state) => ({ modal: { ...state.modal, contentType: type } })),
	updateSelectedProduct: (product) => set({ selectedProduct: { ...product } }),
	updateShowcase: (updatedShowcase) => set({ showcase: [...updatedShowcase] }),
}));
