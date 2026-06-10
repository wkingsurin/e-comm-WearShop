import { IProduct } from "./ui.types";

export interface ProductPageState {
	product: IProduct | null;
	_hasHydrated: boolean;

	setHydrated: (state: boolean) => void;
	setProduct: (product: IProduct | null) => void;
}
