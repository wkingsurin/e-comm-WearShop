import DashboardWrapper from "@/components/shared/dashboard-wrapper";
import OrderItems from "./order-items";
import Shipping from "./shipping";
import { ICartItem } from "@/features/cart/types";
import PaymentSelector from "./payment-selector";
import { useCheckout } from "@/features/checkout/hooks/use-checkout";
import { EMPTY_CHECKOUT } from "@/features/checkout/constants";

export default function Order({
	items,
	totalItems,
}: {
	items: ICartItem[];
	totalItems: number;
}) {
	const { data: checkout = EMPTY_CHECKOUT } = useCheckout();

	return (
		<div className="flex flex-col gap-5 w-full">
			<DashboardWrapper
				pageTitle={`Order ID: UA-48910-2026`}
				className="min-h-[auto]"
			>
				<OrderItems items={items} isEmpty={totalItems === 0} />
			</DashboardWrapper>
			<PaymentSelector method={checkout.paymentMethod} />
			<Shipping shippingData={checkout} />
		</div>
	);
}
