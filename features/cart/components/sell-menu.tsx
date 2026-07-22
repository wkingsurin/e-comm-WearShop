import { ICart } from "@/features/cart/types";
import Payments from "./payments";
import CartSummary from "./cart-summary";

export default function SellMenu({
    cart,
    payments,
}: {
    cart: ICart;
    payments: { id: string; label: string; image: string }[];
}) {
    return (
        <div
            className={`${cart.items.length === 0 && "hidden md:flex"} relative lg:sticky lg:top-[154px] flex flex-col gap-5 w-full md:w-[35%]`}
        >
            <CartSummary
                options={{
                    totalItems: cart.totalItems,
                    subtotal: cart.subtotal,
                    total: cart.total,
                    currency: "$",
                }}
            />
            <Payments payments={payments} />
        </div>
    );
}
