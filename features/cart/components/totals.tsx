import TotalsRow from "./totals-row";

interface IProps {
    total: number;
    subtotal: number;
}

export default function Totals({ total, subtotal }: IProps) {
    return (
        <>
            <TotalsRow label="Total" value={total} type="heading" />
            <div className="flex flex-col gap-3">
                <TotalsRow label="Subtotal" value={subtotal} />
                <TotalsRow label="Shipping & Service" value={0.0} />
            </div>
        </>
    );
}
