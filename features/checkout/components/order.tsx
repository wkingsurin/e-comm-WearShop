import DashboardWrapper from "@/components/shared/dashboard-wrapper";
import OrderItems from "./order-items";
import Shipping from "../../../features/checkout/components/shipping";
import { ICartItem } from "@/features/cart/types";
import PaymentSelector from "./payment/payment-selector";
import { useCheckout } from "@/features/checkout/hooks/use-checkout";
import { EMPTY_CHECKOUT } from "@/features/checkout/constants";
import DeliverySelector from "./delivery/delivery-selector";
import Link from "next/link";
import { MoveLeft } from "lucide-react";
import useUserProfile from "@/features/profile/hooks/use-user-profile";
import { EMPTY_USER_PROFILE } from "@/features/profile/constants";

export default function Order({
    items,
    totalItems,
}: {
    items: ICartItem[];
    totalItems: number;
}) {
    const { data: checkout = EMPTY_CHECKOUT } = useCheckout();
    const { data: profile = EMPTY_USER_PROFILE } = useUserProfile();

    console.log(`[profile]:`, profile);

    const defaultAddress: {
        country: string;
        city: string;
        address: string;
        postalCode: string;
    } = {
        country: profile.address.country,
        city: profile.address.city,
        address: `${profile.address.street}, ${profile.address.city}, ${profile.address.postalCode}`,
        postalCode: profile.address.postalCode,
    };

    return (
        <div className="flex flex-col gap-5 w-full md:w-[65%]">
            <DashboardWrapper className="min-h-[auto]">
                <OrderItems items={items} isEmpty={totalItems === 0} />
            </DashboardWrapper>
            <div className="flex flex-col gap-5 md:flex-row md:gap-3 w-full">
                <PaymentSelector method={checkout.paymentMethod} />
                <DeliverySelector method={checkout.deliveryMethod} />
            </div>
            <Shipping
                shippingData={checkout.address ? checkout : defaultAddress}
                customerName={checkout.customerName}
            />
        </div>
    );
}
