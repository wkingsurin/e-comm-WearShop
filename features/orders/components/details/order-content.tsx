import { IOrder } from "@/types/account/orders/orders.types";
import OrderDelivery from "./order-delivery";
import OrderPayment from "./order-payment";
import OrderProducts from "./order-products";
import OrderSummary from "./order-summary";
import OrderTimeline from "./order-timeline";

interface IProps {
    order: IOrder;
}

export default function OrderContent({ order }: IProps) {
    return (
        <div className="flex flex-col gap-5">
            <div className="flex gap-5">
                <OrderDelivery
                    customer={order.customer}
                    delivery={order.delivery}
                    shipping={order.shipping}
                />
                <OrderPayment payment={order.payment} />
                <OrderTimeline />
            </div>
            <div className="flex gap-5">
                <OrderProducts items={order.items} currency={order.currency} />
                <OrderSummary totals={order.totals} />
            </div>
        </div>
    );
}
