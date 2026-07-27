"use client";

import SectionTitle from "@/components/shared/section-title";
import Details from "@/features/checkout/components/success/details";
import Status from "@/features/checkout/components/success/status";
import { EMPTY_ORDER } from "@/features/orders/constants";
import { useOrder } from "@/features/orders/hooks/use-order";

interface IProps {
    orderId: string;
}

export default function SuccessClient({ orderId }: IProps) {
    const { data: order = EMPTY_ORDER } = useOrder(orderId);

    return (
        <div className="flex items-center justify-center">
            <div className="flex flex-col items-center gap-5 w-full md:w-auto">
                <SectionTitle>Thank you for purchase</SectionTitle>
                <div className="flex flex-col gap-10 w-full md:w-[420px] bg-white rounded-xl px-3 py-6 md:p-6">
                    <Status />
                    <Details order={order} />
                </div>
            </div>
        </div>
    );
}
