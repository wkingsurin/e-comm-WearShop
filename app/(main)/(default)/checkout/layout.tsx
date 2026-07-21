import Main from "@/components/main";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import { auth } from "@/auth";
import { getCheckout } from "@/features/checkout/services/checkout.service";
import { EMPTY_CHECKOUT } from "@/features/checkout/constants";
import { getQueryClient } from "@/lib/react-query/get-query-client";
import { queryKeys } from "@/lib/react-query/query-keys";

interface IProps {
    children: React.ReactNode;
}

export default async function CheckoutLayout({ children }: IProps) {
    const session = await auth();

    const [checkout] = await Promise.all([
        session?.user?.id
            ? (getCheckout(session?.user?.id) ?? EMPTY_CHECKOUT)
            : Promise.resolve({ EMPTY_CHECKOUT }),
    ]);

    const queryClient = getQueryClient();

    queryClient.setQueryData(queryKeys.checkout, checkout);

    return (
        <HydrationBoundary state={dehydrate(queryClient)}>
            {children}
        </HydrationBoundary>
    );
}
