interface IProps {
    label: string;
    value: number;
    type?: "row" | "heading";
}

export default function TotalsRow({ label, value, type = "row" }: IProps) {
    const style =
        type === "heading"
            ? "flex justify-between font-medium tracking-wider leading-lg font-medium text-wider pt-4 border-t-[1px] border-[#E5E7EB]"
            : "flex justify-between font-medium tracking-wider leading-lg";

    return (
        <div className={`${style}`}>
            <span>{label}</span>
            <p className="font-bold">${value > 1000 ? value / 100 + "0" : value + ".00"}</p>
        </div>
    );
}
