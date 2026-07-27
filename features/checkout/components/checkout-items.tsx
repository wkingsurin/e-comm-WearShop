import { ICartItem } from "@/features/cart/types";
import CheckoutItem from "./checkout-item";

export default function CheckoutItems({
    items,
    isEmpty,
}: {
    items: ICartItem[];
    isEmpty: boolean;
}) {
    return (
        !isEmpty && (
            <div className="grid grid-cols-3 md:grid-cols-5 gap-3">
                {items.map((item) => (
                    <CheckoutItem key={item.id} item={item} />
                ))}
            </div>
        )
    );
}
