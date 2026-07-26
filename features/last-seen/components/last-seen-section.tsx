import { getQueryClient } from "@/lib/react-query/get-query-client";
import getCurrentUser from "@/lib/auth/get-current-user";
import { getLastSeen } from "@/features/last-seen/services/last-seen.service";
import { queryKeys } from "@/lib/react-query/query-keys";
import LastSeenClient from "./last-seen-client";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";

export default async function LastSeenSection() {
    const user = await getCurrentUser();

    const products = user?.id ? await getLastSeen(user.id) : [];

    const queryClient = getQueryClient();

    queryClient.setQueryData(queryKeys.lastSeen, products);

    return (
        <HydrationBoundary state={dehydrate(queryClient)}>
            <LastSeenClient />
        </HydrationBoundary>
    );
}
