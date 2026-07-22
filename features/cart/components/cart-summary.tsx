import Summary from "@/components/widgets/summary/summary";
import SummaryButton from "@/components/widgets/summary/summary-button";
import { useUpdateCheckout } from "@/features/checkout/hooks/use-update-checkout";
import { useRouter } from "next/navigation";

interface ICartSummary {
    options: {
        totalItems: number;
        subtotal: number;
        total: number;
        currency: string;
    };
}

export default function CartSummary({ options }: ICartSummary) {
    const { totalItems, subtotal, total, currency } = options;

    const { isPending } = useUpdateCheckout();

    const router = useRouter();

    const prices: { label: string; value: number }[] = [
        { label: `Items (${totalItems})`, value: subtotal },
        { label: `Shipping & Service`, value: 510 },
        { label: `Discount`, value: 12 },
        { label: `Tax`, value: 0 },
    ];

    return (
        <Summary
            title="Cart summary"
            prices={prices}
            currency={currency}
            totalPrice={total}
        >
            <SummaryButton
                text="Procced to checkout"
                status={isPending}
                onClick={() => router.push("/checkout")}
            />
        </Summary>
    );
}
