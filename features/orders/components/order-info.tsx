import { IOrderDelivery, IOrderTotals } from "@/types/store/orders.types";

interface IProps {
    data: { delivery: IOrderDelivery; totals: IOrderTotals };
}

export default function OrderInfo({ data }: IProps) {
    return (
        <div className="flex flex-col gap-4">
            <div className="flex gap-4">
                <span className="font-normal tracking-wider leading-lg">
                    Delivery method:
                </span>
                <p className="font-mono capitalize leading-lg">
                    {data.delivery.method}
                </p>
            </div>
            <div className="flex justify-between">
                <span className="font-normal tracking-wider leading-lg">
                    Goods:
                </span>
                <span className="font-medium tracking-wider leading-lg">
                    $ {data.totals.total / 100 + "0"}
                </span>
            </div>
        </div>
    );
}
