import { ShowcaseState } from "@/types/store/showcase.types";
import { create } from "zustand";
import { persist } from "zustand/middleware";

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
								small:
									"/products/hoodies/under-armour-white/image-white-240.png",
								medium:
									"/products/hoodies/under-armour-white/image-white-480.png",
								large:
									"/products/hoodies/under-armour-white/image-white-720.png",
								original:
									"/products/hoodies/under-armour-white/image-white-1280.png",
							},
							images: [
								{
									id: "1",
									src: "/products/hoodies/under-armour-white/image-white-480.png",
								},
								{
									id: "2",
									src: "/products/hoodies/under-armour-white/image-white-2-480.png",
								},
								{
									id: "3",
									src: "/products/hoodies/under-armour-white/image-white-3-480.png",
								},
								{
									id: "4",
									src: "/products/hoodies/under-armour-white/image-white-4-480.png",
								},
								{
									id: "5",
									src: "/products/hoodies/under-armour-white/image-white-5-480.png",
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
								small: "/products/hoodies/under-armour-navy/image-navy-240.png",
								medium:
									"/products/hoodies/under-armour-navy/image-navy-480.png",
								large: "/products/hoodies/under-armour-navy/image-navy-720.png",
								original:
									"/products/hoodies/under-armour-navy/image-navy-1280.png",
							},
							images: [
								{
									id: "1",
									src: "/products/hoodies/under-armour-navy/image-navy-480.png",
								},
								{
									id: "2",
									src: "/products/hoodies/under-armour-navy/image-navy-2-480.png",
								},
								{
									id: "3",
									src: "/products/hoodies/under-armour-navy/image-navy-3-480.png",
								},
								{
									id: "4",
									src: "/products/hoodies/under-armour-navy/image-navy-4-480.png",
								},
								{
									id: "5",
									src: "/products/hoodies/under-armour-navy/image-navy-5-480.png",
								},
							],
						},
					],
				},
				{
					id: "2",
					title: "Adidas originals",
					slug: "adidas originals",
					description: "Adidas originals",
					currency: "$",

					brand: {
						id: "1",
						name: "Adidas",
						slug: "Adidas",
					},

					category: { id: "1", name: "Hoodie", slug: "Hoodie" },

					isAvailable: true,
					isNew: false,

					options: {
						color: ["Emerald", "Black", "Brown"],
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
							sku: "HOOD-AD-EMRLD-S",
							price: 7790,
							oldPrice: 9790,
							stock: 5,
							attributes: { color: "Emerald", size: "S" },
							href: {
								small:
									"/products/hoodies/adidas-originals-emerald/image-1-240.png",
								medium:
									"/products/hoodies/adidas-originals-emerald/image-1-480.png",
								large:
									"/products/hoodies/adidas-originals-emerald/image-1-720.png",
								original:
									"/products/hoodies/adidas-originals-emerald/image-1-1280.png",
							},
							images: [
								{
									id: "1",
									src: "/products/hoodies/adidas-originals-emerald/image-1-480.png",
								},
								{
									id: "2",
									src: "/products/hoodies/adidas-originals-emerald/image-2-480.png",
								},
								{
									id: "3",
									src: "/products/hoodies/adidas-originals-emerald/image-3-480.png",
								},
								{
									id: "4",
									src: "/products/hoodies/adidas-originals-emerald/image-4-480.png",
								},
								{
									id: "5",
									src: "/products/hoodies/adidas-originals-emerald/image-5-480.png",
								},
								{
									id: "6",
									src: "/products/hoodies/adidas-originals-emerald/image-6-480.png",
								},
							],
						},
						{
							id: "var-2",
							sku: "HOOD-AD-BLK-S",
							price: 7790,
							oldPrice: 9790,
							stock: 5,
							attributes: { color: "Black", size: "S" },
							href: {
								small:
									"/products/hoodies/adidas-originals-black/image-1-240.png",
								medium:
									"/products/hoodies/adidas-originals-black/image-1-480.png",
								large:
									"/products/hoodies/adidas-originals-black/image-1-720.png",
								original:
									"/products/hoodies/adidas-originals-black/image-1-1280.png",
							},
							images: [
								{
									id: "1",
									src: "/products/hoodies/adidas-originals-black/image-1-480.png",
								},
								{
									id: "2",
									src: "/products/hoodies/adidas-originals-black/image-2-480.png",
								},
								{
									id: "3",
									src: "/products/hoodies/adidas-originals-black/image-3-480.png",
								},
								{
									id: "4",
									src: "/products/hoodies/adidas-originals-black/image-4-480.png",
								},
								{
									id: "5",
									src: "/products/hoodies/adidas-originals-black/image-5-480.png",
								},
								{
									id: "6",
									src: "/products/hoodies/adidas-originals-black/image-6-480.png",
								},
							],
						},
						{
							id: "var-3",
							sku: "HOOD-AD-BRN-S",
							price: 7790,
							oldPrice: 9790,
							stock: 5,
							attributes: { color: "Brown", size: "S" },
							href: {
								small:
									"/products/hoodies/adidas-originals-brown/image-1-240.png",
								medium:
									"/products/hoodies/adidas-originals-brown/image-1-480.png",
								large:
									"/products/hoodies/adidas-originals-brown/image-1-720.png",
								original:
									"/products/hoodies/adidas-originals-brown/image-1-1280.png",
							},
							images: [
								{
									id: "1",
									src: "/products/hoodies/adidas-originals-brown/image-1-480.png",
								},
								{
									id: "2",
									src: "/products/hoodies/adidas-originals-brown/image-2-480.png",
								},
								{
									id: "3",
									src: "/products/hoodies/adidas-originals-brown/image-3-480.png",
								},
								{
									id: "4",
									src: "/products/hoodies/adidas-originals-brown/image-4-480.png",
								},
								{
									id: "5",
									src: "/products/hoodies/adidas-originals-brown/image-5-480.png",
								},
								{
									id: "6",
									src: "/products/hoodies/adidas-originals-brown/image-6-480.png",
								},
							],
						},
					],
				},
				{
					id: "3",
					title: "Neverless",
					slug: "Neverless",
					description: "Neverless",
					currency: "$",

					brand: {
						id: "1",
						name: "Neverless",
						slug: "Neverless",
					},

					category: { id: "1", name: "Hoodie", slug: "Hoodie" },

					isAvailable: true,
					isNew: false,

					options: {
						color: ["Black", "Gray"],
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
							sku: "HOOD-NL-BLK-S",
							price: 7790,
							oldPrice: 9790,
							stock: 5,
							attributes: { color: "Black", size: "S" },
							href: {
								small: "/products/hoodies/neverless-black/image-1-240.png",
								medium: "/products/hoodies/neverless-black/image-1-480.png",
								large: "/products/hoodies/neverless-black/image-1-720.png",
								original: "/products/hoodies/neverless-black/image-1-1280.png",
							},
							images: [
								{
									id: "1",
									src: "/products/hoodies/neverless-black/image-1-480.png",
								},
								{
									id: "2",
									src: "/products/hoodies/neverless-black/image-2-480.png",
								},
								{
									id: "3",
									src: "/products/hoodies/neverless-black/image-3-480.png",
								},
								{
									id: "4",
									src: "/products/hoodies/neverless-black/image-4-480.png",
								},
							],
						},
						{
							id: "var-2",
							sku: "HOOD-NL-GRY-S",
							price: 7790,
							oldPrice: 9790,
							stock: 5,
							attributes: { color: "Gray", size: "S" },
							href: {
								small: "/products/hoodies/neverless-gray/image-1-240.png",
								medium: "/products/hoodies/neverless-gray/image-1-480.png",
								large: "/products/hoodies/neverless-gray/image-1-720.png",
								original: "/products/hoodies/neverless-gray/image-1-1280.png",
							},
							images: [
								{
									id: "1",
									src: "/products/hoodies/neverless-gray/image-1-480.png",
								},
								{
									id: "2",
									src: "/products/hoodies/neverless-gray/image-2-480.png",
								},
								{
									id: "3",
									src: "/products/hoodies/neverless-gray/image-3-480.png",
								},
								{
									id: "4",
									src: "/products/hoodies/neverless-gray/image-4-480.png",
								},
							],
						},
					],
				},
				{
					id: "4",
					title: "Nike",
					slug: "Nike",
					description: "Nike",
					currency: "$",

					brand: {
						id: "1",
						name: "Nike",
						slug: "Nike",
					},

					category: { id: "1", name: "Hoodie", slug: "Hoodie" },

					isAvailable: true,
					isNew: false,

					options: {
						color: ["Pink", "Blue", "Dark Blue", "Red"],
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
							sku: "HOOD-NK-PNK-S",
							price: 7790,
							oldPrice: 9790,
							stock: 5,
							attributes: { color: "Pink", size: "S" },
							href: {
								small: "/products/hoodies/nike-pink/image-1-240.png",
								medium: "/products/hoodies/nike-pink/image-1-480.png",
								large: "/products/hoodies/nike-pink/image-1-720.png",
								original: "/products/hoodies/nike-pink/image-1-1280.png",
							},
							images: [
								{
									id: "1",
									src: "/products/hoodies/nike-pink/image-1-480.png",
								},
								{
									id: "2",
									src: "/products/hoodies/nike-pink/image-2-480.png",
								},
								{
									id: "3",
									src: "/products/hoodies/nike-pink/image-3-480.png",
								},
								{
									id: "4",
									src: "/products/hoodies/nike-pink/image-4-480.png",
								},
								{
									id: "5",
									src: "/products/hoodies/nike-pink/image-5-480.png",
								},
							],
						},
						{
							id: "var-2",
							sku: "HOOD-NK-BLE-S",
							price: 7790,
							oldPrice: 9790,
							stock: 5,
							attributes: { color: "Blue", size: "S" },
							href: {
								small: "/products/hoodies/nike-blue/image-1-240.png",
								medium: "/products/hoodies/nike-blue/image-1-480.png",
								large: "/products/hoodies/nike-blue/image-1-720.png",
								original: "/products/hoodies/nike-blue/image-1-1280.png",
							},
							images: [
								{
									id: "1",
									src: "/products/hoodies/nike-blue/image-1-480.png",
								},
								{
									id: "2",
									src: "/products/hoodies/nike-blue/image-2-480.png",
								},
								{
									id: "3",
									src: "/products/hoodies/nike-blue/image-3-480.png",
								},
								{
									id: "4",
									src: "/products/hoodies/nike-blue/image-4-480.png",
								},
							],
						},
						{
							id: "var-3",
							sku: "HOOD-NK-DBE-S",
							price: 7790,
							oldPrice: 9790,
							stock: 5,
							attributes: { color: "Dark Blue", size: "S" },
							href: {
								small: "/products/hoodies/nike-dark-blue/image-1-240.png",
								medium: "/products/hoodies/nike-dark-blue/image-1-480.png",
								large: "/products/hoodies/nike-dark-blue/image-1-720.png",
								original: "/products/hoodies/nike-dark-blue/image-1-1280.png",
							},
							images: [
								{
									id: "1",
									src: "/products/hoodies/nike-dark-blue/image-1-480.png",
								},
								{
									id: "2",
									src: "/products/hoodies/nike-dark-blue/image-2-480.png",
								},
								{
									id: "3",
									src: "/products/hoodies/nike-dark-blue/image-3-480.png",
								},
								{
									id: "4",
									src: "/products/hoodies/nike-dark-blue/image-4-480.png",
								},
								{
									id: "5",
									src: "/products/hoodies/nike-dark-blue/image-5-480.png",
								},
							],
						},
						{
							id: "var-4",
							sku: "HOOD-NK-RED-S",
							price: 7790,
							oldPrice: 9790,
							stock: 5,
							attributes: { color: "Red", size: "S" },
							href: {
								small: "/products/hoodies/nike-red/image-1-240.png",
								medium: "/products/hoodies/nike-red/image-1-480.png",
								large: "/products/hoodies/nike-red/image-1-720.png",
								original: "/products/hoodies/nike-red/image-1-1280.png",
							},
							images: [
								{
									id: "1",
									src: "/products/hoodies/nike-red/image-1-480.png",
								},
								{
									id: "2",
									src: "/products/hoodies/nike-red/image-2-480.png",
								},
								{
									id: "3",
									src: "/products/hoodies/nike-red/image-3-480.png",
								},
								{
									id: "4",
									src: "/products/hoodies/nike-red/image-4-480.png",
								},
								{
									id: "5",
									src: "/products/hoodies/nike-red/image-5-480.png",
								},
							],
						},
					],
				},
				{
					id: "5",
					title: "Tommy Hilfiger",
					slug: "Tommy Hilfiger",
					description: "Tommy Hilfiger",
					currency: "$",

					brand: {
						id: "1",
						name: "Tommy Hilfiger",
						slug: "Tommy Hilfiger",
					},

					category: { id: "1", name: "Hoodie", slug: "Hoodie" },

					isAvailable: true,
					isNew: false,

					options: {
						color: ["White", "Black", "Navy"],
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
							sku: "HOOD-TH-WHT-S",
							price: 7790,
							oldPrice: 9790,
							stock: 5,
							attributes: { color: "White", size: "S" },
							href: {
								small: "/products/hoodies/tommy-hilfiger-white/image-1-240.png",
								medium:
									"/products/hoodies/tommy-hilfiger-white/image-1-480.png",
								large: "/products/hoodies/tommy-hilfiger-white/image-1-720.png",
								original:
									"/products/hoodies/tommy-hilfiger-white/image-1-1280.png",
							},
							images: [
								{
									id: "1",
									src: "/products/hoodies/tommy-hilfiger-white/image-1-480.png",
								},
								{
									id: "2",
									src: "/products/hoodies/tommy-hilfiger-white/image-2-480.png",
								},
								{
									id: "3",
									src: "/products/hoodies/tommy-hilfiger-white/image-3-480.png",
								},
								{
									id: "4",
									src: "/products/hoodies/tommy-hilfiger-white/image-4-480.png",
								},
								{
									id: "5",
									src: "/products/hoodies/tommy-hilfiger-white/image-5-480.png",
								},
							],
						},
						{
							id: "var-2",
							sku: "HOOD-TH-BLK-S",
							price: 7790,
							oldPrice: 9790,
							stock: 5,
							attributes: { color: "Black", size: "S" },
							href: {
								small: "/products/hoodies/tommy-hilfiger-black/image-1-240.png",
								medium:
									"/products/hoodies/tommy-hilfiger-black/image-1-480.png",
								large: "/products/hoodies/tommy-hilfiger-black/image-1-720.png",
								original:
									"/products/hoodies/tommy-hilfiger-black/image-1-1280.png",
							},
							images: [
								{
									id: "1",
									src: "/products/hoodies/tommy-hilfiger-black/image-1-480.png",
								},
								{
									id: "2",
									src: "/products/hoodies/tommy-hilfiger-black/image-2-480.png",
								},
								{
									id: "3",
									src: "/products/hoodies/tommy-hilfiger-black/image-3-480.png",
								},
								{
									id: "4",
									src: "/products/hoodies/tommy-hilfiger-black/image-4-480.png",
								},
							],
						},
						{
							id: "var-3",
							sku: "HOOD-TH-NVY-S",
							price: 7790,
							oldPrice: 9790,
							stock: 5,
							attributes: { color: "Navy", size: "S" },
							href: {
								small: "/products/hoodies/tommy-hilfiger-navy/image-1-240.png",
								medium: "/products/hoodies/tommy-hilfiger-navy/image-1-480.png",
								large: "/products/hoodies/tommy-hilfiger-navy/image-1-720.png",
								original:
									"/products/hoodies/tommy-hilfiger-navy/image-1-1280.png",
							},
							images: [
								{
									id: "1",
									src: "/products/hoodies/tommy-hilfiger-navy/image-1-480.png",
								},
								{
									id: "2",
									src: "/products/hoodies/tommy-hilfiger-navy/image-2-480.png",
								},
								{
									id: "3",
									src: "/products/hoodies/tommy-hilfiger-navy/image-3-480.png",
								},
								{
									id: "4",
									src: "/products/hoodies/tommy-hilfiger-navy/image-4-480.png",
								},
								{
									id: "5",
									src: "/products/hoodies/tommy-hilfiger-navy/image-5-480.png",
								},
							],
						},
					],
				},
				{
					id: "6",
					title: "Only & Sons",
					slug: "Only & Sons",
					description: "Only & Sons",
					currency: "$",

					brand: {
						id: "1",
						name: "Only & Sons",
						slug: "Only & Sons",
					},

					category: { id: "1", name: "Jeans", slug: "Jeans" },

					isAvailable: true,
					isNew: false,

					options: {
						color: ["Neutral"],
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
							sku: "JENS-JS-NT-S",
							price: 6690,
							oldPrice: 8590,
							stock: 1,
							attributes: { color: "Neutral", size: "S" },
							href: {
								small: "/products/jeans/only-&-sons/image-1-240.png",
								medium: "/products/jeans/only-&-sons/image-1-480.png",
								large: "/products/jeans/only-&-sons/image-1-720.png",
								original: "/products/jeans/only-&-sons/image-1-original.png",
							},
							images: [
								{
									id: "1",
									src: "/products/jeans/only-&-sons/image-1-480.png",
								},
								{
									id: "2",
									src: "/products/jeans/only-&-sons/image-2-480.png",
								},
								{
									id: "3",
									src: "/products/jeans/only-&-sons/image-3-480.png",
								},
								{
									id: "4",
									src: "/products/jeans/only-&-sons/image-4-480.png",
								},
								{
									id: "5",
									src: "/products/jeans/only-&-sons/image-5-480.png",
								},
							],
						},
					],
				},
				// {
				// 	id: "7",
				// 	title: "Guess Sport",
				// 	slug: "Guess",
				// 	description: "Guess",
				// 	currency: "$",

				// 	brand: {
				// 		id: "1",
				// 		name: "Guess",
				// 		slug: "Guess",
				// 	},

				// 	category: { id: "1", name: "Sneakers", slug: "Sneakers" },

				// 	isAvailable: true,
				// 	isNew: false,

				// 	options: {
				// 		color: ["Black", "White"],
				// 		size: [
				// 			{ label: "S", value: "46" },
				// 			{ label: "M", value: "48" },
				// 			{ label: "L", value: "50" },
				// 			{ label: "XL", value: "52" },
				// 		],
				// 	},

				// 	variants: [
				// 		{
				// 			id: "var-1",
				// 			sku: "SNKR-GS-BLK-S",
				// 			price: 6690,
				// 			oldPrice: 8590,
				// 			stock: 1,
				// 			attributes: { color: "Black", size: "S" },
				// 			href: {
				// 				small: "/products/sneakers/guess-sport-black/image-1-240.png",
				// 				medium: "/products/sneakers/guess-sport-black/image-2-480.png",
				// 				large: "/products/sneakers/guess-sport-black/image-3-720.png",
				// 				original:
				// 					"/products/sneakers/guess-sport-black/image-4-original.png",
				// 			},
				// 			images: [
				// 				{
				// 					id: "1",
				// 					src: "/products/sneakers/guess-sport-black/image-1-480.png",
				// 				},
				// 			],
				// 		},
				// 		{
				// 			id: "var-2",
				// 			sku: "SNKR-GS-WHT-S",
				// 			price: 6690,
				// 			oldPrice: 8590,
				// 			stock: 1,
				// 			attributes: { color: "White", size: "S" },
				// 			href: {
				// 				small: "/products/sneakers/guess-sport-white/image-1-480.png",
				// 				medium: "/products/sneakers/guess-sport-white/image-1-480.png",
				// 				large: "/products/sneakers/guess-sport-white/image-1-480.png",
				// 				original:
				// 					"/products/sneakers/guess-sport-white/image-1-480.png",
				// 			},
				// 			images: [
				// 				{
				// 					id: "1",
				// 					src: "/products/sneakers/guess-sport-white/image-1-480.png",
				// 				},
				// 				{
				// 					id: "2",
				// 					src: "/products/sneakers/guess-sport-white/image-2-480.png",
				// 				},
				// 				{
				// 					id: "3",
				// 					src: "/products/sneakers/guess-sport-white/image-3-480.png",
				// 				},
				// 				{
				// 					id: "4",
				// 					src: "/products/sneakers/guess-sport-white/image-4-480.png",
				// 				},
				// 				{
				// 					id: "5",
				// 					src: "/products/sneakers/guess-sport-white/image-5-480.png",
				// 				},
				// 			],
				// 		},
				// 	],
				// },
				{
					id: "8",
					title: "Neverless T-Shirt",
					slug: "Neverless",
					description: "Neverless T-Shirt",
					currency: "$",

					brand: {
						id: "1",
						name: "Neverless",
						slug: "Neverless",
					},

					category: { id: "1", name: "T-Shirts", slug: "T-Shirt" },

					isAvailable: true,
					isNew: false,

					options: {
						color: ["Black"],
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
							sku: "TSHT-NL-BLK-S",
							price: 6690,
							oldPrice: 8590,
							stock: 1,
							attributes: { color: "Black", size: "S" },
							href: {
								small: "/products/tshirts/neverless-black/image-1-240.png",
								medium: "/products/tshirts/neverless-black/image-1-480.png",
								large: "/products/tshirts/neverless-black/image-1-720.png",
								original:
									"/products/tshirts/neverless-black/image-1-original.png",
							},
							images: [
								{
									id: "1",
									src: "/products/tshirts/neverless-black/image-1-480.png",
								},
								{
									id: "2",
									src: "/products/tshirts/neverless-black/image-2-480.png",
								},
								{
									id: "3",
									src: "/products/tshirts/neverless-black/image-3-480.png",
								},
								{
									id: "4",
									src: "/products/tshirts/neverless-black/image-4-480.png",
								},
							],
						},
					],
				},
				{
					id: "9",
					title: "Boss Cap",
					slug: "Boss",
					description: "Boss Cap",
					currency: "$",

					brand: {
						id: "1",
						name: "Boss",
						slug: "Boss",
					},

					category: { id: "1", name: "Caps", slug: "Caps" },

					isAvailable: true,
					isNew: false,

					options: {
						color: ["White"],
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
							sku: "CAPS-BS-WHT-S",
							price: 6690,
							oldPrice: 8590,
							stock: 1,
							attributes: { color: "White", size: "S" },
							href: {
								small: "/products/caps/boss-white/image-1-240.png",
								medium: "/products/caps/boss-white/image-1-480.png",
								large: "/products/caps/boss-white/image-1-720.png",
								original: "/products/caps/boss-white/image-1-original.png",
							},
							images: [
								{
									id: "1",
									src: "/products/caps/boss-white/image-1-480.png",
								},
								{
									id: "2",
									src: "/products/caps/boss-white/image-2-480.png",
								},
								{
									id: "3",
									src: "/products/caps/boss-white/image-3-480.png",
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
