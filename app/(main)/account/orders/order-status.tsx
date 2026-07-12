import { ORDER_STATUS } from "@/features/orders/constants";
import { OrderStatus as Status } from "@/prisma/generated/prisma/enums";

export default function OrderStatus({ status }: { status: Status }) {
    const item = ORDER_STATUS[status];

    return (
        <span
            className={`flex items-center h-[30px] px-3 rounded-[50px] ${item.color} text-white tracking-wide leading-base`}
        >
            {item.label}
        </span>
    );
}
