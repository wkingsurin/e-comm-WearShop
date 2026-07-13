import Main from "@/components/main";
import Container from "@/components/shared/container";
import Section from "@/components/shared/section";
import SectionTitle from "@/components/shared/section-title";
import LastSeenSection from "@/components/widgets/last-seen-section";
import { IAccountProps } from "@/types/account/account.types";
import AccountNavigation from "./account-navigation";
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
                    <div className="flex flex-col gap-5">
                        <div className="flex items-center justify-between">
                            <SectionTitle>Account</SectionTitle>
                        </div>
                        <div className="flex items-start gap-4">
                            <HydrationBoundary state={dehydrate(queryClient)}>
                                <AccountNavigation />
                                <div className="flex w-full">{children}</div>
                            </HydrationBoundary>
                        </div>
                    </div>
                </Container>
            </Section>
            <LastSeenSection />
        </Main>
    );
}
