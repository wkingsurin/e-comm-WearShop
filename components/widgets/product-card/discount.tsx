import { IDiscountProps } from "@/app/types/components/widgets/product-card.types";

export default function Discount({ value }: IDiscountProps) {
	return (
		<div
			className="absolute z-2 bottom-3 left-3 flex items-center justify-center h-5 px-[6px] py-[2px] rounded-xl bg-[#F51E1E] font-medium text-md text-white backdrop-blur-[12px] cursor-default"
			onClick={(e) => e.stopPropagation()}
		>
			{value}
		</div>
	);
}
