interface IProps {
    label: string;
    value: string;
    price?: boolean;
}

export default function DetailRow({ label, value, price }: IProps) {
    return (
        <div className="flex justify-between gap-4">
            <span className="text-black/75 tracking-wider leading-md">
                {label}:
            </span>
            <p
                className={`text-black tracking-wide leading-md ${price ? "font-bold" : "font-medium"}`}
            >
                {value}
            </p>
        </div>
    );
}
