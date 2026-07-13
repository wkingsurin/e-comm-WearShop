import { Button } from "@/components/ui/button";
import { ICart } from "@/features/cart/types";
import { useUpdateCheckout } from "@/features/checkout/hooks/use-update-checkout";
import { useRouter } from "next/navigation";
import Payments from "./payments";
import Totals from "./totals";

export default function SellMenu({
    cart,
    payments,
}: {
    cart: ICart;
    payments: { id: string; label: string; image: string }[];
}) {
    const { isPending } = useUpdateCheckout();

    const router = useRouter();

    return (
        <div className="sticky top-[154px] flex flex-col gap-5 min-w-[320px]">
            <div className="flex flex-col gap-4 min-h-[188px] bg-white rounded-xl  p-6 hover:shadow-[0_0_12px_-3px_rgba(0,0,0,.1)] transition-brand">
                <Totals total={cart.total} subtotal={cart.subtotal} />
                <Button
                    onClick={() => {
                        router.push("/checkout");
                    }}
                    disabled={isPending || cart.items.length < 1}
                >
                    Proceed to checkout
                </Button>
            </div>
            <Payments payments={payments} />
        </div>
    );
}
