import { ICartItem } from "@/features/cart/types";
import OrderItem from "./order-item";

export default function OrderItems({
    items,
    isEmpty,
}: {
    items: ICartItem[];
    isEmpty: boolean;
}) {
    return (
        !isEmpty && (
            <div
                className={`flex gap-3 ${items.length > 5 && "justify-center"}`}
            >
                {items.map((item) => (
                    <OrderItem key={item.id} item={item} />
                ))}
            </div>
        )
    );
}
