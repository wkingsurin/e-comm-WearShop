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
        <div className="flex flex-col gap-5 w-full">
            <DashboardWrapper
                pageTitle={
                    <div className="flex items-center gap-3">
                        <Link
                            href="/cart"
                            className="group/page-back flex items-center gap-3 font-bold text-md leading-base tracking-wider text-black/50 hover:no-underline cursor-pointer h-auto px-0 hover:text-black transition-brand"
                        >
                            <MoveLeft className="size-4 stroke-black/50 group-hover/page-back:stroke-black transition-brand" />{" "}
                            Back to Cart
                        </Link>
                        <p>x{items.length} Items </p>
                    </div>
                }
                className="min-h-[auto]"
            >
                <OrderItems items={items} isEmpty={totalItems === 0} />
            </DashboardWrapper>
            <div className="flex gap-3 w-full">
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
