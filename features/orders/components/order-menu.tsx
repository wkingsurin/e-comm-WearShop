import OrderNumber from "./order-number";
import OrderStatus from "./order-status";
import { MoveRight } from "lucide-react";
import Link from "next/link";
import { IOrder } from "@/types/account/orders/orders.types";

export default function OrderMenu({
    data,
}: {
    data: IOrder;
    toggleOrder: () => void;
}) {
    return (
        <div className="flex flex-col justify-between w-1/4">
            <div className="flex items-center gap-3">
                <OrderStatus status={data.status} />
                <OrderNumber orderNumber={data.orderNumber} />
            </div>
            <Link
                href={`/account/orders/${data.id}`}
                className="group/order-back flex gap-2 items-center text-black/50 text-md font-bold hover:text-black transition-brand"
            >
                View details{" "}
                <MoveRight className="size-4 stroke-black/50 group-hover/order-back:stroke-black transition-brand" />
            </Link>
        </div>
    );
}
