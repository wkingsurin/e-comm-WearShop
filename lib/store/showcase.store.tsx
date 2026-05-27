import { create } from "zustand";
import { persist } from "zustand/middleware";
import { IProduct } from "./ui.store";

interface ShowcaseState {
	products: IProduct[] | [];
	_hasHydrated: boolean;

	setHydrated: (state: boolean) => void;
	setProducts: (updatedProducts: IProduct[]) => void;
}

export const useShowcaseStore = create<ShowcaseState>()(
	persist(
		(set) => ({
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
			_hasHydrated: false,

			setHydrated: (state) => set({ _hasHydrated: state }),
			setProducts: (updatedProducts) =>
				set({ products: { ...updatedProducts } }),
		}),
		{
			name: "showcase",
			onRehydrateStorage: (state) => () => state.setHydrated(true),
		}
	)
);
