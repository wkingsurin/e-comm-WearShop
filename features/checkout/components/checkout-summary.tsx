import Summary from "@/components/widgets/summary/summary";
import SummaryButton from "@/components/widgets/summary/summary-button";
import { useCreateOrder } from "@/features/orders/hooks/use-create-order";

interface ICheckoutSummary {
    options: {
        totalItems: number;
        subtotal: number;
        total: number;
        currency: string;
    };
}

export default function CheckoutSummary({ options }: ICheckoutSummary) {
    const { totalItems, subtotal, total, currency } = options;

    const { mutate, isPending } = useCreateOrder();

    const prices: { label: string; value: number }[] = [
        { label: `Items (${totalItems})`, value: subtotal },
        { label: `Shipping & Service`, value: 0 },
        { label: `Discount`, value: 0 },
        { label: `Tax`, value: 0 },
    ];

    return (
        <Summary
            title="Checkout summary"
            prices={prices}
            currency={currency}
            totalPrice={total}
        >
            <SummaryButton
                text="Place order"
                disabled={isPending}
                terms
                onClick={() => mutate()}
            />
        </Summary>
    );
}
