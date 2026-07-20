"use client";

import { Button } from "@/components/ui/button";
import ShippingForm from "@/features/checkout/components/shipping-form/form";
import { useUIStore } from "@/lib/store/ui.store";
import { IOrderCustomer } from "@/types/account/orders/orders.types";
import { Clock4, MapPin, Truck, User } from "lucide-react";

export default function Shipping({
    shippingData,
    customerName,
}: {
    shippingData: {
        country: string;
        city: string;
        address: string;
        postalCode: string;
    };
    customerName: string;
}) {
    const openDialog = useUIStore((s) => s.openDialog);

    // const initialCheckout = {
    // 	address: "714 Green St, Apt 2B",
    // 	city: "San Francisco",
    // 	country: "United States",
    // 	postalCode: "CA 94108",
    // 	paymentMethod: null,
    // };

    const handleChange = () =>
        openDialog({
            title: "Change address",
            content: <ShippingForm initialValues={shippingData} />,
        });

    const hasAddress =
        shippingData.country &&
        shippingData.address &&
        shippingData.city &&
        shippingData.postalCode;

    return (
        <div className="flex flex-col gap-3 min-h-[94px] bg-white rounded-xl px-3 py-6 md:p-6 hover:shadow-[0_0_12px_-3px_rgba(0,0,0,.1)] transition-brand">
            <div className="flex items-center gap-3">
                <span className="tracking-wide font-medium text-black/75 uppercase">
                    Shipping
                </span>
                <div className="flex items-center gap-2 text-black/50 tracking-wider text-sm">
                    <Clock4 className="size-4 stroke-[1px]" />
                    <p>Standard delivery (3-5 days)</p>
                </div>
            </div>

            {hasAddress ? (
                <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-3">
                        <div className="flex items-center justify-center w-10 h-10 bg-[#F8F9FA] rounded-xl">
                            <User className="size-5 stroke-black/50" />
                        </div>
                        <p className="leading-base tracking-wider w-[calc(100%-40px-12px)]">
                            {customerName}
                        </p>
                    </div>
                    <div className="flex items-center gap-3">
                        <div className="flex items-center justify-center w-10 h-10 bg-[#F8F9FA] rounded-xl">
                            <MapPin className="size-5 stroke-black/50" />
                        </div>
                        <p className="leading-base tracking-wider w-[calc(100%-40px-12px)]">
                            {shippingData.address}, {shippingData.city},{" "}
                            {shippingData.postalCode}
                        </p>
                    </div>
                    <div className="flex items-center gap-3">
                        <div className="flex items-center justify-center w-10 h-10 bg-[#F8F9FA] rounded-xl">
                            <Truck className="size-5 stroke-black/50" />
                        </div>
                        <p className="leading-base tracking-wider w-[calc(100%-40px-12px)]">
                            26 - 30 May
                        </p>
                    </div>
                </div>
            ) : (
                <div className="flex flex-col items-start gap-2">
                    <span>Not yet address</span>
                    <Button
                        className="h-7 px-4 rounded-[6px] text-sm bg-transparent text-black border-black hover:text-white"
                        onClick={handleChange}
                    >
                        Add address
                    </Button>
                </div>
            )}
        </div>
    );
}
