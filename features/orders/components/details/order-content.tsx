import { IOrder } from "@/types/account/orders/orders.types";
import OrderDelivery from "./order-delivery";
import OrderProducts from "./order-products";

interface IProps {
    order: IOrder;
}

export default function OrderContent({ order }: IProps) {
    return (
        <div className="flex flex-col gap-5">
            <OrderDelivery
                customer={order.customer}
                delivery={order.delivery}
                shipping={order.shipping}
                status={order.status}
            />
            <OrderProducts items={order.items} currency={order.currency} />
        </div>
    );
}
