import { IProduct } from "@/types/store/ui.types";

export interface ISizesProps {
	product: IProduct;
	onChangeSize: (value: string) => void;
	initialSize: string;
}
