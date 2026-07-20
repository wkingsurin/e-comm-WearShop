import OrderItems from "./order-items";
import { IOrder } from "@/types/account/orders/orders.types";

export default function OrderContent({ data }: { data: IOrder }) {
    return (
        <div className="w-full md:w-3/4">
            <OrderItems data={data.items} currency={data.currency} />
        </div>
    );
}
