import { normalizePrice } from "@/lib/normalize-price";

interface IProps {
    label: string;
    value: number;
    currency: string;
}

export default function TotalPrice({ label, value, currency }: IProps) {
    return (
        <div className="flex justify-between font-medium tracking-wider leading-lg border-t-[1px] border-[#E5E7EB] pt-4 ">
            <span>{label}</span>
            <p className="font-bold">
                {currency}
                {normalizePrice(value)}
            </p>
        </div>
    );
}
