import { ICartItem } from "../../store/cart.types";

export interface ICartItemProps {
	data: ICartItem;
	isFavorite: boolean;
}
