import DashboardWrapper from "@/components/shared/dashboard-wrapper";
import OrderItems from "./order-items";
import Shipping from "./shipping";
import { ICartItem } from "@/features/cart/types";
import PaymentSelector from "./payment-selector";

export default function Order({
	items,
	totalItems,
}: {
	items: ICartItem[];
	totalItems: number;
}) {
	return (
		<div className="flex flex-col gap-5 w-full">
			<DashboardWrapper
				pageTitle={`Order ID: UA-48910-2026`}
				className="min-h-[auto]"
			>
				<OrderItems items={items} isEmpty={totalItems === 0} />
			</DashboardWrapper>
			<PaymentSelector />
			<Shipping />
		</div>
	);
}
