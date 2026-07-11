"use server";

import { auth } from "@/auth";
import Main from "@/components/main";
import Container from "@/components/shared/container";
import Section from "@/components/shared/section";
import { getFavoriteMap } from "@/features/favorites/services/favorites.service";
import { getProducts } from "@/lib/get-products";
import { getQueryClient } from "@/lib/react-query/get-query-client";
import { queryKeys } from "@/lib/react-query/query-keys";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";

interface IProps {
    children: React.ReactNode;
}

export default async function CategoryLayout({ children }: IProps) {
    const session = await auth();

    const favoriteMap = session?.user?.id
        ? await getFavoriteMap(session.user.id)
        : {};

    const queryClient = getQueryClient();

    await queryClient.setQueryData(queryKeys.favorites, favoriteMap);

    return (
        <Main>
            <Section>
                <Container>
                    <HydrationBoundary state={dehydrate(queryClient)}>
                        {children}
                    </HydrationBoundary>
                </Container>
            </Section>
            {/* <LastSeenSection /> */}
        </Main>
    );
}
