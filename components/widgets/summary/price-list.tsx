import { normalizePrice } from "@/lib/normalize-price";
import PriceLabel from "./price-label";

interface IProps {
    prices: { label: string; value: number }[];
    currency: string;
}

export default function PriceList({ prices, currency }: IProps) {
    return (
        <div className="flex flex-col gap-3">
            {prices.map((price) => {
                return (
                    <PriceLabel
                        key={price.label}
                        label={price.label}
                        value={normalizePrice(price.value)}
                        currency={currency}
                    />
                );
            })}
        </div>
    );
}
