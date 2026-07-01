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

export default async function Checkout() {
	const session = await auth();

	const cart = session?.user?.id
		? await getCartItems(session.user.id)
		: { items: [], totalItems: 0, subtotal: 0, total: 0 };

	const queryClient = getQueryClient();

	queryClient.setQueryData(queryKeys.cart, cart);

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
