import {
    IOrderCustomer,
    IOrderDelivery,
    IOrderShipping,
} from "@/types/account/orders/orders.types";
import OrderStatus from "../order-status";
import { OrderStatus as StatusEnums } from "@/prisma/generated/prisma/enums";
import { MapPin, Truck, User } from "lucide-react";

interface IProps {
    customer: IOrderCustomer;
    shipping: IOrderShipping;
    delivery: IOrderDelivery;
    status: StatusEnums;
}

export default function OrderDelivery({
    status,
    customer,
    shipping,
    delivery,
}: IProps) {
    return (
        <div className="flex flex-col gap-4 w-full rounded-xl bg-[#F8F9FA] px-3 py-6 md:p-6">
            <div className="flex gap-3 items-center">
                <span className="uppercase font-medium text-black/75">
                    Delivery INFORMATION
                </span>
                <OrderStatus status={status} />
            </div>
            <div className="flex flex-col gap-2">
                <div className="flex items-center gap-3">
                    <div className="flex items-center justify-center w-10 h-10 bg-white rounded-xl">
                        <User className="size-5 stroke-black/50" />
                    </div>
                    <p className="leading-base tracking-wider w-[calc(100%-40px-12px)]">
                        {customer.name}
                    </p>
                </div>
                <div className="flex items-center gap-3">
                    <div className="flex items-center justify-center w-10 h-10 bg-white rounded-xl">
                        <MapPin className="size-5 stroke-black/50" />
                    </div>
                    <p className="leading-base tracking-wider w-[calc(100%-40px-12px)]">
                        {shipping.address}, {shipping.city},{" "}
                        {shipping.postalCode}
                    </p>
                </div>
                <div className="flex items-center gap-3">
                    <div className="flex items-center justify-center w-10 h-10 bg-white rounded-xl">
                        <Truck className="size-5 stroke-black/50" />
                    </div>
                    <p className="leading-base tracking-wider w-[calc(100%-40px-12px)]">
                        26 - 30 May
                    </p>
                </div>
            </div>
        </div>
    );
}
