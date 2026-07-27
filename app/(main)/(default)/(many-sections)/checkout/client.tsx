"use client";

import { useCart } from "@/features/cart/hooks/use-cart";
import { EMPTY_CART } from "@/features/cart/constants";
import Order from "@/features/checkout/components/order";
import OrderReturn from "@/features/orders/components/details/order-return";
import { useCheckout } from "@/features/checkout/hooks/use-checkout";
import { EMPTY_CHECKOUT } from "@/features/checkout/constants";
import CheckoutSummary from "@/features/checkout/components/checkout-summary";
import CheckoutSkeleton from "@/features/checkout/components/skeleton/checkout-skeleton";
import BackButton from "@/components/shared/back-button";
import SectionTitle from "@/components/shared/section-title";

export default function CheckoutClinet() {
    const { data: cart = EMPTY_CART, isPending: isPendingCart } = useCart();
    const { data: checkout = EMPTY_CHECKOUT, isPending: isPendingCheckout } =
        useCheckout();

    if (isPendingCart || isPendingCheckout) {
        return <CheckoutSkeleton />;
    }

    return (
        <div className="flex flex-col gap-5">
            <div className="flex items-center gap-3 px-3 md:px-0!">
                <BackButton />
                <SectionTitle>Review & Place order</SectionTitle>
            </div>
            <div className="relative flex flex-col md:flex-row items-start gap-5">
                <Order items={cart.items} totalItems={cart.totalItems} />
                <div className="relative md:sticky md:top-[154px] flex flex-col gap-4 w-full md:w-[35%]">
                    <CheckoutSummary
                        options={{
                            totalItems: cart.totalItems,
                            subtotal: cart.subtotal,
                            total: cart.total,
                            currency: "$",
                        }}
                    />
                    <OrderReturn
                        initialValues={{
                            country: checkout.country,
                            city: checkout.city,
                            address: checkout.address,
                            postalCode: checkout.postalCode,
                        }}
                    />
                </div>
            </div>
        </div>
    );
}
