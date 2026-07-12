import { IOrderPayment } from "@/types/account/orders/orders.types";

interface IProps {
    payment: IOrderPayment;
}

export default function OrderPayment({ payment }: IProps) {
    return (
        <div className="flex flex-col gap-3 w-1/3 rounded-xl bg-[#D9D9D9]/25 p-4">
            <span className="uppercase">Payment</span>
            <div>
                <p>{payment.method}</p>
                <p>{payment.isPaid ? "Successfully paid" : "Not paid"}</p>
            </div>
        </div>
    );
}
