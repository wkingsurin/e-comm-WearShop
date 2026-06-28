import { ICartItem } from "@/features/cart/types";

export interface ICartItemProps {
	data: ICartItem;
	isFavorite: boolean;
}
