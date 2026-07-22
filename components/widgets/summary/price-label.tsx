import { getItemPrices } from "@/lib/money/get-item-price";

interface IProps {
    label: string;
    value: number;
}

export default function PriceLabel({ label, value }: IProps) {
    const { formattedPrice } = getItemPrices(value, value);

    return (
        <div className="flex justify-between tracking-wider leading-lg">
            <span>{label}</span>
            <p className="font-bold">
                {formattedPrice}
            </p>
        </div>
    );
}
