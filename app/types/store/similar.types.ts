import { IProduct, IVariant } from "./ui.types";

export interface SimilarState {
	similarProducts: IProduct[];
	_hasHydrated: boolean;

	setHydrated: (state: boolean) => void;
	computeSimilarProducts: (
		currentProduct: IProduct,
		currentVariant: IVariant,
		allProducts: IProduct[]
	) => void;
}
