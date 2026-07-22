import Summary from "@/components/widgets/summary/summary";
import SummaryButton from "@/components/widgets/summary/summary-button";
import { OrderStatus } from "@/prisma/generated/prisma/enums";
import { IOrderTotals } from "@/types/account/orders/orders.types";

interface IProps {
    status: OrderStatus;
    currency: string;
    totals: IOrderTotals;
    itemsAmount: number;
}

export default function OrderSummary({
    status,
    currency,
    itemsAmount,
    totals,
}: IProps) {
    const prices: { label: string; value: number }[] = [
        { label: `Items (${itemsAmount})`, value: totals.items },
        { label: `Shipping & Service`, value: 510 },
        { label: `Discount`, value: 12 },
        { label: `Tax`, value: 0 },
    ];

    return (
        <Summary
            title="Price details"
            prices={prices}
            currency={currency}
            totalPrice={totals.total}
        >
            {(status === OrderStatus.CANCELLED ||
                status === OrderStatus.DELIVERED) && (
                <SummaryButton text="Reorder" onClick={() => {}} />
            )}
        </Summary>
    );
}
