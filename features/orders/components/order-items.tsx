import { IOrder } from "@/types/account/orders/orders.types";
import OrderItem from "./order-item";
import { useFavorites } from "@/features/favorites/hooks/use-favorites";
import DummyItem from "./dummy-item";

export default function OrderItems({
    data,
    currency,
}: {
    data: IOrder["items"];
    currency: string;
}) {
    const { data: favorites = {} } = useFavorites();

    const LIMIT_AMOUNT = 4;

    const shortData =
        data.length > LIMIT_AMOUNT ? [...data].splice(0, LIMIT_AMOUNT - 1) : data;

    return (
        <div className="grid grid-cols-4 gap-3">
            {shortData.map((item) => {
                return (
                    <OrderItem
                        key={item.id}
                        data={item}
                        isFavorite={!!favorites[item.id]}
                        currency={currency}
                    />
                );
            })}
            {data.length > LIMIT_AMOUNT && (
                <DummyItem restItemsAmount={data.length - shortData.length} />
            )}
        </div>
    );
}
