"use client";

import { useCart } from "@/features/cart/hooks/use-cart";
import { EMPTY_CART } from "@/features/cart/constants";
import Summary from "@/features/checkout/components/summary";
import Order from "@/features/checkout/components/order";

export default function CheckoutClinet() {
    const { data: cart = EMPTY_CART } = useCart();

    return (
        <div className="relative flex items-start gap-5">
            <Order items={cart.items} totalItems={cart.totalItems} />
            <Summary
                options={{
                    totalItems: cart.totalItems,
                    subtotal: cart.subtotal,
                    total: cart.total,
                }}
            />
        </div>
    );
}
