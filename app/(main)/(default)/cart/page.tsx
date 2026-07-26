import Container from "@/components/shared/container";
import Section from "@/components/shared/section";
import SectionTitle from "@/components/shared/section-title";
import LastSeenSection from "@/features/last-seen/components/last-seen-section";
import CartClient from "./client";
import BackButton from "@/components/shared/back-button";
import getCurrentUser from "@/lib/auth/get-current-user";
import { getCartItems } from "@/features/cart/services/cart.service";
import { EMPTY_CART } from "@/features/cart/constants";
import { getQueryClient } from "@/lib/react-query/get-query-client";
import { queryKeys } from "@/lib/react-query/query-keys";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";

export default async function Cart() {
    const user = await getCurrentUser();

    // const queryClient = getQueryClient();

    // if (user) {
    //     const cart = user ? await getCartItems(user.id) : EMPTY_CART;

    //     queryClient.setQueryData(queryKeys.cart, cart);
    // }

    const payments: { id: string; label: string; image: string }[] = [
        { id: "1", label: "PayPal", image: "image-pay-1.png" },
        { id: "2", label: "Visa", image: "image-pay-2.png" },
        { id: "3", label: "Mastercard", image: "image-pay-3.png" },
    ];

    return (
        <>
            {/* <HydrationBoundary state={dehydrate(queryClient)}> */}
                <Section>
                    <Container className="px-0! md:px-4!">
                        <div className="flex flex-col gap-5">
                            <div className="flex gap-3 lg:flex-row items-center lg:gap-4 px-3 md:px-0!">
                                <BackButton />
                                <SectionTitle>Cart</SectionTitle>
                            </div>
                            <CartClient
                                payments={payments}
                                authorized={!!user}
                            />
                        </div>
                    </Container>
                </Section>
                <LastSeenSection />
            {/* </HydrationBoundary> */}
        </>
    );
}
