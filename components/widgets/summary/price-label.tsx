interface IProps {
    label: string;
    value: string;
    currency: string;
}

export default function PriceLabel({ label, value, currency }: IProps) {
    return (
        <div className="flex justify-between tracking-wider leading-lg">
            <span>{label}</span>
            <p className="font-bold">
                {currency}
                {value}
            </p>
        </div>
    );
}
