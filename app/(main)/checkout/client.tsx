"use client";

import { useCart } from "@/features/cart/hooks/use-cart";
import { EMPTY_CART } from "@/features/cart/constants";
import Summary from "@/features/checkout/components/summary";
import Order from "@/features/checkout/components/order";
import OrderReturn from "@/features/orders/components/details/order-return";
import { useCheckout } from "@/features/checkout/hooks/use-checkout";
import { EMPTY_CHECKOUT } from "@/features/checkout/constants";

export default function CheckoutClinet() {
    const { data: cart = EMPTY_CART } = useCart();
    const { data: checkout = EMPTY_CHECKOUT } = useCheckout();

    return (
        <div className="relative flex items-start gap-5">
            <Order items={cart.items} totalItems={cart.totalItems} />
            <div className="sticky top-[154px] flex flex-col gap-4 min-w-[35%]">
                <Summary
                    options={{
                        totalItems: cart.totalItems,
                        subtotal: cart.subtotal,
                        total: cart.total,
                        currency: '$',
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
    );
}
