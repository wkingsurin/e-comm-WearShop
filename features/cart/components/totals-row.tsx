interface IProps {
    label: string;
    value: number;
    type?: "row" | "heading";
}

export default function TotalsRow({ label, value, type = "row" }: IProps) {
    const style =
        type === "heading"
            ? "flex justify-between font-medium tracking-wider leading-lg text-xl font-medium text-wider pb-4 border-b-[1px] border-[#E5E7EB]"
            : "flex justify-between font-medium tracking-wider leading-lg";

    return (
        <div className={`${style}`}>
            <span>{label}</span>
            <p>$ {value > 1000 ? value / 100 + "0" : value + ".00"}</p>
        </div>
    );
}
