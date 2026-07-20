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
        <div className={`${cart.items.length === 0 && 'hidden md:flex'} relative lg:sticky lg:top-[154px] flex flex-col gap-5 w-full md:w-[35%]`}>
            <div className="flex flex-col gap-4 min-h-[188px] bg-white rounded-xl px-3 py-6 lg:p-6 hover:shadow-[0_0_12px_-3px_rgba(0,0,0,.1)] transition-brand">
                <Totals itemsAmonut={cart.items.length} total={cart.total} subtotal={cart.subtotal} />
                <Button
                    onClick={() => {
                        router.push("/checkout");
                    }}
                    disabled={isPending || cart.items.length < 1}
                    className='bg-black h-[50px]'
                >
                    Proceed to checkout
                </Button>
            </div>
            <Payments payments={payments} />
        </div>
    );
}
