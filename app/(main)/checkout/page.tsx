import { auth } from "@/auth";
import Main from "@/components/main";
import Container from "@/components/shared/container";
import Section from "@/components/shared/section";
import SectionTitle from "@/components/shared/section-title";
import { getCartItems } from "@/features/cart/services/cart.service";
import CheckoutClinet from "./client";
import { getQueryClient } from "@/lib/react-query/get-query-client";
import { queryKeys } from "@/lib/react-query/query-keys";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import { getCheckout } from "@/features/checkout/services/checkout.service";
import { EMPTY_CART } from "@/features/cart/constants";
import { EMPTY_CHECKOUT } from "@/features/checkout/constants";

export default async function Checkout() {
	const session = await auth();

	const checkout = session?.user?.id
		? (getCheckout(session?.user?.id)) ?? EMPTY_CHECKOUT
		: EMPTY_CHECKOUT;

	const queryClient = getQueryClient();

	queryClient.setQueryData(queryKeys.checkout, checkout);

	return (
		<Main>
			<Section>
				<Container>
					<HydrationBoundary state={dehydrate(queryClient)}>
						<div className="flex flex-col gap-5">
							<SectionTitle>Review & Place order</SectionTitle>
							<CheckoutClinet />
						</div>
					</HydrationBoundary>
				</Container>
			</Section>
		</Main>
	);
}
