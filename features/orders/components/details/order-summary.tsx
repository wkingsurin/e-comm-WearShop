import { Button } from "@/components/ui/button";
import { OrderStatus } from "@/prisma/generated/prisma/enums";
import { IOrderTotals } from "@/types/account/orders/orders.types";

interface IProps {
    status: OrderStatus;
    currency: string;
    totals: IOrderTotals;
    itemsAmount: number;
}

export default function OrderSummary({
    status,
    currency,
    itemsAmount,
    totals,
}: IProps) {
    const { items, delivery, discount, total } = totals;

    return (
        <div className="flex flex-col gap-4 w-full bg-white rounded-xl px-3 py-6 md:p-6 hover:shadow-[0_0_12px_-3px_rgba(0,0,0,.1)] transition-brand">
            <span className="text-black/75 font-medium uppercase tracking-wide leading-lg">
                Your order
            </span>
            <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-3 pb-4 border-b-[1px] border-[#E5E7EB]">
                    <div className="flex justify-between items-center">
                        <span className="leading-lg tracking-wider">
                            Items ({itemsAmount})
                        </span>
                        <p className="font-bold tracking-wider leading-lg">
                            {currency === "USD" ? "$" : currency}
                            {items > 0 ? items / 100 + "0" : items}
                        </p>
                    </div>
                    <div className="flex justify-between items-center">
                        <span className="leading-lg tracking-wider">
                            Shipping & Service
                        </span>
                        <p className="font-bold tracking-wider leading-lg">
                            {currency === "USD" ? "$" : currency}
                            {delivery > 0 ? delivery / 100 + "0" : delivery}
                        </p>
                    </div>
                    <div className="flex justify-between items-center">
                        <span className="leading-lg tracking-wider">
                            Discount
                        </span>
                        <p className="font-bold tracking-wider leading-lg">
                            {currency === "USD" ? "$" : currency}
                            {discount > 0 ? discount / 100 + "0" : discount}
                        </p>
                    </div>
                    <div className="flex justify-between items-center">
                        <span className="leading-lg tracking-wider">Tax</span>
                        <p className="font-bold tracking-wider leading-lg">
                            {currency === "USD" ? "$" : currency}0
                        </p>
                    </div>
                </div>
                <div className="flex justify-between items-center">
                    <span className="leading-lg font-medium tracking-wider">
                        Total price
                    </span>
                    <p className="font-bold tracking-wider leading-lg">
                        {currency === "USD" ? "$" : currency}
                        {total / 100 + "0"}
                    </p>
                </div>
            </div>
            {(status === OrderStatus.CANCELLED ||
                status === OrderStatus.DELIVERED) && (
                <Button className="h-[50px] bg-black">Reorder</Button>
            )}
        </div>
    );
}
