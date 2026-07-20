import OrderContent from "./order-content";
import OrderMenu from "./order-menu";
import { IOrderProps } from "@/types/account/orders/orders.types";

export default function Order({ data }: IOrderProps) {
    return (
        <div
            className={`flex flex-col md:flex-row gap-3 w-full px-3 py-4 md:p-4 rounded-lg bg-[#F8F9FA] transition-brand`}
        >
            <OrderMenu data={data} />
            <OrderContent data={data} />
        </div>
    );
}
