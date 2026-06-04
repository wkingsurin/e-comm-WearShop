import { create } from "zustand";
import { persist } from "zustand/middleware";
import { ShowcaseState } from "@/app/types/store/showcase.types";

export const useShowcaseStore = create<ShowcaseState>()(
	persist(
		(set) => ({
			products: [
				{
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
							id: "var-1",
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
									src: "/image-white-2-480.png",
								},
								{
									id: "3",
									src: "/image-white-3-480.png",
								},
								{
									id: "4",
									src: "/image-white-4-480.png",
								},
								{
									id: "5",
									src: "/image-white-5-480.png",
								},
							],
						},
						{
							id: "var-2",
							sku: "HOOD-UA-NVY-S",
							price: 7790,
							oldPrice: 9790,
							stock: 3,
							attributes: { color: "Navy", size: "S" },
							href: {
								small: "/image-navy-240.png",
								medium: "/image-navy-480.png",
								large: "/image-navy-720.png",
								original: "/image-navy-1280.png",
							},
							images: [
								{
									id: "1",
									src: "/image-navy-480.png",
								},
								{
									id: "2",
									src: "/image-navy-2-480.png",
								},
								{
									id: "3",
									src: "/image-navy-3-480.png",
								},
								{
									id: "4",
									src: "/image-navy-4-480.png",
								},
								{
									id: "5",
									src: "/image-navy-5-480.png",
								},
							],
						},
					],
				},
				{
					id: "2",
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
							id: "var-1",
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
				{
					id: "3",
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
							id: "var-1",
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
				{
					id: "4",
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
							id: "var-1",
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
				{
					id: "5",
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
							id: "var-1",
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
				{
					id: "6",
					title: "GUESS",
					slug: "Sneaker",
					description: "guess",
					currency: "$",

					brand: {
						id: "1",
						name: "GUESS",
						slug: "guess",
					},

					category: { id: "1", name: "Sneaker", slug: "sneaker" },

					isAvailable: true,
					isNew: false,

					options: {
						color: ["Black", "White"],
						size: [
							{ label: "S", value: "46" },
							{ label: "M", value: "48" },
							{ label: "L", value: "50" },
							{ label: "XL", value: "52" },
						],
					},

					variants: [
						{
							id: "var-1",
							sku: "SNRK-GS-BLK-S",
							price: 6690,
							oldPrice: 8590,
							stock: 1,
							attributes: { color: "Black", size: "S" },
							href: {
								small: "/image-sneaker-240.png",
								medium: "/image-sneaker-480.png",
								large: "/image-sneaker-720.png",
								original: "/image-sneaker-original.png",
							},
							images: [
								{
									id: "1",
									src: "/image-sneaker-480.png",
								},
							],
						},
						{
							id: "var-2",
							sku: "SNRK-GS-WHT-S",
							price: 14500,
							oldPrice: 17590,
							stock: 4,
							attributes: { color: "White", size: "S" },
							href: {
								small: "/image-sneaker-white-480.png",
								medium: "/image-sneaker-white-480.png",
								large: "/image-sneaker-white-480.png",
								original: "/image-sneaker-white-480.png",
							},
							images: [
								{
									id: "1",
									src: "/image-sneaker-white-480.png",
								},
								{
									id: "2",
									src: "/image-sneaker-white-2-480.png",
								},
								{
									id: "3",
									src: "/image-sneaker-white-3-480.png",
								},
								{
									id: "4",
									src: "/image-sneaker-white-4-480.png",
								},
								{
									id: "5",
									src: "/image-sneaker-white-5-480.png",
								},
								{
									id: "6",
									src: "/image-sneaker-white-6-480.png",
								},
							],
						},
					],
				},
			],
			_hasHydrated: false,

			setHydrated: (state) => set({ _hasHydrated: state }),
			setProducts: (updatedProducts) => set({ products: [...updatedProducts] }),
		}),
		{
			name: "showcase",
			onRehydrateStorage: (state) => () => state.setHydrated(true),
		}
	)
);
