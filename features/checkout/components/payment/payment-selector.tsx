"use client";

import PaymentMethod from "./payment-method";
import { ICheckout } from "@/features/checkout/types";
import { useUpdateCheckout } from "@/features/checkout/hooks/use-update-checkout";
import { PaymentMethod as PAYMENT_METHOD } from "@/prisma/generated/prisma/enums";

export default function PaymentSelector({
    method,
}: {
    method: ICheckout["paymentMethod"];
}) {
    const { mutate: updateCheckout } = useUpdateCheckout();

    const payments = [
        {
            id: "1",
            label: "PayPal",
            value: PAYMENT_METHOD.PAYPAL,
            image: "./payments/image-pay-1.png",
        },
        {
            id: "2",
            label: "Visa / Mastercard",
            value: PAYMENT_METHOD.CARD,
            image: "./payments/image-pay-card.png",
        },
        {
            id: "3",
            label: "Cash",
            value: PAYMENT_METHOD.CASH,
            image: "./payments/image-pay-3.png",
        },
    ];

    return (
        <div className="flex flex-col gap-4 w-1/2 min-h-[94px] bg-white rounded-xl p-6 hover:shadow-[0_0_12px_-3px_rgba(0,0,0,.1)] transition-brand">
            <span className="tracking-wide font-medium text-black/75 uppercase">
                Payment method
            </span>
            <div className="flex flex-col gap-2">
                {payments.map((item) => {
                    const selected = item.value === method;

                    return (
                        <PaymentMethod
                            key={item.id}
                            item={item}
                            checked={selected}
                            onClick={() =>
                                updateCheckout({ paymentMethod: item.value })
                            }
                        />
                    );
                })}
            </div>
        </div>
    );
}
