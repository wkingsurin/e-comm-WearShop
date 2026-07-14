import TotalsRow from "./totals-row";

interface IProps {
    itemsAmonut: number;
    total: number;
    subtotal: number;
}

export default function Totals({ itemsAmonut, total, subtotal }: IProps) {
    return (
        <>
            <span className="text-black/75 font-medium uppercase tracking-wide leading-lg">
                Cart price
            </span>
            <div className="flex flex-col gap-3">
                <TotalsRow label={`Items (${itemsAmonut})`} value={subtotal} />
                <TotalsRow label="Shipping & Service" value={0} />
                <TotalsRow label="Discount" value={0} />
                <TotalsRow label="Tax" value={0} />
            </div>
            <TotalsRow label="Total" value={total} type="heading" />
        </>
    );
}
