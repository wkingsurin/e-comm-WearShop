"use client";

import { ICheckout } from "@/features/checkout/types";
import { useUpdateCheckout } from "@/features/checkout/hooks/use-update-checkout";
import { DeliveryMethod as DELIVERY_METHOD } from "@/prisma/generated/prisma/enums";
import DeliveryMethod from "./delivery-method";

export default function DeliverySelector({
    method,
}: {
    method: ICheckout["deliveryMethod"];
}) {
    const { mutate: updateCheckout } = useUpdateCheckout();

    const payments = [
        {
            id: "1",
            label: "Courier",
            value: DELIVERY_METHOD.COURIER,
            image: "./payments/image-pay-1.png",
        },
        {
            id: "2",
            label: "Pick up",
            value: DELIVERY_METHOD.PICKUP,
            image: "./payments/image-pay-card.png",
        },
        {
            id: "3",
            label: "Post",
            value: DELIVERY_METHOD.POST,
            image: "./payments/image-pay-3.png",
        },
    ];

    return (
        <div className="flex flex-col gap-4 w-full md:w-1/2 min-h-[94px] bg-white rounded-xl px-3 py-6 md:p-6 hover:shadow-[0_0_12px_-3px_rgba(0,0,0,.1)] transition-brand">
            <span className="tracking-wide font-medium text-black/75 uppercase">
                Delivery method
            </span>
            <div className="flex flex-col gap-2">
                {payments.map((item) => {
                    const selected = item.value === method;

                    return (
                        <DeliveryMethod
                            key={item.id}
                            item={item}
                            checked={selected}
                            onClick={() =>
                                updateCheckout({ deliveryMethod: item.value })
                            }
                        />
                    );
                })}
            </div>
        </div>
    );
}
