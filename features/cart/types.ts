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

	selectedColor: string;
	selectedSize: string;

	quantity: number;
	maxStock: number;

	brandName: string;
	categorySlug: string;

	currency: string;
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
