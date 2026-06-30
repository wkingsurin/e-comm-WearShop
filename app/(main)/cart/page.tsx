import Main from "@/components/main";
import Container from "@/components/shared/container";
import Section from "@/components/shared/section";
import SectionTitle from "@/components/shared/section-title";
import LastSeenSection from "@/components/widgets/last-seen-section";
import CartClient from "./client";
import { getQueryClient } from "@/lib/react-query/get-query-client";
import { queryKeys } from "@/lib/react-query/query-keys";
import { getCartItems } from "@/features/cart/services/cart.service";
import { auth } from "@/auth";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";

export default async function Cart() {
	const session = await auth();

	const cart = session?.user?.id
		? await getCartItems(session.user.id)
		: { items: [], totalItems: 0, subtotal: 0, total: 0 };

	const queryClient = getQueryClient();

	queryClient.setQueryData(queryKeys.cart, cart);

	const payments: { id: string; label: string; image: string }[] = [
		{ id: "1", label: "PayPal", image: "image-pay-1.png" },
		{ id: "2", label: "Visa", image: "image-pay-2.png" },
		{ id: "3", label: "Mastercard", image: "image-pay-3.png" },
	];

	return (
		<Main>
			<Section>
				<Container>
					<HydrationBoundary state={dehydrate(queryClient)}>
						<div className="flex flex-col gap-5">
							<SectionTitle>Cart</SectionTitle>
							<CartClient payments={payments} />
						</div>
					</HydrationBoundary>
				</Container>
			</Section>
			<LastSeenSection />
		</Main>
	);
}
