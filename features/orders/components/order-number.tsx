import { IOrder } from "@/types/account/orders/orders.types";

export default function OrderNumber({
    orderNumber,
}: {
    orderNumber: IOrder["orderNumber"];
}) {
    return (
        <span className="flex items-center font-mono font-medium text-sm text-black/25">
            {orderNumber.split('-')[1]}
        </span>
    );
}
