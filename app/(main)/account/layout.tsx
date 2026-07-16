import Main from "@/components/main";
import Container from "@/components/shared/container";
import Section from "@/components/shared/section";
import LastSeenSection from "@/components/widgets/last-seen-section";
import { IAccountProps } from "@/types/account/account.types";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import { queryKeys } from "@/lib/react-query/query-keys";
import { getQueryClient } from "@/lib/react-query/get-query-client";
import { auth } from "@/auth";
import { getOrders } from "@/features/orders/services/order.service";
import { EMPTY_ORDERS } from "@/features/orders/constants";

export default async function AccountLayout({ children }: IAccountProps) {
    const session = await auth();
    console.log(`[session]:`, session);

    const [orders] = await Promise.all([
        session?.user?.id
            ? getOrders(session.user.id)
            : Promise.resolve({ EMPTY_ORDERS }),
    ]);

    const queryClient = getQueryClient();

    queryClient.setQueryData(queryKeys.orders(), orders);

    return (
        <Main>
            <Section>
                <Container>
                    <HydrationBoundary state={dehydrate(queryClient)}>
                        {children}
                    </HydrationBoundary>
                </Container>
            </Section>
            <LastSeenSection />
        </Main>
    );
}
