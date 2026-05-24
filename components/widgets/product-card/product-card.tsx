import { IProduct } from "@/lib/store/ui.store";
import ProductFace from "./product-face";
import ProductDescription from "./product-description";

interface IProps {
	data: IProduct;
	type?: "Default" | "Favourite";
}

export default function ProductCard({ data, type = "Default" }: IProps) {
	return (
		<div
			className={`group/card flex flex-col gap-4 rounded-xl w-full ${
				type === "Favourite" ? "md:w-1/3" : "md:w-1/4"
			} md:max-w-[305px]`}
		>
			<ProductFace data={data} type={type} />
			<ProductDescription data={data} />
		</div>
	);
}
