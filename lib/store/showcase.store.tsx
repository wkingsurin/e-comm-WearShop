import { ShowcaseState } from "@/types/store/showcase.types";
import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useShowcaseStore = create<ShowcaseState>()(
	persist(
		(set) => ({
			products: [
				// CAPS
				{
					id: "1",
					title: "Blackskies Cap",
					slug: "Blackskies Cap",
					description: "Blackskies Cap",
					currency: "$",

					brand: {
						id: "1",
						name: "Blackskies",
						slug: "Blackskies",
					},

					category: { id: "1", name: "Caps", slug: "Caps" },

					isAvailable: true,
					isNew: false,

					options: {
						color: ["Black", "Blue1", "Blue2", "Khaki", "Turquoise"],
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
							sku: "CAP-BS-BLK-S",
							price: 7790,
							oldPrice: 9790,
							stock: 15,
							attributes: { color: "Black", size: "S" },
							href: {
								small: "/products/caps/blackskies-black/image-1-240.png",
								medium: "/products/caps/blackskies-black/image-1-480.png",
								large: "/products/caps/blackskies-black/image-1-720.png",
								original:
									"/products/caps/blackskies-black/image-1-original.png",
							},
							images: [
								{
									id: "1",
									src: "/products/caps/blackskies-black/image-1-480.png",
								},
								{
									id: "2",
									src: "/products/caps/blackskies-black/image-2-480.png",
								},
								{
									id: "3",
									src: "/products/caps/blackskies-black/image-3-480.png",
								},
								{
									id: "4",
									src: "/products/caps/blackskies-black/image-4-480.png",
								},
								{
									id: "5",
									src: "/products/caps/blackskies-black/image-5-480.png",
								},
								{
									id: "6",
									src: "/products/caps/blackskies-black/image-6-480.png",
								},
							],
						},
						{
							id: "var-2",
							sku: "CAP-BS-BLE1-S",
							price: 7790,
							oldPrice: 9790,
							stock: 1,
							attributes: { color: "Blue", size: "S" },
							href: {
								small: "/products/caps/blackskies-blue1/image-1-240.png",
								medium: "/products/caps/blackskies-blue1/image-1-480.png",
								large: "/products/caps/blackskies-blue1/image-1-720.png",
								original:
									"/products/caps/blackskies-blue1/image-1-original.png",
							},
							images: [
								{
									id: "1",
									src: "/products/caps/blackskies-blue1/image-1-480.png",
								},
								{
									id: "2",
									src: "/products/caps/blackskies-blue1/image-2-480.png",
								},
								{
									id: "3",
									src: "/products/caps/blackskies-blue1/image-3-480.png",
								},
								{
									id: "4",
									src: "/products/caps/blackskies-blue1/image-4-480.png",
								},
								{
									id: "5",
									src: "/products/caps/blackskies-blue1/image-5-480.png",
								},
							],
						},
						{
							id: "var-3",
							sku: "CAP-BS-BLE2-S",
							price: 7790,
							oldPrice: 9790,
							stock: 1,
							attributes: { color: "Blue", size: "S" },
							href: {
								small: "/products/caps/blackskies-blue2/image-1-240.png",
								medium: "/products/caps/blackskies-blue2/image-1-480.png",
								large: "/products/caps/blackskies-blue2/image-1-720.png",
								original:
									"/products/caps/blackskies-blue2/image-1-original.png",
							},
							images: [
								{
									id: "1",
									src: "/products/caps/blackskies-blue2/image-1-480.png",
								},
								{
									id: "2",
									src: "/products/caps/blackskies-blue2/image-2-480.png",
								},
								{
									id: "3",
									src: "/products/caps/blackskies-blue2/image-3-480.png",
								},
								{
									id: "4",
									src: "/products/caps/blackskies-blue2/image-4-480.png",
								},
								{
									id: "5",
									src: "/products/caps/blackskies-blue2/image-5-480.png",
								},
								{
									id: "6",
									src: "/products/caps/blackskies-blue2/image-6-480.png",
								},
							],
						},
						{
							id: "var-4",
							sku: "CAP-BS-KHKI-S",
							price: 7790,
							oldPrice: 9790,
							stock: 1,
							attributes: { color: "Khaki", size: "S" },
							href: {
								small: "/products/caps/blackskies-khaki/image-1-240.png",
								medium: "/products/caps/blackskies-khaki/image-1-480.png",
								large: "/products/caps/blackskies-khaki/image-1-720.png",
								original:
									"/products/caps/blackskies-khaki/image-1-original.png",
							},
							images: [
								{
									id: "1",
									src: "/products/caps/blackskies-khaki/image-1-480.png",
								},
								{
									id: "2",
									src: "/products/caps/blackskies-khaki/image-2-480.png",
								},
								{
									id: "3",
									src: "/products/caps/blackskies-khaki/image-3-480.png",
								},
								{
									id: "4",
									src: "/products/caps/blackskies-khaki/image-4-480.png",
								},
								{
									id: "5",
									src: "/products/caps/blackskies-khaki/image-5-480.png",
								},
								{
									id: "6",
									src: "/products/caps/blackskies-khaki/image-6-480.png",
								},
							],
						},
						{
							id: "var-5",
							sku: "CAP-BS-TRQS-S",
							price: 7790,
							oldPrice: 9790,
							stock: 6,
							attributes: { color: "Turquoise", size: "S" },
							href: {
								small: "/products/caps/blackskies-turquoise/image-1-240.png",
								medium: "/products/caps/blackskies-turquoise/image-1-480.png",
								large: "/products/caps/blackskies-turquoise/image-1-720.png",
								original:
									"/products/caps/blackskies-turquoise/image-1-original.png",
							},
							images: [
								{
									id: "1",
									src: "/products/caps/blackskies-turquoise/image-1-480.png",
								},
								{
									id: "2",
									src: "/products/caps/blackskies-turquoise/image-2-480.png",
								},
								{
									id: "3",
									src: "/products/caps/blackskies-turquoise/image-3-480.png",
								},
								{
									id: "4",
									src: "/products/caps/blackskies-turquoise/image-4-480.png",
								},
							],
						},
					],
				},
				{
					id: "2",
					title: "Boss Cap",
					slug: "Boss Cap",
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
							sku: "CAP-BOSS-WHT-S",
							price: 7790,
							oldPrice: 9790,
							stock: 2,
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
				{
					id: "3",
					title: "Coastal Cap",
					slug: "Coastal Cap",
					description: "Coastal Cap",
					currency: "$",

					brand: {
						id: "1",
						name: "Coastal",
						slug: "Coastal",
					},

					category: { id: "1", name: "Caps", slug: "Caps" },

					isAvailable: true,
					isNew: false,

					options: {
						color: ["Blue"],
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
							sku: "CAP-CSTL-BLE-S",
							price: 7790,
							oldPrice: 9790,
							stock: 5,
							attributes: { color: "Blue", size: "S" },
							href: {
								small: "/products/caps/coastal-blue/image-1-240.png",
								medium: "/products/caps/coastal-blue/image-1-480.png",
								large: "/products/caps/coastal-blue/image-1-720.png",
								original: "/products/caps/coastal-blue/image-1-original.png",
							},
							images: [
								{
									id: "1",
									src: "/products/caps/coastal-blue/image-1-480.png",
								},
								{
									id: "2",
									src: "/products/caps/coastal-blue/image-2-480.png",
								},
								{
									id: "3",
									src: "/products/caps/coastal-blue/image-3-480.png",
								},
							],
						},
					],
				},
				{
					id: "4",
					title: "Coastal Cap",
					slug: "Coastal Cap",
					description: "Coastal Cap",
					currency: "$",

					brand: {
						id: "1",
						name: "Coastal",
						slug: "Coastal",
					},

					category: { id: "1", name: "Caps", slug: "Caps" },

					isAvailable: true,
					isNew: false,

					options: {
						color: ["Orange"],
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
							sku: "CAP-CSTL-ORNG-S",
							price: 7790,
							oldPrice: 9790,
							stock: 2,
							attributes: { color: "Orange", size: "S" },
							href: {
								small: "/products/caps/coastal-orange/image-1-240.png",
								medium: "/products/caps/coastal-orange/image-1-480.png",
								large: "/products/caps/coastal-orange/image-1-720.png",
								original: "/products/caps/coastal-orange/image-1-original.png",
							},
							images: [
								{
									id: "1",
									src: "/products/caps/coastal-orange/image-1-480.png",
								},
								{
									id: "2",
									src: "/products/caps/coastal-orange/image-2-480.png",
								},
								{
									id: "3",
									src: "/products/caps/coastal-orange/image-3-480.png",
								},
							],
						},
					],
				},
				{
					id: "5",
					title: "Phillip Plein Cap",
					slug: "Phillip Plein Cap",
					description: "Phillip Plein Cap",
					currency: "$",

					brand: {
						id: "1",
						name: "Phillip Plein",
						slug: "Phillip Plein",
					},

					category: { id: "1", name: "Caps", slug: "Caps" },

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
							sku: "CAP-PP-BLK-S",
							price: 7790,
							oldPrice: 9790,
							stock: 7,
							attributes: { color: "Black", size: "S" },
							href: {
								small: "/products/caps/phillip-plein-black/image-1-240.png",
								medium: "/products/caps/phillip-plein-black/image-1-480.png",
								large: "/products/caps/phillip-plein-black/image-1-720.png",
								original:
									"/products/caps/phillip-plein-black/image-1-original.png",
							},
							images: [
								{
									id: "1",
									src: "/products/caps/phillip-plein-black/image-1-480.png",
								},
								{
									id: "2",
									src: "/products/caps/phillip-plein-black/image-2-480.png",
								},
								{
									id: "3",
									src: "/products/caps/phillip-plein-black/image-3-480.png",
								},
							],
						},
					],
				},

				// HOODIES
				{
					id: "6",
					title: "Adidas Originals Hoodie",
					slug: "Adidas Originals Hoodie",
					description: "Adidas Originals Hoodie",
					currency: "$",

					brand: {
						id: "1",
						name: "Adidas Originals",
						slug: "Adidas Originals",
					},

					category: { id: "1", name: "Hoodies", slug: "Hoodies" },

					isAvailable: true,
					isNew: false,

					options: {
						color: ["Black", "Brown", "Emerald"],
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
									"/products/hoodies/adidas-originals-black/image-1-original.png",
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
							id: "var-2",
							sku: "HOOD-AD-BRWN-S",
							price: 7790,
							oldPrice: 9790,
							stock: 3,
							attributes: { color: "Brown", size: "S" },
							href: {
								small:
									"/products/hoodies/adidas-originals-brown/image-1-240.png",
								medium:
									"/products/hoodies/adidas-originals-brown/image-1-480.png",
								large:
									"/products/hoodies/adidas-originals-brown/image-1-720.png",
								original:
									"/products/hoodies/adidas-originals-brown/image-1-original.png",
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
								{
									id: "7",
									src: "/products/hoodies/adidas-originals-brown/image-7-480.png",
								},
							],
						},
						{
							id: "var-3",
							sku: "HOOD-AD-EMRLD-S",
							price: 7790,
							oldPrice: 9790,
							stock: 3,
							attributes: { color: "Emerald", size: "S" },
							href: {
								small:
									"/products/hoodies/adidas-originals-emerald/image-1-240.png",
								medium:
									"/products/hoodies/adidas-originals-emerald/image-1-480.png",
								large:
									"/products/hoodies/adidas-originals-emerald/image-1-720.png",
								original:
									"/products/hoodies/adidas-originals-emerald/image-1-original.png",
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
					],
				},
				{
					id: "7",
					title: "Burocs Hoodie",
					slug: "Burocs Hoodie",
					description: "Burocs Hoodie",
					currency: "$",

					brand: {
						id: "1",
						name: "Burocs",
						slug: "Burocs",
					},

					category: { id: "1", name: "Hoodies", slug: "Hoodies" },

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
							sku: "HOOD-BR-BLK-S",
							price: 7790,
							oldPrice: 9790,
							stock: 2,
							attributes: { color: "Black", size: "S" },
							href: {
								small: "/products/hoodies/burocs-black/image-1-240.png",
								medium: "/products/hoodies/burocs-black/image-1-480.png",
								large: "/products/hoodies/burocs-black/image-1-720.png",
								original: "/products/hoodies/burocs-black/image-1-original.png",
							},
							images: [
								{
									id: "1",
									src: "/products/hoodies/burocs-black/image-1-480.png",
								},
								{
									id: "2",
									src: "/products/hoodies/burocs-black/image-2-480.png",
								},
								{
									id: "3",
									src: "/products/hoodies/burocs-black/image-3-480.png",
								},
								{
									id: "4",
									src: "/products/hoodies/burocs-black/image-4-480.png",
								},
								{
									id: "5",
									src: "/products/hoodies/burocs-black/image-5-480.png",
								},
								{
									id: "6",
									src: "/products/hoodies/burocs-black/image-6-480.png",
								},
								{
									id: "7",
									src: "/products/hoodies/burocs-black/image-7-480.png",
								},
							],
						},
						{
							id: "var-2",
							sku: "HOOD-BR-WHT-S",
							price: 7790,
							oldPrice: 9790,
							stock: 6,
							attributes: { color: "White", size: "S" },
							href: {
								small: "/products/hoodies/burocs-white/image-1-240.png",
								medium: "/products/hoodies/burocs-white/image-1-480.png",
								large: "/products/hoodies/burocs-white/image-1-720.png",
								original: "/products/hoodies/burocs-white/image-1-original.png",
							},
							images: [
								{
									id: "1",
									src: "/products/hoodies/burocs-white/image-1-480.png",
								},
								{
									id: "2",
									src: "/products/hoodies/burocs-white/image-2-480.png",
								},
								{
									id: "3",
									src: "/products/hoodies/burocs-white/image-3-480.png",
								},
								{
									id: "4",
									src: "/products/hoodies/burocs-white/image-4-480.png",
								},
								{
									id: "5",
									src: "/products/hoodies/burocs-white/image-5-480.png",
								},
								{
									id: "6",
									src: "/products/hoodies/burocs-white/image-6-480.png",
								},
							],
						},
					],
				},
				{
					id: "8",
					title: "Neverless Hoodie",
					slug: "Neverless Hoodie",
					description: "Neverless Hoodie",
					currency: "$",

					brand: {
						id: "1",
						name: "Neverless",
						slug: "Neverless",
					},

					category: { id: "1", name: "Hoodies", slug: "Hoodies" },

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
								original:
									"/products/hoodies/neverless-black/image-1-original.png",
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
							stock: 0,
							attributes: { color: "Gray", size: "S" },
							href: {
								small: "/products/hoodies/neverless-gray/image-1-240.png",
								medium: "/products/hoodies/neverless-gray/image-1-480.png",
								large: "/products/hoodies/neverless-gray/image-1-720.png",
								original:
									"/products/hoodies/neverless-gray/image-1-original.png",
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
					id: "9",
					title: "Nike Hoodie",
					slug: "Nike Hoodie",
					description: "Nike Hoodie",
					currency: "$",

					brand: {
						id: "1",
						name: "Nike",
						slug: "Nike",
					},

					category: { id: "1", name: "Hoodies", slug: "Hoodies" },

					isAvailable: true,
					isNew: false,

					options: {
						color: ["Blue", "Dark Blue", "Pink", "Red"],
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
							sku: "HOOD-NK-BLE-S",
							price: 7790,
							oldPrice: 9790,
							stock: 1,
							attributes: { color: "Blue", size: "S" },
							href: {
								small: "/products/hoodies/nike-blue/image-1-240.png",
								medium: "/products/hoodies/nike-blue/image-1-480.png",
								large: "/products/hoodies/nike-blue/image-1-720.png",
								original: "/products/hoodies/nike-blue/image-1-original.png",
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
							id: "var-2",
							sku: "HOOD-NK-DBLE-S",
							price: 7790,
							oldPrice: 9790,
							stock: 9,
							attributes: { color: "Dark Blue", size: "S" },
							href: {
								small: "/products/hoodies/nike-dark-blue/image-1-240.png",
								medium: "/products/hoodies/nike-dark-blue/image-1-480.png",
								large: "/products/hoodies/nike-dark-blue/image-1-720.png",
								original:
									"/products/hoodies/nike-dark-blue/image-1-original.png",
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
								{
									id: "6",
									src: "/products/hoodies/nike-dark-blue/image-6-480.png",
								},
								{
									id: "7",
									src: "/products/hoodies/nike-dark-blue/image-7-480.png",
								},
							],
						},
						{
							id: "var-3",
							sku: "HOOD-NK-PINK-S",
							price: 7790,
							oldPrice: 9790,
							stock: 11,
							attributes: { color: "Pink", size: "S" },
							href: {
								small: "/products/hoodies/nike-pink/image-1-240.png",
								medium: "/products/hoodies/nike-pink/image-1-480.png",
								large: "/products/hoodies/nike-pink/image-1-720.png",
								original: "/products/hoodies/nike-pink/image-1-original.png",
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
							id: "var-4",
							sku: "HOOD-NK-RED-S",
							price: 7790,
							oldPrice: 9790,
							stock: 4,
							attributes: { color: "Red", size: "S" },
							href: {
								small: "/products/hoodies/nike-red/image-1-240.png",
								medium: "/products/hoodies/nike-red/image-1-480.png",
								large: "/products/hoodies/nike-red/image-1-720.png",
								original: "/products/hoodies/nike-red/image-1-original.png",
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
					id: "10",
					title: "Tommy Hilfiger Hoodie",
					slug: "Tommy Hilfiger Hoodie",
					description: "Tommy Hilfiger Hoodie",
					currency: "$",

					brand: {
						id: "1",
						name: "Tommy Hilfiger",
						slug: "Tommy Hilfiger",
					},

					category: { id: "1", name: "Hoodies", slug: "Hoodies" },

					isAvailable: true,
					isNew: false,

					options: {
						color: ["Black", "Navy", "White"],
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
							sku: "HOOD-TH-BLK-S",
							price: 7790,
							oldPrice: 9790,
							stock: 1,
							attributes: { color: "Black", size: "S" },
							href: {
								small: "/products/hoodies/tommy-hilfiger-black/image-1-240.png",
								medium:
									"/products/hoodies/tommy-hilfiger-black/image-1-480.png",
								large: "/products/hoodies/tommy-hilfiger-black/image-1-720.png",
								original:
									"/products/hoodies/tommy-hilfiger-black/image-1-original.png",
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
							id: "var-2",
							sku: "HOOD-TH-NVY-S",
							price: 7790,
							oldPrice: 9790,
							stock: 3,
							attributes: { color: "Navy", size: "S" },
							href: {
								small: "/products/hoodies/tommy-hilfiger-navy/image-1-240.png",
								medium: "/products/hoodies/tommy-hilfiger-navy/image-1-480.png",
								large: "/products/hoodies/tommy-hilfiger-navy/image-1-720.png",
								original:
									"/products/hoodies/tommy-hilfiger-navy/image-1-original.png",
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
						{
							id: "var-3",
							sku: "HOOD-TH-WHT-S",
							price: 7790,
							oldPrice: 9790,
							stock: 2,
							attributes: { color: "White", size: "S" },
							href: {
								small: "/products/hoodies/tommy-hilfiger-white/image-1-240.png",
								medium:
									"/products/hoodies/tommy-hilfiger-white/image-1-480.png",
								large: "/products/hoodies/tommy-hilfiger-white/image-1-720.png",
								original:
									"/products/hoodies/tommy-hilfiger-white/image-1-original.png",
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
					],
				},
				{
					id: "11",
					title: "Under Armour Hoodie",
					slug: "Under Armour Hoodie",
					description: "Under Armour Hoodie",
					currency: "$",

					brand: {
						id: "1",
						name: "Under Armour",
						slug: "Under Armour",
					},

					category: { id: "1", name: "Hoodies", slug: "Hoodies" },

					isAvailable: true,
					isNew: false,

					options: {
						color: ["White", "Navy"],
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
							stock: 4,
							attributes: { color: "White", size: "S" },
							href: {
								small: "/products/hoodies/under-armour-white/image-1-240.png",
								medium: "/products/hoodies/under-armour-white/image-1-480.png",
								large: "/products/hoodies/under-armour-white/image-1-720.png",
								original:
									"/products/hoodies/under-armour-white/image-1-original.png",
							},
							images: [
								{
									id: "1",
									src: "/products/hoodies/under-armour-white/image-1-480.png",
								},
								{
									id: "2",
									src: "/products/hoodies/under-armour-white/image-2-480.png",
								},
								{
									id: "3",
									src: "/products/hoodies/under-armour-white/image-3-480.png",
								},
								{
									id: "4",
									src: "/products/hoodies/under-armour-white/image-4-480.png",
								},
								{
									id: "5",
									src: "/products/hoodies/under-armour-white/image-5-480.png",
								},
							],
						},
						{
							id: "var-2",
							sku: "HOOD-UA-NVY-S",
							price: 7790,
							oldPrice: 9790,
							stock: 5,
							attributes: { color: "Navy", size: "S" },
							href: {
								small: "/products/hoodies/under-armour-navy/image-1-240.png",
								medium: "/products/hoodies/under-armour-navy/image-1-480.png",
								large: "/products/hoodies/under-armour-navy/image-1-720.png",
								original:
									"/products/hoodies/under-armour-navy/image-1-original.png",
							},
							images: [
								{
									id: "1",
									src: "/products/hoodies/under-armour-navy/image-1-480.png",
								},
								{
									id: "2",
									src: "/products/hoodies/under-armour-navy/image-2-480.png",
								},
								{
									id: "3",
									src: "/products/hoodies/under-armour-navy/image-3-480.png",
								},
								{
									id: "4",
									src: "/products/hoodies/under-armour-navy/image-4-480.png",
								},
								{
									id: "5",
									src: "/products/hoodies/under-armour-navy/image-5-480.png",
								},
							],
						},
					],
				},

				// Jeans
				{
					id: "12",
					title: "Jack & Jones Jeans",
					slug: "Jack & Jones Jeans",
					description: "Jack & Jones Jeans",
					currency: "$",

					brand: {
						id: "1",
						name: "Jack & Jones",
						slug: "Jack & Jones",
					},

					category: { id: "1", name: "Jeans", slug: "Jeans" },

					isAvailable: true,
					isNew: false,

					options: {
						color: ["Dark Gray"],
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
							sku: "JENS-OS-DKGR-S",
							price: 7790,
							oldPrice: 9790,
							stock: 1,
							attributes: { color: "Dark Gray", size: "S" },
							href: {
								small:
									"/products/jeans/jack-&-jones1-dark-gray/image-1-240.png",
								medium:
									"/products/jeans/jack-&-jones1-dark-gray/image-1-480.png",
								large:
									"/products/jeans/jack-&-jones1-dark-gray/image-1-720.png",
								original:
									"/products/jeans/jack-&-jones1-dark-gray/image-1-original.png",
							},
							images: [
								{
									id: "1",
									src: "/products/jeans/jack-&-jones1-dark-gray/image-1-480.png",
								},
								{
									id: "2",
									src: "/products/jeans/jack-&-jones1-dark-gray/image-2-480.png",
								},
								{
									id: "3",
									src: "/products/jeans/jack-&-jones1-dark-gray/image-3-480.png",
								},
								{
									id: "4",
									src: "/products/jeans/jack-&-jones1-dark-gray/image-4-480.png",
								},
								{
									id: "5",
									src: "/products/jeans/jack-&-jones1-dark-gray/image-5-480.png",
								},
								{
									id: "6",
									src: "/products/jeans/jack-&-jones1-dark-gray/image-6-480.png",
								},
								{
									id: "7",
									src: "/products/jeans/jack-&-jones1-dark-gray/image-7-480.png",
								},
								{
									id: "8",
									src: "/products/jeans/jack-&-jones1-dark-gray/image-8-480.png",
								},
							],
						},
					],
				},
				{
					id: "13",
					title: "Jack & Jones Jeans",
					slug: "Jack & Jones Jeans",
					description: "Jack & Jones Jeans",
					currency: "$",

					brand: {
						id: "1",
						name: "Jack & Jones",
						slug: "Jack & Jones",
					},

					category: { id: "1", name: "Jeans", slug: "Jeans" },

					isAvailable: true,
					isNew: false,

					options: {
						color: ["Bright"],
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
							sku: "JENS-OS-BRHT-S",
							price: 7790,
							oldPrice: 9790,
							stock: 1,
							attributes: { color: "Bright", size: "S" },
							href: {
								small: "/products/jeans/jack-&-jones2-bright/image-1-240.png",
								medium: "/products/jeans/jack-&-jones2-bright/image-1-480.png",
								large: "/products/jeans/jack-&-jones2-bright/image-1-720.png",
								original:
									"/products/jeans/jack-&-jones2-bright/image-1-original.png",
							},
							images: [
								{
									id: "1",
									src: "/products/jeans/jack-&-jones2-bright/image-1-480.png",
								},
								{
									id: "2",
									src: "/products/jeans/jack-&-jones2-bright/image-2-480.png",
								},
								{
									id: "3",
									src: "/products/jeans/jack-&-jones2-bright/image-3-480.png",
								},
								{
									id: "4",
									src: "/products/jeans/jack-&-jones2-bright/image-4-480.png",
								},
								{
									id: "5",
									src: "/products/jeans/jack-&-jones2-bright/image-5-480.png",
								},
								{
									id: "6",
									src: "/products/jeans/jack-&-jones2-bright/image-6-480.png",
								},
								{
									id: "7",
									src: "/products/jeans/jack-&-jones2-bright/image-7-480.png",
								},
								{
									id: "8",
									src: "/products/jeans/jack-&-jones2-bright/image-8-480.png",
								},
							],
						},
					],
				},
				{
					id: "14",
					title: "Only & Sons Jeans",
					slug: "Only & Sons Jeans",
					description: "Only & Sons Jeans",
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
						color: ["Bright"],
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
							sku: "JENS-OS-BRHT-S",
							price: 7790,
							oldPrice: 9790,
							stock: 1,
							attributes: { color: "Bright", size: "S" },
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
				{
					id: "15",
					title: "Only & Sons Jeans",
					slug: "Only & Sons Jeans",
					description: "Only & Sons Jeans",
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
						color: ["Black", "Bright"],
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
							sku: "JENS-OS-BLK-S",
							price: 7790,
							oldPrice: 9790,
							stock: 1,
							attributes: { color: "Black", size: "S" },
							href: {
								small: "/products/jeans/only-&-sons1-black/image-1-240.png",
								medium: "/products/jeans/only-&-sons1-black/image-1-480.png",
								large: "/products/jeans/only-&-sons1-black/image-1-720.png",
								original:
									"/products/jeans/only-&-sons1-black/image-1-original.png",
							},
							images: [
								{
									id: "1",
									src: "/products/jeans/only-&-sons1-black/image-1-480.png",
								},
								{
									id: "2",
									src: "/products/jeans/only-&-sons1-black/image-2-480.png",
								},
								{
									id: "3",
									src: "/products/jeans/only-&-sons1-black/image-3-480.png",
								},
								{
									id: "4",
									src: "/products/jeans/only-&-sons1-black/image-4-480.png",
								},
								{
									id: "5",
									src: "/products/jeans/only-&-sons1-black/image-5-480.png",
								},
								{
									id: "6",
									src: "/products/jeans/only-&-sons1-black/image-6-480.png",
								},
								{
									id: "7",
									src: "/products/jeans/only-&-sons1-black/image-7-480.png",
								},
							],
						},
						{
							id: "var-2",
							sku: "JENS-OS-BRHT-S",
							price: 7790,
							oldPrice: 9790,
							stock: 4,
							attributes: { color: "Black", size: "S" },
							href: {
								small: "/products/jeans/only-&-sons1-bright/image-1-240.png",
								medium: "/products/jeans/only-&-sons1-bright/image-1-480.png",
								large: "/products/jeans/only-&-sons1-bright/image-1-720.png",
								original:
									"/products/jeans/only-&-sons1-bright/image-1-original.png",
							},
							images: [
								{
									id: "1",
									src: "/products/jeans/only-&-sons1-bright/image-1-480.png",
								},
								{
									id: "2",
									src: "/products/jeans/only-&-sons1-bright/image-2-480.png",
								},
								{
									id: "3",
									src: "/products/jeans/only-&-sons1-bright/image-3-480.png",
								},
								{
									id: "4",
									src: "/products/jeans/only-&-sons1-bright/image-4-480.png",
								},
								{
									id: "5",
									src: "/products/jeans/only-&-sons1-bright/image-5-480.png",
								},
								{
									id: "6",
									src: "/products/jeans/only-&-sons1-bright/image-6-480.png",
								},
								{
									id: "7",
									src: "/products/jeans/only-&-sons1-bright/image-7-480.png",
								},
							],
						},
					],
				},
				{
					id: "16",
					title: "Only & Sons Jeans",
					slug: "Only & Sons Jeans",
					description: "Only & Sons Jeans",
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
						color: ["Bright1", "Bright2", "Dark Blue", "Gray"],
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
							sku: "JENS-OS-BRHT1-S",
							price: 7790,
							oldPrice: 9790,
							stock: 7,
							attributes: { color: "Bright", size: "S" },
							href: {
								small: "/products/jeans/only-&-sons2-bright1/image-1-240.png",
								medium: "/products/jeans/only-&-sons2-bright1/image-1-480.png",
								large: "/products/jeans/only-&-sons2-bright1/image-1-720.png",
								original:
									"/products/jeans/only-&-sons2-bright1/image-1-original.png",
							},
							images: [
								{
									id: "1",
									src: "/products/jeans/only-&-sons2-bright1/image-1-480.png",
								},
								{
									id: "2",
									src: "/products/jeans/only-&-sons2-bright1/image-2-480.png",
								},
								{
									id: "3",
									src: "/products/jeans/only-&-sons2-bright1/image-3-480.png",
								},
								{
									id: "4",
									src: "/products/jeans/only-&-sons2-bright1/image-4-480.png",
								},
								{
									id: "5",
									src: "/products/jeans/only-&-sons2-bright1/image-5-480.png",
								},
								{
									id: "6",
									src: "/products/jeans/only-&-sons2-bright1/image-6-480.png",
								},
								{
									id: "7",
									src: "/products/jeans/only-&-sons2-bright1/image-7-480.png",
								},
							],
						},
						{
							id: "var-2",
							sku: "JENS-OS-BRHT2-S",
							price: 7790,
							oldPrice: 9790,
							stock: 4,
							attributes: { color: "Bright", size: "S" },
							href: {
								small: "/products/jeans/only-&-sons2-bright2/image-1-240.png",
								medium: "/products/jeans/only-&-sons2-bright2/image-1-480.png",
								large: "/products/jeans/only-&-sons2-bright2/image-1-720.png",
								original:
									"/products/jeans/only-&-sons2-bright2/image-1-original.png",
							},
							images: [
								{
									id: "1",
									src: "/products/jeans/only-&-sons2-bright2/image-1-480.png",
								},
								{
									id: "2",
									src: "/products/jeans/only-&-sons2-bright2/image-2-480.png",
								},
								{
									id: "3",
									src: "/products/jeans/only-&-sons2-bright2/image-3-480.png",
								},
								{
									id: "4",
									src: "/products/jeans/only-&-sons2-bright2/image-4-480.png",
								},
								{
									id: "5",
									src: "/products/jeans/only-&-sons2-bright2/image-5-480.png",
								},
							],
						},
						{
							id: "var-3",
							sku: "JENS-OS-DRKB-S",
							price: 7790,
							oldPrice: 9790,
							stock: 4,
							attributes: { color: "Dark Blue", size: "S" },
							href: {
								small: "/products/jeans/only-&-sons2-dark-blue/image-1-240.png",
								medium:
									"/products/jeans/only-&-sons2-dark-blue/image-1-480.png",
								large: "/products/jeans/only-&-sons2-dark-blue/image-1-720.png",
								original:
									"/products/jeans/only-&-sons2-dark-blue/image-1-original.png",
							},
							images: [
								{
									id: "1",
									src: "/products/jeans/only-&-sons2-dark-blue/image-1-480.png",
								},
								{
									id: "2",
									src: "/products/jeans/only-&-sons2-dark-blue/image-2-480.png",
								},
								{
									id: "3",
									src: "/products/jeans/only-&-sons2-dark-blue/image-3-480.png",
								},
								{
									id: "4",
									src: "/products/jeans/only-&-sons2-dark-blue/image-4-480.png",
								},
								{
									id: "5",
									src: "/products/jeans/only-&-sons2-dark-blue/image-5-480.png",
								},
							],
						},
						{
							id: "var-4",
							sku: "JENS-OS-GRAY-S",
							price: 7790,
							oldPrice: 9790,
							stock: 2,
							attributes: { color: "Gray", size: "S" },
							href: {
								small: "/products/jeans/only-&-sons2-gray/image-1-240.png",
								medium: "/products/jeans/only-&-sons2-gray/image-1-480.png",
								large: "/products/jeans/only-&-sons2-gray/image-1-720.png",
								original:
									"/products/jeans/only-&-sons2-gray/image-1-original.png",
							},
							images: [
								{
									id: "1",
									src: "/products/jeans/only-&-sons2-gray/image-1-480.png",
								},
								{
									id: "2",
									src: "/products/jeans/only-&-sons2-gray/image-2-480.png",
								},
								{
									id: "3",
									src: "/products/jeans/only-&-sons2-gray/image-3-480.png",
								},
								{
									id: "4",
									src: "/products/jeans/only-&-sons2-gray/image-4-480.png",
								},
								{
									id: "5",
									src: "/products/jeans/only-&-sons2-gray/image-5-480.png",
								},
								{
									id: "6",
									src: "/products/jeans/only-&-sons2-gray/image-6-480.png",
								},
								{
									id: "7",
									src: "/products/jeans/only-&-sons2-gray/image-7-480.png",
								},
							],
						},
					],
				},
				{
					id: "17",
					title: "Tom Taylor Jeans",
					slug: "Tom Taylor Jeans",
					description: "Tom Taylor Jeans",
					currency: "$",

					brand: {
						id: "1",
						name: "Tom Taylor",
						slug: "Tom Taylor",
					},

					category: { id: "1", name: "Jeans", slug: "Jeans" },

					isAvailable: true,
					isNew: false,

					options: {
						color: ["Black", "Blue", "Gray"],
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
							sku: "JENS-TT-BLK-S",
							price: 7790,
							oldPrice: 9790,
							stock: 3,
							attributes: { color: "Black", size: "S" },
							href: {
								small: "/products/jeans/tom-taylor-black/image-1-240.png",
								medium: "/products/jeans/tom-taylor-black/image-1-480.png",
								large: "/products/jeans/tom-taylor-black/image-1-720.png",
								original:
									"/products/jeans/tom-taylor-black/image-1-original.png",
							},
							images: [
								{
									id: "1",
									src: "/products/jeans/tom-taylor-black/image-1-480.png",
								},
								{
									id: "2",
									src: "/products/jeans/tom-taylor-black/image-2-480.png",
								},
								{
									id: "3",
									src: "/products/jeans/tom-taylor-black/image-3-480.png",
								},
								{
									id: "4",
									src: "/products/jeans/tom-taylor-black/image-4-480.png",
								},
								{
									id: "5",
									src: "/products/jeans/tom-taylor-black/image-5-480.png",
								},
								{
									id: "6",
									src: "/products/jeans/tom-taylor-black/image-6-480.png",
								},
							],
						},
						{
							id: "var-2",
							sku: "JENS-TT-BLUE-S",
							price: 7790,
							oldPrice: 9790,
							stock: 2,
							attributes: { color: "Blue", size: "S" },
							href: {
								small: "/products/jeans/tom-taylor-blue/image-1-240.png",
								medium: "/products/jeans/tom-taylor-blue/image-1-480.png",
								large: "/products/jeans/tom-taylor-blue/image-1-720.png",
								original:
									"/products/jeans/tom-taylor-blue/image-1-original.png",
							},
							images: [
								{
									id: "1",
									src: "/products/jeans/tom-taylor-blue/image-1-480.png",
								},
								{
									id: "2",
									src: "/products/jeans/tom-taylor-blue/image-2-480.png",
								},
								{
									id: "3",
									src: "/products/jeans/tom-taylor-blue/image-3-480.png",
								},
								{
									id: "4",
									src: "/products/jeans/tom-taylor-blue/image-4-480.png",
								},
								{
									id: "5",
									src: "/products/jeans/tom-taylor-blue/image-5-480.png",
								},
								{
									id: "6",
									src: "/products/jeans/tom-taylor-blue/image-6-480.png",
								},
							],
						},
						{
							id: "var-3",
							sku: "JENS-TT-GRAY-S",
							price: 7790,
							oldPrice: 9790,
							stock: 4,
							attributes: { color: "Gray", size: "S" },
							href: {
								small: "/products/jeans/tom-taylor-gray/image-1-240.png",
								medium: "/products/jeans/tom-taylor-gray/image-1-480.png",
								large: "/products/jeans/tom-taylor-gray/image-1-720.png",
								original:
									"/products/jeans/tom-taylor-gray/image-1-original.png",
							},
							images: [
								{
									id: "1",
									src: "/products/jeans/tom-taylor-gray/image-1-480.png",
								},
								{
									id: "2",
									src: "/products/jeans/tom-taylor-gray/image-2-480.png",
								},
								{
									id: "3",
									src: "/products/jeans/tom-taylor-gray/image-3-480.png",
								},
								{
									id: "4",
									src: "/products/jeans/tom-taylor-gray/image-4-480.png",
								},
								{
									id: "5",
									src: "/products/jeans/tom-taylor-gray/image-5-480.png",
								},
								{
									id: "6",
									src: "/products/jeans/tom-taylor-gray/image-6-480.png",
								},
							],
						},
					],
				},

				// Sneakers
				{
					id: "18",
					title: "Adidas Sneakers",
					slug: "Adidas Sneakers",
					description: "Adidas Sneakers",
					currency: "$",

					brand: {
						id: "1",
						name: "Adidas",
						slug: "Adidas",
					},

					category: { id: "1", name: "Sneakers", slug: "Sneakers" },

					isAvailable: true,
					isNew: false,

					options: {
						color: ["Black1", "Black2", "Black3", "White1", "White2", "White3"],
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
							sku: "SNKR-AD-BLK1-S",
							price: 7790,
							oldPrice: 9790,
							stock: 3,
							attributes: { color: "Black", size: "S" },
							href: {
								small: "/products/sneakers/adidas-black1/image-1-240.png",
								medium: "/products/sneakers/adidas-black1/image-1-480.png",
								large: "/products/sneakers/adidas-black1/image-1-720.png",
								original:
									"/products/sneakers/adidas-black1/image-1-original.png",
							},
							images: [
								{
									id: "1",
									src: "/products/sneakers/adidas-black1/image-1-480.png",
								},
								{
									id: "2",
									src: "/products/sneakers/adidas-black1/image-2-480.png",
								},
								{
									id: "3",
									src: "/products/sneakers/adidas-black1/image-3-480.png",
								},
								{
									id: "4",
									src: "/products/sneakers/adidas-black1/image-4-480.png",
								},
								{
									id: "5",
									src: "/products/sneakers/adidas-black1/image-5-480.png",
								},
								{
									id: "6",
									src: "/products/sneakers/adidas-black1/image-6-480.png",
								},
								{
									id: "7",
									src: "/products/sneakers/adidas-black1/image-7-480.png",
								},
								{
									id: "8",
									src: "/products/sneakers/adidas-black1/image-8-480.png",
								},
								{
									id: "9",
									src: "/products/sneakers/adidas-black1/image-9-480.png",
								},
							],
						},
						{
							id: "var-2",
							sku: "SNKR-AD-BLK2-S",
							price: 7790,
							oldPrice: 9790,
							stock: 0,
							attributes: { color: "Black", size: "S" },
							href: {
								small: "/products/sneakers/adidas-black2/image-1-240.png",
								medium: "/products/sneakers/adidas-black2/image-1-480.png",
								large: "/products/sneakers/adidas-black2/image-1-720.png",
								original:
									"/products/sneakers/adidas-black2/image-1-original.png",
							},
							images: [
								{
									id: "1",
									src: "/products/sneakers/adidas-black2/image-1-480.png",
								},
								{
									id: "2",
									src: "/products/sneakers/adidas-black2/image-2-480.png",
								},
								{
									id: "3",
									src: "/products/sneakers/adidas-black2/image-3-480.png",
								},
								{
									id: "4",
									src: "/products/sneakers/adidas-black2/image-4-480.png",
								},
								{
									id: "5",
									src: "/products/sneakers/adidas-black2/image-5-480.png",
								},
								{
									id: "6",
									src: "/products/sneakers/adidas-black2/image-6-480.png",
								},
								{
									id: "7",
									src: "/products/sneakers/adidas-black2/image-7-480.png",
								},
								{
									id: "8",
									src: "/products/sneakers/adidas-black2/image-8-480.png",
								},
							],
						},
						{
							id: "var-3",
							sku: "SNKR-AD-BLK3-S",
							price: 7790,
							oldPrice: 9790,
							stock: 4,
							attributes: { color: "Black", size: "S" },
							href: {
								small: "/products/sneakers/adidas-black3/image-1-240.png",
								medium: "/products/sneakers/adidas-black3/image-1-480.png",
								large: "/products/sneakers/adidas-black3/image-1-720.png",
								original:
									"/products/sneakers/adidas-black3/image-1-original.png",
							},
							images: [
								{
									id: "1",
									src: "/products/sneakers/adidas-black3/image-1-480.png",
								},
								{
									id: "2",
									src: "/products/sneakers/adidas-black3/image-2-480.png",
								},
								{
									id: "3",
									src: "/products/sneakers/adidas-black3/image-3-480.png",
								},
								{
									id: "4",
									src: "/products/sneakers/adidas-black3/image-4-480.png",
								},
								{
									id: "5",
									src: "/products/sneakers/adidas-black3/image-5-480.png",
								},
								{
									id: "6",
									src: "/products/sneakers/adidas-black3/image-6-480.png",
								},
								{
									id: "7",
									src: "/products/sneakers/adidas-black3/image-7-480.png",
								},
								{
									id: "8",
									src: "/products/sneakers/adidas-black3/image-8-480.png",
								},
								{
									id: "9",
									src: "/products/sneakers/adidas-black3/image-9-480.png",
								},
								{
									id: "10",
									src: "/products/sneakers/adidas-black3/image-10-480.png",
								},
							],
						},
						{
							id: "var-4",
							sku: "SNKR-AD-WHT1-S",
							price: 7790,
							oldPrice: 9790,
							stock: 2,
							attributes: { color: "White", size: "S" },
							href: {
								small: "/products/sneakers/adidas-white1/image-1-240.png",
								medium: "/products/sneakers/adidas-white1/image-1-480.png",
								large: "/products/sneakers/adidas-white1/image-1-720.png",
								original:
									"/products/sneakers/adidas-white1/image-1-original.png",
							},
							images: [
								{
									id: "1",
									src: "/products/sneakers/adidas-white1/image-1-480.png",
								},
								{
									id: "2",
									src: "/products/sneakers/adidas-white1/image-2-480.png",
								},
								{
									id: "3",
									src: "/products/sneakers/adidas-white1/image-3-480.png",
								},
								{
									id: "4",
									src: "/products/sneakers/adidas-white1/image-4-480.png",
								},
								{
									id: "5",
									src: "/products/sneakers/adidas-white1/image-5-480.png",
								},
								{
									id: "6",
									src: "/products/sneakers/adidas-white1/image-6-480.png",
								},
							],
						},
						{
							id: "var-5",
							sku: "SNKR-AD-WHT2-S",
							price: 7790,
							oldPrice: 9790,
							stock: 7,
							attributes: { color: "White", size: "S" },
							href: {
								small: "/products/sneakers/adidas-white2/image-1-240.png",
								medium: "/products/sneakers/adidas-white2/image-1-480.png",
								large: "/products/sneakers/adidas-white2/image-1-720.png",
								original:
									"/products/sneakers/adidas-white2/image-1-original.png",
							},
							images: [
								{
									id: "1",
									src: "/products/sneakers/adidas-white2/image-1-480.png",
								},
								{
									id: "2",
									src: "/products/sneakers/adidas-white2/image-2-480.png",
								},
							],
						},
						{
							id: "var-6",
							sku: "SNKR-AD-WHT3-S",
							price: 7790,
							oldPrice: 9790,
							stock: 2,
							attributes: { color: "White", size: "S" },
							href: {
								small: "/products/sneakers/adidas-white3/image-1-240.png",
								medium: "/products/sneakers/adidas-white3/image-1-480.png",
								large: "/products/sneakers/adidas-white3/image-1-720.png",
								original:
									"/products/sneakers/adidas-white3/image-1-original.png",
							},
							images: [
								{
									id: "1",
									src: "/products/sneakers/adidas-white3/image-1-480.png",
								},
								{
									id: "2",
									src: "/products/sneakers/adidas-white3/image-2-480.png",
								},
								{
									id: "3",
									src: "/products/sneakers/adidas-white3/image-3-480.png",
								},
								{
									id: "4",
									src: "/products/sneakers/adidas-white3/image-4-480.png",
								},
								{
									id: "5",
									src: "/products/sneakers/adidas-white3/image-5-480.png",
								},
								{
									id: "6",
									src: "/products/sneakers/adidas-white3/image-6-480.png",
								},
								{
									id: "7",
									src: "/products/sneakers/adidas-white3/image-7-480.png",
								},
								{
									id: "8",
									src: "/products/sneakers/adidas-white3/image-8-480.png",
								},
							],
						},
					],
				},
				{
					id: "19",
					title: "Guess Sport Sneakers",
					slug: "Guess Sport Sneakers",
					description: "Guess Sport Sneakers",
					currency: "$",

					brand: {
						id: "1",
						name: "Guess",
						slug: "Guess",
					},

					category: { id: "1", name: "Sneakers", slug: "Sneakers" },

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
							sku: "SNKR-GS-BLK-S",
							price: 7790,
							oldPrice: 9790,
							stock: 3,
							attributes: { color: "Black", size: "S" },
							href: {
								small: "/products/sneakers/guess-sport-black/image-1-240.png",
								medium: "/products/sneakers/guess-sport-black/image-1-480.png",
								large: "/products/sneakers/guess-sport-black/image-1-720.png",
								original:
									"/products/sneakers/guess-sport-black/image-1-original.png",
							},
							images: [
								{
									id: "1",
									src: "/products/sneakers/guess-sport-black/image-1-480.png",
								},
							],
						},
						{
							id: "var-2",
							sku: "SNKR-GS-WHT-S",
							price: 7790,
							oldPrice: 9790,
							stock: 2,
							attributes: { color: "White", size: "S" },
							href: {
								small: "/products/sneakers/guess-sport-white/image-1-240.png",
								medium: "/products/sneakers/guess-sport-white/image-1-480.png",
								large: "/products/sneakers/guess-sport-white/image-1-720.png",
								original:
									"/products/sneakers/guess-sport-white/image-1-original.png",
							},
							images: [
								{
									id: "1",
									src: "/products/sneakers/guess-sport-white/image-1-480.png",
								},
								{
									id: "2",
									src: "/products/sneakers/guess-sport-white/image-2-480.png",
								},
								{
									id: "3",
									src: "/products/sneakers/guess-sport-white/image-3-480.png",
								},
								{
									id: "4",
									src: "/products/sneakers/guess-sport-white/image-4-480.png",
								},
								{
									id: "5",
									src: "/products/sneakers/guess-sport-white/image-5-480.png",
								},
								{
									id: "6",
									src: "/products/sneakers/guess-sport-white/image-6-480.png",
								},
							],
						},
					],
				},
				{
					id: "20",
					title: "Nike Sneakers",
					slug: "Nike Sneakers",
					description: "Nike Sneakers",
					currency: "$",

					brand: {
						id: "1",
						name: "Nike",
						slug: "Nike",
					},

					category: { id: "1", name: "Sneakers", slug: "Sneakers" },

					isAvailable: true,
					isNew: false,

					options: {
						color: ["Gray"],
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
							sku: "SNKR-NK-GRAY-S",
							price: 7790,
							oldPrice: 9790,
							stock: 5,
							attributes: { color: "Gray", size: "S" },
							href: {
								small: "/products/sneakers/nike-gray/image-1-240.png",
								medium: "/products/sneakers/nike-gray/image-1-480.png",
								large: "/products/sneakers/nike-gray/image-1-720.png",
								original: "/products/sneakers/nike-gray/image-1-original.png",
							},
							images: [
								{
									id: "1",
									src: "/products/sneakers/nike-gray/image-1-480.png",
								},
								{
									id: "2",
									src: "/products/sneakers/nike-gray/image-2-480.png",
								},
								{
									id: "3",
									src: "/products/sneakers/nike-gray/image-3-480.png",
								},
								{
									id: "4",
									src: "/products/sneakers/nike-gray/image-4-480.png",
								},
								{
									id: "5",
									src: "/products/sneakers/nike-gray/image-5-480.png",
								},
								{
									id: "6",
									src: "/products/sneakers/nike-gray/image-6-480.png",
								},
								{
									id: "7",
									src: "/products/sneakers/nike-gray/image-7-480.png",
								},
								{
									id: "8",
									src: "/products/sneakers/nike-gray/image-8-480.png",
								},
							],
						},
					],
				},
				{
					id: "21",
					title: "Tommy Hilfiger Sneakers",
					slug: "Tommy Hilfiger Sneakers",
					description: "Tommy Hilfiger Sneakers",
					currency: "$",

					brand: {
						id: "1",
						name: "Tommy Hilfiger",
						slug: "Tommy Hilfiger",
					},

					category: { id: "1", name: "Sneakers", slug: "Sneakers" },

					isAvailable: true,
					isNew: false,

					options: {
						color: ["Black", "Blue", "Khaki", "White"],
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
							sku: "SNKR-TH-BLK-S",
							price: 7790,
							oldPrice: 9790,
							stock: 1,
							attributes: { color: "Black", size: "S" },
							href: {
								small:
									"/products/sneakers/tommy-hilfiger-black/image-1-240.png",
								medium:
									"/products/sneakers/tommy-hilfiger-black/image-1-480.png",
								large:
									"/products/sneakers/tommy-hilfiger-black/image-1-720.png",
								original:
									"/products/sneakers/tommy-hilfiger-black/image-1-original.png",
							},
							images: [
								{
									id: "1",
									src: "/products/sneakers/tommy-hilfiger-black/image-1-480.png",
								},
								{
									id: "2",
									src: "/products/sneakers/tommy-hilfiger-black/image-2-480.png",
								},
								{
									id: "3",
									src: "/products/sneakers/tommy-hilfiger-black/image-3-480.png",
								},
								{
									id: "4",
									src: "/products/sneakers/tommy-hilfiger-black/image-4-480.png",
								},
								{
									id: "5",
									src: "/products/sneakers/tommy-hilfiger-black/image-5-480.png",
								},
								{
									id: "6",
									src: "/products/sneakers/tommy-hilfiger-black/image-6-480.png",
								},
								{
									id: "7",
									src: "/products/sneakers/tommy-hilfiger-black/image-7-480.png",
								},
							],
						},
						{
							id: "var-2",
							sku: "SNKR-TH-BLUE-S",
							price: 7790,
							oldPrice: 9790,
							stock: 0,
							attributes: { color: "Blue", size: "S" },
							href: {
								small: "/products/sneakers/tommy-hilfiger-blue/image-1-240.png",
								medium:
									"/products/sneakers/tommy-hilfiger-blue/image-1-480.png",
								large: "/products/sneakers/tommy-hilfiger-blue/image-1-720.png",
								original:
									"/products/sneakers/tommy-hilfiger-blue/image-1-original.png",
							},
							images: [
								{
									id: "1",
									src: "/products/sneakers/tommy-hilfiger-blue/image-1-480.png",
								},
								{
									id: "2",
									src: "/products/sneakers/tommy-hilfiger-blue/image-2-480.png",
								},
								{
									id: "3",
									src: "/products/sneakers/tommy-hilfiger-blue/image-3-480.png",
								},
								{
									id: "4",
									src: "/products/sneakers/tommy-hilfiger-blue/image-4-480.png",
								},
								{
									id: "5",
									src: "/products/sneakers/tommy-hilfiger-blue/image-5-480.png",
								},
								{
									id: "6",
									src: "/products/sneakers/tommy-hilfiger-blue/image-6-480.png",
								},
							],
						},
						{
							id: "var-3",
							sku: "SNKR-TH-KHKI-S",
							price: 7790,
							oldPrice: 9790,
							stock: 3,
							attributes: { color: "Khaki", size: "S" },
							href: {
								small:
									"/products/sneakers/tommy-hilfiger-khaki/image-1-240.png",
								medium:
									"/products/sneakers/tommy-hilfiger-khaki/image-1-480.png",
								large:
									"/products/sneakers/tommy-hilfiger-khaki/image-1-720.png",
								original:
									"/products/sneakers/tommy-hilfiger-khaki/image-1-original.png",
							},
							images: [
								{
									id: "1",
									src: "/products/sneakers/tommy-hilfiger-khaki/image-1-480.png",
								},
								{
									id: "2",
									src: "/products/sneakers/tommy-hilfiger-khaki/image-2-480.png",
								},
								{
									id: "3",
									src: "/products/sneakers/tommy-hilfiger-khaki/image-3-480.png",
								},
								{
									id: "4",
									src: "/products/sneakers/tommy-hilfiger-khaki/image-4-480.png",
								},
								{
									id: "5",
									src: "/products/sneakers/tommy-hilfiger-khaki/image-5-480.png",
								},
								{
									id: "6",
									src: "/products/sneakers/tommy-hilfiger-khaki/image-6-480.png",
								},
								{
									id: "7",
									src: "/products/sneakers/tommy-hilfiger-khaki/image-7-480.png",
								},
							],
						},
						{
							id: "var-4",
							sku: "SNKR-TH-WHT-S",
							price: 7790,
							oldPrice: 9790,
							stock: 5,
							attributes: { color: "White", size: "S" },
							href: {
								small:
									"/products/sneakers/tommy-hilfiger-white/image-1-240.png",
								medium:
									"/products/sneakers/tommy-hilfiger-white/image-1-480.png",
								large:
									"/products/sneakers/tommy-hilfiger-white/image-1-720.png",
								original:
									"/products/sneakers/tommy-hilfiger-white/image-1-original.png",
							},
							images: [
								{
									id: "1",
									src: "/products/sneakers/tommy-hilfiger-white/image-1-480.png",
								},
								{
									id: "2",
									src: "/products/sneakers/tommy-hilfiger-white/image-2-480.png",
								},
								{
									id: "3",
									src: "/products/sneakers/tommy-hilfiger-white/image-3-480.png",
								},
								{
									id: "4",
									src: "/products/sneakers/tommy-hilfiger-white/image-4-480.png",
								},
								{
									id: "5",
									src: "/products/sneakers/tommy-hilfiger-white/image-5-480.png",
								},
								{
									id: "6",
									src: "/products/sneakers/tommy-hilfiger-white/image-6-480.png",
								},
							],
						},
					],
				},
				{
					id: "22",
					title: "Adidas Sports Sneakers",
					slug: "Adidas Sports Sneakers",
					description: "Adidas Sports Sneakers",
					currency: "$",

					brand: {
						id: "1",
						name: "Adidas",
						slug: "Adidas",
					},

					category: { id: "1", name: "Sneakers", slug: "Sneakers" },

					isAvailable: true,
					isNew: false,

					options: {
						color: ["Black", "Beige", "Black2", "Blue"],
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
							sku: "SNKR-ADS-BLK-S",
							price: 7790,
							oldPrice: 9790,
							stock: 3,
							attributes: { color: "Black", size: "S" },
							href: {
								small: "/products/sneakers/adidas-sports-black/image-1-240.png",
								medium:
									"/products/sneakers/adidas-sports-black/image-1-480.png",
								large: "/products/sneakers/adidas-sports-black/image-1-720.png",
								original:
									"/products/sneakers/adidas-sports-black/image-1-original.png",
							},
							images: [
								{
									id: "1",
									src: "/products/sneakers/adidas-sports-black/image-1-480.png",
								},
								{
									id: "2",
									src: "/products/sneakers/adidas-sports-black/image-2-480.png",
								},
								{
									id: "3",
									src: "/products/sneakers/adidas-sports-black/image-3-480.png",
								},
								{
									id: "4",
									src: "/products/sneakers/adidas-sports-black/image-4-480.png",
								},
								{
									id: "5",
									src: "/products/sneakers/adidas-sports-black/image-5-480.png",
								},
								{
									id: "6",
									src: "/products/sneakers/adidas-sports-black/image-6-480.png",
								},
								{
									id: "7",
									src: "/products/sneakers/adidas-sports-black/image-7-480.png",
								},
							],
						},
						{
							id: "var-2",
							sku: "SNKR-ADS-BGE-S",
							price: 7790,
							oldPrice: 9790,
							stock: 2,
							attributes: { color: "Beige", size: "S" },
							href: {
								small: "/products/sneakers/adidas-sports-beige/image-1-240.png",
								medium:
									"/products/sneakers/adidas-sports-beige/image-1-480.png",
								large: "/products/sneakers/adidas-sports-beige/image-1-720.png",
								original:
									"/products/sneakers/adidas-sports-beige/image-1-original.png",
							},
							images: [
								{
									id: "1",
									src: "/products/sneakers/adidas-sports-beige/image-1-480.png",
								},
								{
									id: "2",
									src: "/products/sneakers/adidas-sports-beige/image-2-480.png",
								},
								{
									id: "3",
									src: "/products/sneakers/adidas-sports-beige/image-3-480.png",
								},
								{
									id: "4",
									src: "/products/sneakers/adidas-sports-beige/image-4-480.png",
								},
								{
									id: "5",
									src: "/products/sneakers/adidas-sports-beige/image-5-480.png",
								},
								{
									id: "6",
									src: "/products/sneakers/adidas-sports-beige/image-6-480.png",
								},
								{
									id: "7",
									src: "/products/sneakers/adidas-sports-beige/image-7-480.png",
								},
								{
									id: "8",
									src: "/products/sneakers/adidas-sports-beige/image-8-480.png",
								},
							],
						},
						{
							id: "var-3",
							sku: "SNKR-ADS-BLK2-S",
							price: 7790,
							oldPrice: 9790,
							stock: 5,
							attributes: { color: "Black", size: "S" },
							href: {
								small:
									"/products/sneakers/adidas-sports-black2/image-1-240.png",
								medium:
									"/products/sneakers/adidas-sports-black2/image-1-480.png",
								large:
									"/products/sneakers/adidas-sports-black2/image-1-720.png",
								original:
									"/products/sneakers/adidas-sports-black2/image-1-original.png",
							},
							images: [
								{
									id: "1",
									src: "/products/sneakers/adidas-sports-black2/image-1-480.png",
								},
								{
									id: "2",
									src: "/products/sneakers/adidas-sports-black2/image-2-480.png",
								},
								{
									id: "3",
									src: "/products/sneakers/adidas-sports-black2/image-3-480.png",
								},
							],
						},
						{
							id: "var-4",
							sku: "SNKR-ADS-BLUE-S",
							price: 7790,
							oldPrice: 9790,
							stock: 8,
							attributes: { color: "Blue", size: "S" },
							href: {
								small: "/products/sneakers/adidas-sports-blue/image-1-240.png",
								medium: "/products/sneakers/adidas-sports-blue/image-1-480.png",
								large: "/products/sneakers/adidas-sports-blue/image-1-720.png",
								original:
									"/products/sneakers/adidas-sports-blue/image-1-original.png",
							},
							images: [
								{
									id: "1",
									src: "/products/sneakers/adidas-sports-blue/image-1-480.png",
								},
								{
									id: "2",
									src: "/products/sneakers/adidas-sports-blue/image-2-480.png",
								},
								{
									id: "3",
									src: "/products/sneakers/adidas-sports-blue/image-3-480.png",
								},
							],
						},
					],
				},

				// TShirts
				{
					id: "23",
					title: "Adidas Originals FB T-Shirt",
					slug: "Adidas Originals FB T-Shirt",
					description: "Adidas Originals FB T-Shirt",
					currency: "$",

					brand: {
						id: "1",
						name: "Adidas",
						slug: "Adidas",
					},

					category: { id: "1", name: "T-Shirts", slug: "T-Shirts" },

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
							sku: "TSHRT-ADFB-WHT-S",
							price: 7790,
							oldPrice: 9790,
							stock: 1,
							attributes: { color: "White", size: "S" },
							href: {
								small:
									"/products/tshirts/adidas-originals-fb-white/image-1-240.png",
								medium:
									"/products/tshirts/adidas-originals-fb-white/image-1-480.png",
								large:
									"/products/tshirts/adidas-originals-fb-white/image-1-720.png",
								original:
									"/products/tshirts/adidas-originals-fb-white/image-1-original.png",
							},
							images: [
								{
									id: "1",
									src: "/products/tshirts/adidas-originals-fb-white/image-1-480.png",
								},
								{
									id: "2",
									src: "/products/tshirts/adidas-originals-fb-white/image-2-480.png",
								},
								{
									id: "3",
									src: "/products/tshirts/adidas-originals-fb-white/image-3-480.png",
								},
								{
									id: "4",
									src: "/products/tshirts/adidas-originals-fb-white/image-4-480.png",
								},
								{
									id: "5",
									src: "/products/tshirts/adidas-originals-fb-white/image-5-480.png",
								},
								{
									id: "6",
									src: "/products/tshirts/adidas-originals-fb-white/image-6-480.png",
								},
							],
						},
					],
				},
				{
					id: "24",
					title: "Adidas Originals Sport T-Shirt",
					slug: "Adidas Originals Sport T-Shirt",
					description: "Adidas Originals Sport T-Shirt",
					currency: "$",

					brand: {
						id: "1",
						name: "Adidas",
						slug: "Adidas",
					},

					category: { id: "1", name: "T-Shirts", slug: "T-Shirts" },

					isAvailable: true,
					isNew: false,

					options: {
						color: ["Blue", "Gray", "White"],
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
							sku: "TSHRT-ADOS-BLUE-S",
							price: 7790,
							oldPrice: 9790,
							stock: 4,
							attributes: { color: "Blue", size: "S" },
							href: {
								small:
									"/products/tshirts/adidas-originals-sport-blue/image-1-240.png",
								medium:
									"/products/tshirts/adidas-originals-sport-blue/image-1-480.png",
								large:
									"/products/tshirts/adidas-originals-sport-blue/image-1-720.png",
								original:
									"/products/tshirts/adidas-originals-sport-blue/image-1-original.png",
							},
							images: [
								{
									id: "1",
									src: "/products/tshirts/adidas-originals-sport-blue/image-1-480.png",
								},
								{
									id: "2",
									src: "/products/tshirts/adidas-originals-sport-blue/image-2-480.png",
								},
								{
									id: "3",
									src: "/products/tshirts/adidas-originals-sport-blue/image-3-480.png",
								},
								{
									id: "4",
									src: "/products/tshirts/adidas-originals-sport-blue/image-4-480.png",
								},
								{
									id: "5",
									src: "/products/tshirts/adidas-originals-sport-blue/image-5-480.png",
								},
							],
						},
						{
							id: "var-2",
							sku: "TSHRT-ADOS-GRAY-S",
							price: 7790,
							oldPrice: 9790,
							stock: 1,
							attributes: { color: "Gray", size: "S" },
							href: {
								small:
									"/products/tshirts/adidas-originals-sport-gray/image-1-240.png",
								medium:
									"/products/tshirts/adidas-originals-sport-gray/image-1-480.png",
								large:
									"/products/tshirts/adidas-originals-sport-gray/image-1-720.png",
								original:
									"/products/tshirts/adidas-originals-sport-gray/image-1-original.png",
							},
							images: [
								{
									id: "1",
									src: "/products/tshirts/adidas-originals-sport-gray/image-1-480.png",
								},
								{
									id: "2",
									src: "/products/tshirts/adidas-originals-sport-gray/image-2-480.png",
								},
								{
									id: "3",
									src: "/products/tshirts/adidas-originals-sport-gray/image-3-480.png",
								},
								{
									id: "4",
									src: "/products/tshirts/adidas-originals-sport-gray/image-4-480.png",
								},
								{
									id: "5",
									src: "/products/tshirts/adidas-originals-sport-gray/image-5-480.png",
								},
								{
									id: "6",
									src: "/products/tshirts/adidas-originals-sport-gray/image-6-480.png",
								},
							],
						},
						{
							id: "var-3",
							sku: "TSHRT-ADOS-WHT-S",
							price: 7790,
							oldPrice: 9790,
							stock: 5,
							attributes: { color: "White", size: "S" },
							href: {
								small:
									"/products/tshirts/adidas-originals-sport-white/image-1-240.png",
								medium:
									"/products/tshirts/adidas-originals-sport-white/image-1-480.png",
								large:
									"/products/tshirts/adidas-originals-sport-white/image-1-720.png",
								original:
									"/products/tshirts/adidas-originals-sport-white/image-1-original.png",
							},
							images: [
								{
									id: "1",
									src: "/products/tshirts/adidas-originals-sport-white/image-1-480.png",
								},
								{
									id: "2",
									src: "/products/tshirts/adidas-originals-sport-white/image-2-480.png",
								},
								{
									id: "3",
									src: "/products/tshirts/adidas-originals-sport-white/image-3-480.png",
								},
								{
									id: "4",
									src: "/products/tshirts/adidas-originals-sport-white/image-4-480.png",
								},
								{
									id: "5",
									src: "/products/tshirts/adidas-originals-sport-white/image-5-480.png",
								},
								{
									id: "6",
									src: "/products/tshirts/adidas-originals-sport-white/image-6-480.png",
								},
							],
						},
					],
				},
				{
					id: "25",
					title: "Ellesse T-Shirt",
					slug: "Ellesse T-Shirt",
					description: "Ellesse T-Shirt",
					currency: "$",

					brand: {
						id: "1",
						name: "Ellesse",
						slug: "Ellesse",
					},

					category: { id: "1", name: "T-Shirts", slug: "T-Shirts" },

					isAvailable: true,
					isNew: false,

					options: {
						color: ["Beige", "Black", "Blue", "Gray", "Milk", "Milk2", "White"],
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
							sku: "TSHRT-ES-BEGE-S",
							price: 7790,
							oldPrice: 9790,
							stock: 1,
							attributes: { color: "Beige", size: "S" },
							href: {
								small: "/products/tshirts/ellesse-beige/image-1-240.png",
								medium: "/products/tshirts/ellesse-beige/image-1-480.png",
								large: "/products/tshirts/ellesse-beige/image-1-720.png",
								original:
									"/products/tshirts/ellesse-beige/image-1-original.png",
							},
							images: [
								{
									id: "1",
									src: "/products/tshirts/ellesse-beige/image-1-480.png",
								},
								{
									id: "2",
									src: "/products/tshirts/ellesse-beige/image-2-480.png",
								},
								{
									id: "3",
									src: "/products/tshirts/ellesse-beige/image-3-480.png",
								},
								{
									id: "4",
									src: "/products/tshirts/ellesse-beige/image-4-480.png",
								},
								{
									id: "5",
									src: "/products/tshirts/ellesse-beige/image-5-480.png",
								},
							],
						},
						{
							id: "var-2",
							sku: "TSHRT-ES-BLK-S",
							price: 7790,
							oldPrice: 9790,
							stock: 4,
							attributes: { color: "Black", size: "S" },
							href: {
								small: "/products/tshirts/ellesse-black/image-1-240.png",
								medium: "/products/tshirts/ellesse-black/image-1-480.png",
								large: "/products/tshirts/ellesse-black/image-1-720.png",
								original:
									"/products/tshirts/ellesse-black/image-1-original.png",
							},
							images: [
								{
									id: "1",
									src: "/products/tshirts/ellesse-black/image-1-480.png",
								},
								{
									id: "2",
									src: "/products/tshirts/ellesse-black/image-2-480.png",
								},
								{
									id: "3",
									src: "/products/tshirts/ellesse-black/image-3-480.png",
								},
								{
									id: "4",
									src: "/products/tshirts/ellesse-black/image-4-480.png",
								},
								{
									id: "5",
									src: "/products/tshirts/ellesse-black/image-5-480.png",
								},
								{
									id: "6",
									src: "/products/tshirts/ellesse-black/image-6-480.png",
								},
							],
						},
						{
							id: "var-3",
							sku: "TSHRT-ES-BLUE-S",
							price: 7790,
							oldPrice: 9790,
							stock: 5,
							attributes: { color: "Blue", size: "S" },
							href: {
								small: "/products/tshirts/ellesse-blue/image-1-240.png",
								medium: "/products/tshirts/ellesse-blue/image-1-480.png",
								large: "/products/tshirts/ellesse-blue/image-1-720.png",
								original: "/products/tshirts/ellesse-blue/image-1-original.png",
							},
							images: [
								{
									id: "1",
									src: "/products/tshirts/ellesse-blue/image-1-480.png",
								},
								{
									id: "2",
									src: "/products/tshirts/ellesse-blue/image-2-480.png",
								},
								{
									id: "3",
									src: "/products/tshirts/ellesse-blue/image-3-480.png",
								},
								{
									id: "4",
									src: "/products/tshirts/ellesse-blue/image-4-480.png",
								},
								{
									id: "5",
									src: "/products/tshirts/ellesse-blue/image-5-480.png",
								},
							],
						},
						{
							id: "var-4",
							sku: "TSHRT-ES-MILK-S",
							price: 7790,
							oldPrice: 9790,
							stock: 0,
							attributes: { color: "Milk", size: "S" },
							href: {
								small: "/products/tshirts/ellesse-milk/image-1-240.png",
								medium: "/products/tshirts/ellesse-milk/image-1-480.png",
								large: "/products/tshirts/ellesse-milk/image-1-720.png",
								original: "/products/tshirts/ellesse-milk/image-1-original.png",
							},
							images: [
								{
									id: "1",
									src: "/products/tshirts/ellesse-milk/image-1-480.png",
								},
								{
									id: "2",
									src: "/products/tshirts/ellesse-milk/image-2-480.png",
								},
								{
									id: "3",
									src: "/products/tshirts/ellesse-milk/image-3-480.png",
								},
								{
									id: "4",
									src: "/products/tshirts/ellesse-milk/image-4-480.png",
								},
								{
									id: "5",
									src: "/products/tshirts/ellesse-milk/image-5-480.png",
								},
							],
						},
						{
							id: "var-5",
							sku: "TSHRT-ES-MILK2-S",
							price: 7790,
							oldPrice: 9790,
							stock: 0,
							attributes: { color: "Milk", size: "S" },
							href: {
								small: "/products/tshirts/ellesse-milk2/image-1-240.png",
								medium: "/products/tshirts/ellesse-milk2/image-1-480.png",
								large: "/products/tshirts/ellesse-milk2/image-1-720.png",
								original:
									"/products/tshirts/ellesse-milk2/image-1-original.png",
							},
							images: [
								{
									id: "1",
									src: "/products/tshirts/ellesse-milk2/image-1-480.png",
								},
								{
									id: "2",
									src: "/products/tshirts/ellesse-milk2/image-2-480.png",
								},
								{
									id: "3",
									src: "/products/tshirts/ellesse-milk2/image-3-480.png",
								},
								{
									id: "4",
									src: "/products/tshirts/ellesse-milk2/image-4-480.png",
								},
								{
									id: "5",
									src: "/products/tshirts/ellesse-milk2/image-5-480.png",
								},
							],
						},
						{
							id: "var-6",
							sku: "TSHRT-ES-WHT-S",
							price: 7790,
							oldPrice: 9790,
							stock: 4,
							attributes: { color: "White", size: "S" },
							href: {
								small: "/products/tshirts/ellesse-white/image-1-240.png",
								medium: "/products/tshirts/ellesse-white/image-1-480.png",
								large: "/products/tshirts/ellesse-white/image-1-720.png",
								original:
									"/products/tshirts/ellesse-white/image-1-original.png",
							},
							images: [
								{
									id: "1",
									src: "/products/tshirts/ellesse-white/image-1-480.png",
								},
								{
									id: "2",
									src: "/products/tshirts/ellesse-white/image-2-480.png",
								},
								{
									id: "3",
									src: "/products/tshirts/ellesse-white/image-3-480.png",
								},
								{
									id: "4",
									src: "/products/tshirts/ellesse-white/image-4-480.png",
								},
								{
									id: "5",
									src: "/products/tshirts/ellesse-white/image-5-480.png",
								},
							],
						},
					],
				},
				{
					id: "26",
					title: "Neverless Always T-Shirt",
					slug: "Neverless Always T-Shirt",
					description: "Neverless Always T-Shirt",
					currency: "$",

					brand: {
						id: "1",
						name: "Neverless",
						slug: "Neverless",
					},

					category: { id: "1", name: "T-Shirts", slug: "T-Shirts" },

					isAvailable: true,
					isNew: false,

					options: {
						color: ["Beige"],
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
							sku: "TSHRT-NL-BEGE-S",
							price: 7790,
							oldPrice: 9790,
							stock: 1,
							attributes: { color: "Beige", size: "S" },
							href: {
								small:
									"/products/tshirts/neverless-always-beige/image-1-240.png",
								medium:
									"/products/tshirts/neverless-always-beige/image-1-480.png",
								large:
									"/products/tshirts/neverless-always-beige/image-1-720.png",
								original:
									"/products/tshirts/neverless-always-beige/image-1-original.png",
							},
							images: [
								{
									id: "1",
									src: "/products/tshirts/neverless-always-beige/image-1-480.png",
								},
								{
									id: "2",
									src: "/products/tshirts/neverless-always-beige/image-2-480.png",
								},
								{
									id: "3",
									src: "/products/tshirts/neverless-always-beige/image-3-480.png",
								},
								{
									id: "4",
									src: "/products/tshirts/neverless-always-beige/image-4-480.png",
								},
								{
									id: "5",
									src: "/products/tshirts/neverless-always-beige/image-5-480.png",
								},
								{
									id: "6",
									src: "/products/tshirts/neverless-always-beige/image-6-480.png",
								},
							],
						},
					],
				},
				{
					id: "27",
					title: "Neverless T-Shirt",
					slug: "Neverless T-Shirt",
					description: "Neverless T-Shirt",
					currency: "$",

					brand: {
						id: "1",
						name: "Neverless",
						slug: "Neverless",
					},

					category: { id: "1", name: "T-Shirts", slug: "T-Shirts" },

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
							sku: "TSHRT-NL-BLK-S",
							price: 7790,
							oldPrice: 9790,
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
					id: "28",
					title: "Neverless Paradise T-Shirt",
					slug: "Neverless Paradise T-Shirt",
					description: "Neverless Paradise T-Shirt",
					currency: "$",

					brand: {
						id: "1",
						name: "Neverless",
						slug: "Neverless",
					},

					category: { id: "1", name: "T-Shirts", slug: "T-Shirts" },

					isAvailable: true,
					isNew: false,

					options: {
						color: ["Beige", "White"],
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
							sku: "TSHRT-NLPD-BEGE-S",
							price: 7790,
							oldPrice: 9790,
							stock: 1,
							attributes: { color: "Beige", size: "S" },
							href: {
								small:
									"/products/tshirts/neverless-paradise-beige/image-1-240.png",
								medium:
									"/products/tshirts/neverless-paradise-beige/image-1-480.png",
								large:
									"/products/tshirts/neverless-paradise-beige/image-1-720.png",
								original:
									"/products/tshirts/neverless-paradise-beige/image-1-original.png",
							},
							images: [
								{
									id: "1",
									src: "/products/tshirts/neverless-paradise-beige/image-1-480.png",
								},
								{
									id: "2",
									src: "/products/tshirts/neverless-paradise-beige/image-2-480.png",
								},
								{
									id: "3",
									src: "/products/tshirts/neverless-paradise-beige/image-3-480.png",
								},
								{
									id: "4",
									src: "/products/tshirts/neverless-paradise-beige/image-4-480.png",
								},
							],
						},
						{
							id: "var-2",
							sku: "TSHRT-NLPD-WHT-S",
							price: 7790,
							oldPrice: 9790,
							stock: 5,
							attributes: { color: "White", size: "S" },
							href: {
								small:
									"/products/tshirts/neverless-paradise-white/image-1-240.png",
								medium:
									"/products/tshirts/neverless-paradise-white/image-1-480.png",
								large:
									"/products/tshirts/neverless-paradise-white/image-1-720.png",
								original:
									"/products/tshirts/neverless-paradise-white/image-1-original.png",
							},
							images: [
								{
									id: "1",
									src: "/products/tshirts/neverless-paradise-white/image-1-480.png",
								},
								{
									id: "2",
									src: "/products/tshirts/neverless-paradise-white/image-2-480.png",
								},
								{
									id: "3",
									src: "/products/tshirts/neverless-paradise-white/image-3-480.png",
								},
								{
									id: "4",
									src: "/products/tshirts/neverless-paradise-white/image-4-480.png",
								},
							],
						},
					],
				},
				{
					id: "29",
					title: "Tommy Hilfiger T-Shirt",
					slug: "Tommy Hilfiger T-Shirt",
					description: "Tommy Hilfiger T-Shirt",
					currency: "$",

					brand: {
						id: "1",
						name: "Tommy Hilfiger",
						slug: "Tommy Hilfiger",
					},

					category: { id: "1", name: "T-Shirts", slug: "T-Shirts" },

					isAvailable: true,
					isNew: false,

					options: {
						color: ["Black", "Dark Blue", "White"],
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
							sku: "TSHRT-TH-BLK-S",
							price: 7790,
							oldPrice: 9790,
							stock: 1,
							attributes: { color: "Black", size: "S" },
							href: {
								small: "/products/tshirts/tommy-hilfiger-black/image-1-240.png",
								medium:
									"/products/tshirts/tommy-hilfiger-black/image-1-480.png",
								large: "/products/tshirts/tommy-hilfiger-black/image-1-720.png",
								original:
									"/products/tshirts/tommy-hilfiger-black/image-1-original.png",
							},
							images: [
								{
									id: "1",
									src: "/products/tshirts/tommy-hilfiger-black/image-1-480.png",
								},
								{
									id: "2",
									src: "/products/tshirts/tommy-hilfiger-black/image-2-480.png",
								},
								{
									id: "3",
									src: "/products/tshirts/tommy-hilfiger-black/image-3-480.png",
								},
								{
									id: "4",
									src: "/products/tshirts/tommy-hilfiger-black/image-4-480.png",
								},
								{
									id: "5",
									src: "/products/tshirts/tommy-hilfiger-black/image-5-480.png",
								},
								{
									id: "6",
									src: "/products/tshirts/tommy-hilfiger-black/image-6-480.png",
								},
							],
						},
						{
							id: "var-2",
							sku: "TSHRT-TH-DBLE-S",
							price: 7790,
							oldPrice: 9790,
							stock: 5,
							attributes: { color: "Dark Blue", size: "S" },
							href: {
								small:
									"/products/tshirts/tommy-hilfiger-dark-blue/image-1-240.png",
								medium:
									"/products/tshirts/tommy-hilfiger-dark-blue/image-1-480.png",
								large:
									"/products/tshirts/tommy-hilfiger-dark-blue/image-1-720.png",
								original:
									"/products/tshirts/tommy-hilfiger-dark-blue/image-1-original.png",
							},
							images: [
								{
									id: "1",
									src: "/products/tshirts/tommy-hilfiger-dark-blue/image-1-480.png",
								},
								{
									id: "2",
									src: "/products/tshirts/tommy-hilfiger-dark-blue/image-2-480.png",
								},
								{
									id: "3",
									src: "/products/tshirts/tommy-hilfiger-dark-blue/image-3-480.png",
								},
								{
									id: "4",
									src: "/products/tshirts/tommy-hilfiger-dark-blue/image-4-480.png",
								},
								{
									id: "5",
									src: "/products/tshirts/tommy-hilfiger-dark-blue/image-5-480.png",
								},
							],
						},
						{
							id: "var-3",
							sku: "TSHRT-TH-WHT-S",
							price: 7790,
							oldPrice: 9790,
							stock: 3,
							attributes: { color: "White", size: "S" },
							href: {
								small: "/products/tshirts/tommy-hilfiger-white/image-1-240.png",
								medium:
									"/products/tshirts/tommy-hilfiger-white/image-1-480.png",
								large: "/products/tshirts/tommy-hilfiger-white/image-1-720.png",
								original:
									"/products/tshirts/tommy-hilfiger-white/image-1-original.png",
							},
							images: [
								{
									id: "1",
									src: "/products/tshirts/tommy-hilfiger-white/image-1-480.png",
								},
								{
									id: "2",
									src: "/products/tshirts/tommy-hilfiger-white/image-2-480.png",
								},
								{
									id: "3",
									src: "/products/tshirts/tommy-hilfiger-white/image-3-480.png",
								},
								{
									id: "4",
									src: "/products/tshirts/tommy-hilfiger-white/image-4-480.png",
								},
								{
									id: "5",
									src: "/products/tshirts/tommy-hilfiger-white/image-5-480.png",
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
