import { create } from "zustand";

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

type UIState = {
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

export const useUIStore = create<UIState>()((set) => ({
	overlay: { open: false },
	modal: {
		target: null,
		contentType: "FastWatch",
	},
	selectedProduct: {
		id: "1",
		title: "UNDER ARMOUR",
		slug: "Hoodie",
		description: "Under Armour",
		currency: "$",

		brand: {
			id: "1",
			name: "UNDER ARMOUR",
			slug: "Under Armour",
		},

		category: { id: "1", name: "Hoodie", slug: "Hoodie" },

		isAvailable: true,
		isNew: false,

		options: {
			color: ["White", "Black"],
			size: [
				{ label: "S", value: "46" },
				{ label: "M", value: "48" },
				{ label: "L", value: "50" },
				{ label: "XL", value: "52" },
			],
		},

		variants: [
			{
				id: "1",
				sku: "HOOD-UA-WHT-S",
				price: 7790,
				oldPrice: 9790,
				stock: 5,
				attributes: { color: "White", size: "S" },
				href: {
					small: "/image-white-240.png",
					medium: "/image-white-480.png",
					large: "/image-white-720.png",
					original: "/image-white-1280.png",
				},
				images: [
					{
						id: "1",
						src: "/image-white-480.png",
					},
					{
						id: "2",
						src: "/image-white-480.png",
					},
					{
						id: "3",
						src: "/image-white-480.png",
					},
					{
						id: "4",
						src: "/image-white-480.png",
					},
					{
						id: "5",
						src: "/image-white-480.png",
					},
				],
			},
		],
	},
	sortOption: "lower",

	updateOverlay: (updatedOverlay) => set({ overlay: { ...updatedOverlay } }),
	updateModal: (updatedModal) => set({ modal: { ...updatedModal } }),
	changeModalType: (type) =>
		set((state) => ({ modal: { ...state.modal, contentType: type } })),
	updateModalTarget: (target) =>
		set((state) => ({ modal: { ...state.modal, target: target } })),
	updateSelectedProduct: (product) => set({ selectedProduct: { ...product } }),
	updateSortOption: (option) => set({ sortOption: option }),
}));
