import { IOrder } from "@/types/account/orders/orders.types";
import Link from "next/link";
import DetailRow from "./detail-row";

interface IProps {
    order: IOrder;
}

export default function Details({ order }: IProps) {
    return (
        <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-4 bg-background rounded-xl p-4">
                <div className="flex flex-col gap-2 pb-4 border-b border-[#E5E7EB]">
                    <DetailRow
                        label="Order ID"
                        value={order.orderNumber.split("-")[1]}
                    />
                    <DetailRow
                        label="Delivery method"
                        value={order.delivery.method}
                    />
                    <DetailRow label="Estimated" value="26 - 30 May" />
                </div>
                <DetailRow
                    label="Total"
                    value={`${order.currency === "USD" ? "$" : order.currency} ${order.totals.total / 100 + "0"}`}
                    price
                />
            </div>
            <div className="grid grid-cols-2 gap-4">
                <Link
                    href={`/account/orders/${order.id}`}
                    className="flex items-center justify-center basis-1/2 h-10 bg-black font-mono text-white rounded-xl transition-brand"
                >
                    View order
                </Link>
                <Link
                    href="/categories"
                    className="flex items-center justify-center basis-1/2 h-10 bg-transparent font-mono text-black rounded-xl border border-black hover:bg-black hover:text-white transition-brand"
                >
                    Continue shopping
                </Link>
            </div>
        </div>
    );
}
