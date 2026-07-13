import { IDiscountProps } from "@/types/components/widgets/product-card.types";

export default function Discount({ value }: IDiscountProps) {
    return (
        <div
            className="flex items-center justify-center h-5 px-[6px] py-[2px] rounded-xl bg-[#F51E1E] font-bold text-sm text-white tracking-wider  cursor-default"
            onClick={(e) => e.stopPropagation()}
        >
            {value}
        </div>
    );
}
