import { create } from "zustand";
import { IFavorite } from "./favorites.store";

export interface IOverlay {
	open: boolean;
}
export interface IModal {
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
export interface IOrder {
	id: string;
	title: string;
	image: string;
	category: string;
	size: string;
	color: string;
	price: number;
	currency: string;
}

type UIState = {
	overlay: IOverlay;
	modal: IModal;
	cart: ICart;
	selectedProduct: IProduct;
	orders: IOrder[];
	showcase: IProduct[];

	updateOverlay: (updatedOverlay: IOverlay) => void;
	updateModal: (updatedModal: IModal) => void;
	updateCart: (updatedCart: ICart) => void;
	updateSelectedProduct: (product: IProduct) => void;
	updateOrders: (updatedOrders: IOrder[]) => void;
	updateShowcase: (updatedShowcase: IFavorite[]) => void;
};

export const useUIStore = create<UIState>()((set) => ({
	overlay: { open: false },
	modal: { contentType: "FastWatch" },
	cart: {
		products: [
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
		],
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
	],

	updateOverlay: (updatedOverlay) => set({ overlay: { ...updatedOverlay } }),
	updateModal: (updatedModal) => set({ modal: { ...updatedModal } }),
	updateCart: (updatedCart) => set({ cart: { ...updatedCart } }),
	updateSelectedProduct: (product) => set({ selectedProduct: { ...product } }),
	updateOrders: (updatedOrders) => set({ orders: { ...updatedOrders } }),
	updateShowcase: (updatedShowcase) => set({ showcase: [...updatedShowcase] }),
}));
