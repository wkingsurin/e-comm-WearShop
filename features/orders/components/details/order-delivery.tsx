import {
    IOrderCustomer,
    IOrderDelivery,
    IOrderShipping,
} from "@/types/store/orders.types";

interface IProps {
    customer: IOrderCustomer;
    shipping: IOrderShipping;
    delivery: IOrderDelivery;
}

export default function OrderDelivery({
    customer,
    shipping,
    delivery,
}: IProps) {
    return (
        <div className="flex flex-col gap-3 w-1/3 rounded-xl bg-[#D9D9D9]/25 p-4">
            <span className="uppercase">Delivery INFORMATION</span>
            <div className="flex flex-col gap-2">
                <p>{customer.name}</p>
                <p>
                    {shipping.address}, {shipping.city}, {shipping.postalCode}
                </p>
                <div className="flex gap-4">
                    <span>Method</span>
                    <p>{delivery.method}</p>
                </div>
            </div>
        </div>
    );
}
