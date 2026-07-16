import { useFavorites } from "@/features/favorites/hooks/use-favorites";
import { IOrder, IOrderItem } from "@/types/account/orders/orders.types";
import OrderItem from "./order-item";

interface IProps {
    items: IOrderItem[];
    currency: IOrder["currency"];
}

export default function OrderProducts({ items, currency }: IProps) {
    const { data: favorites = {} } = useFavorites();

    return (
        <div className="flex flex-col gap-4 w-full rounded-xl bg-[#F8F9FA] p-4">
            <span className="uppercase font-medium text-black/75">
                Products
            </span>
            <div className="flex flex-col gap-3 [&>*:not(:last-child)]:border-b [&>*:not(:last-child)]:border-[#E5E7EB] [&>*:not(:last-child)]:pb-3">
                {items.map((item) => {
                    const colorSize =
                        item.selectedSize.toLowerCase() === "one-size"
                            ? item.selectedColor
                            : `${item.selectedColor} · ${item.selectedSize}`;

                    return (
                        <OrderItem
                            key={item.id}
                            data={{
                                item,
                                colorSize,
                                currency,
                                isFavortie: !!favorites[item.productId],
                            }}
                        />
                    );
                })}
            </div>
        </div>
    );
}
