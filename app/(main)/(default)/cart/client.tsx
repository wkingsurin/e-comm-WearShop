"use client";

import DashboardWrapper from "@/components/shared/dashboard-wrapper";
import Dummy from "@/components/shared/dummy";
import { ShoppingBag } from "lucide-react";
import { useCart } from "@/features/cart/hooks/use-cart";
import { EMPTY_CART } from "@/features/cart/constants";
import SellMenu from "@/features/cart/components/sell-menu";
import CartItem from "@/features/cart/components/cart-item";

export default function CartClient({
    payments,
}: {
    payments: { id: string; label: string; image: string }[];
}) {
    const { data: cart = EMPTY_CART } = useCart();

    const items = cart.items ?? [];

    return (
        <div className="relative flex flex-col md:flex-row items-start gap-5">
            <DashboardWrapper className="min-h-[598px] md:w-[65%]">
                {cart.totalItems > 0 && (
                    <div className="flex flex-col gap-4 flex-1 [&>*:not(:last-child)]:border-b [&>*:not(:last-child)]:pb-4">
                        {items.map((item) => (
                            <CartItem
                                key={item.cartItemId}
                                data={item}
                                isFavorite={false}
                            />
                        ))}
                    </div>
                )}
                {items.length === 0 && (
                    <Dummy icon={ShoppingBag} text="Your cart is empty" />
                )}
            </DashboardWrapper>
            <SellMenu cart={cart} payments={payments} />
        </div>
    );
}
