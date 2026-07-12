import { IOrder } from "@/types/store/orders.types";
import OrderItems from "./order-items";
import OrderInfo from "./order-info";

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
