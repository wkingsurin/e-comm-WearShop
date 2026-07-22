import PriceLabel from "./price-label";

interface IProps {
    prices: { label: string; value: number }[];
    currency: string;
}

export default function PriceList({ prices }: IProps) {
    return (
        <div className="flex flex-col gap-3">
            {prices.map((price) => {
                return (
                    <PriceLabel
                        key={price.label}
                        label={price.label}
                        value={price.value}
                    />
                );
            })}
        </div>
    );
}
