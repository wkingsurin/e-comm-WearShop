import { IProduct } from "./ui.types";

export interface ICartItem
	extends Pick<IProduct, "id" | "title" | "slug" | "currency"> {
	cartItemId: string;

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
}
export interface CartState {
	cartItemsIds: Record<string, string>;
	cartItems: Record<string, ICartItem>;
	cartTotal: number;
	_hasHydrated: boolean;

	addItem: (product: ICartItem) => void;
	removeItem: (product: ICartItem) => void;
	incrementItem: (product: ICartItem) => void;
	decrementItem: (product: ICartItem) => void;
	setHydrated: (state: boolean) => void;
}
