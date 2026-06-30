"use client";

import DashboardWrapper from "@/components/shared/dashboard-wrapper";
import Dummy from "@/components/shared/dummy";
import CartItem from "@/components/widgets/cart-item";
import { ShoppingBag } from "lucide-react";
import { useFavorites } from "@/features/favorites/hooks/use-favorites";
import { useCart } from "@/features/cart/hooks/use-cart";
import { EMPTY_CART } from "@/features/cart/constants";
import SellMenu from "./sell-menu";

export default function CartClient({
	payments,
}: {
	payments: { id: string; label: string; image: string }[];
}) {
	const { data: favorites = {} } = useFavorites();
	const { data: cart = EMPTY_CART } = useCart();

	return (
		<div className="relative flex items-start gap-5">
			<DashboardWrapper pageTitle="Delivery">
				{cart.totalItems > 0 && (
					<div className="flex flex-col gap-3 flex-1">
						{cart.items.map((item) => (
							<CartItem
								key={item.cartItemId}
								data={item}
								isFavorite={!!favorites[item.id]}
							/>
						))}
					</div>
				)}
				{cart.items.length === 0 && (
					<Dummy icon={ShoppingBag} text="Your cart is empty" />
				)}
			</DashboardWrapper>
			<SellMenu cart={cart} payments={payments} />
		</div>
	);
}
