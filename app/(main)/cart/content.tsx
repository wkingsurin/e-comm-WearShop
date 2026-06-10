import useCart from "@/hooks/useCart";
import DashboardWrapper from "@/components/shared/dashboard-wrapper";
import Dummy from "@/components/shared/dummy";
import CartItem from "@/components/widgets/cart-item";
import { ShoppingBag } from "lucide-react";

export default function Content({
	isHydrated,
	isEmpty,
}: {
	isHydrated: boolean;
	isEmpty: boolean;
}) {
	const { cartItemsList } = useCart();

	return (
		<DashboardWrapper pageTitle="Delivery">
			{isHydrated && !isEmpty && (
				<div className="flex flex-col gap-3 flex-1">
					{cartItemsList.map((item) => (
						<CartItem key={item.cartItemId} data={item} />
					))}
				</div>
			)}
			{isHydrated && isEmpty && (
				<Dummy icon={ShoppingBag} text="Your cart is empty" />
			)}
		</DashboardWrapper>
	);
}
