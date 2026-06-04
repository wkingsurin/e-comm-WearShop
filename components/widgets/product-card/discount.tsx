import { IDiscountProps } from "@/app/types/components/widgets/product-card.types";

export default function Discount({ value }: IDiscountProps) {
	return (
		<div
			className="absolute bottom-3 left-3 flex items-center justify-center rounded-xl bg-[#EC0404]/50 font-medium text-black/75 h-[30px] px-3 backdrop-blur-[12px] cursor-default"
			onClick={(e) => e.stopPropagation()}
		>
			{value}
		</div>
	);
}
