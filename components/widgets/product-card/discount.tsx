import { IDiscountProps } from "@/types/components/widgets/product-card.types";

export default function Discount({ value }: IDiscountProps) {
    return (
        <div
            className="flex items-center justify-center h-4 px-[4px] rounded-full bg-[#F51E1E] font-mono font-bold text-sm text-white leading-base cursor-default"
            onClick={(e) => e.stopPropagation()}
        >
            {value}
        </div>
    );
}
