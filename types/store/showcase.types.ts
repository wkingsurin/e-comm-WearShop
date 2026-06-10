import { IProduct } from "./ui.types";

export interface ShowcaseState {
	products: IProduct[] | [];
	_hasHydrated: boolean;

	setHydrated: (state: boolean) => void;
	setProducts: (updatedProducts: IProduct[]) => void;
}
