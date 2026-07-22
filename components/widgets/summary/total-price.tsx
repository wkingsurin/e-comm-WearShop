import { getItemPrices } from "@/lib/money/get-item-price";

interface IProps {
    label: string;
    value: number;
}

export default function TotalPrice({ label, value }: IProps) {
    const { formattedPrice } = getItemPrices(value, value);

    return (
        <div className="flex justify-between font-medium tracking-wider leading-lg border-t-[1px] border-[#E5E7EB] pt-4 ">
            <span>{label}</span>
            <p className="font-bold">{formattedPrice}</p>
        </div>
    );
}
