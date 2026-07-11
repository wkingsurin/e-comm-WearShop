import { Prisma } from "@/prisma/generated/prisma/client";

export interface ICartItem {
	id: string;
	cartItemId: string;

	title: string;
	slug: string;

	variantId: string;
	sku: string;

	price: number;
	oldPrice: number | null;

	image: string;

	selectedColor: { id: string; value: string };
	selectedSize: string;

	quantity: number;
	maxStock: number;

	brandName: string;
	categoryName: string;

	currency: string;

	createdAt: Date;
}

export interface ICart {
	items: ICartItem[];

	totalItems: number;
	subtotal: number;
	total: number;
}

export interface AddToCartInput {
	variantId: string;
	quantity: number;

	item: ICartItem;
}

export type CartItemWithVariant = CartWithRelations["items"][number];

export type CartWithRelations = Prisma.CartGetPayload<{
	include: {
		items: {
			include: {
				variant: {
					include: { product: true; color: { include: { images: true } } };
				};
			};
		};
	};
}>;
