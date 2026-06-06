import { UIState } from "@/app/types/store/ui.types";
import { create } from "zustand";

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
	confirmData: null,

	updateOverlay: (updatedOverlay) => set({ overlay: { ...updatedOverlay } }),
	updateModal: (updatedModal) => set({ modal: { ...updatedModal } }),
	changeModalType: (type) =>
		set((state) => ({ modal: { ...state.modal, contentType: type } })),
	updateModalTarget: (target) =>
		set((state) => ({ modal: { ...state.modal, target: target } })),
	updateSelectedProduct: (product) => set({ selectedProduct: { ...product } }),
	updateSortOption: (option) => set({ sortOption: option }),
	openConfirm: (data) =>
		set((state) => ({
			overlay: { open: true },
			modal: { ...state.modal, contentType: "ConfirmModal" },
			confirmData: data,
		})),
	clearConfirm: () =>
		set((state) => ({
			overlay: { open: false },
			modal: { ...state.modal, contentType: null },
			confirmData: null,
		})),
}));
