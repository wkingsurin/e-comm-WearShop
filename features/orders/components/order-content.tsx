import OrderItems from "./order-items";
import OrderInfo from "./order-info";
import { IOrder } from "@/types/account/orders/orders.types";

export default function OrderContent({ data }: { data: IOrder }) {
    return (
        <>
            <OrderInfo
                data={{ delivery: data.delivery, totals: data.totals }}
            />
            <OrderItems data={data.items} currency={data.currency} />
        </>
    );
}
