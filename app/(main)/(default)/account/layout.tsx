import Main from "@/components/main";
import Container from "@/components/shared/container";
import Section from "@/components/shared/section";
import LastSeenSection from "@/components/widgets/last-seen-section";
import { IAccountProps } from "@/types/account/account.types";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import { queryKeys } from "@/lib/react-query/query-keys";
import { getQueryClient } from "@/lib/react-query/get-query-client";
import { getOrders } from "@/features/orders/services/order.service";
import { EMPTY_ORDERS } from "@/features/orders/constants";
import { getUserProfile } from "@/features/profile/services/profile.service";
import { EMPTY_USER_PROFILE } from "@/features/profile/constants";
import getCurrentUser from "@/lib/auth/get-current-user";

export default async function AccountLayout({ children }: IAccountProps) {
    const user = await getCurrentUser();

    const [profile, orders] = await Promise.all([
        user !== null
            ? getUserProfile(user.id)
            : Promise.resolve(EMPTY_USER_PROFILE),
        user ? getOrders(user.id) : Promise.resolve(EMPTY_ORDERS),
    ]);

    const queryClient = getQueryClient();

    queryClient.setQueryData(queryKeys.profile, profile);
    queryClient.setQueryData(queryKeys.orders(), orders);

    return (
        <>
            <Section>
                <Container className="px-0! md:px-4!">
                    <HydrationBoundary state={dehydrate(queryClient)}>
                        {children}
                    </HydrationBoundary>
                </Container>
            </Section>
            <LastSeenSection />
        </>
    );
}
