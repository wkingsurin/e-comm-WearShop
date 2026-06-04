import ProductFace from "./product-face";
import ProductDescription from "./product-description";
import { IProductCardProps } from "@/app/types/components/widgets/product-card.types";

export default function ProductCard({
	data,
	type = "Default",
}: IProductCardProps) {
	return (
		<div
			className={`group/card relative flex flex-col gap-4 rounded-xl w-full p-[3px] border-[1px] border-transparent ${
				type === "Favourite" ? "md:w-1/3" : "md:w-1/4"
			} md:max-w-[305px] hover:border-black/25 hover:bg-[#F4F4F6] transition-brand`}
		>
			<span className="absolute top-3 left-3 z-10002 flex items-center justify-center w-[30px] h-[30px] rounded-[50%] bg-white text-base">
				{data.id}
			</span>
			<ProductFace data={data} type={type} />
			<ProductDescription data={data} />
		</div>
	);
}
