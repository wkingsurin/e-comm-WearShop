import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import { getCheckout } from "@/features/checkout/services/checkout.service";
import { getQueryClient } from "@/lib/react-query/get-query-client";
import { queryKeys } from "@/lib/react-query/query-keys";
import getCurrentUser from "@/lib/auth/get-current-user";
import { notFound, redirect } from "next/navigation";
import { getCartItems } from "@/features/cart/services/cart.service";

interface IProps {
    children: React.ReactNode;
}

export default async function CheckoutLayout({ children }: IProps) {
    const user = await getCurrentUser();

    if (!user) {
        return notFound();
    }

    const [checkout, cart] = await Promise.all([
        getCheckout(user.id),
        getCartItems(user.id),
    ]);

    if (cart.items.length === 0) {
        redirect("/cart");
    }

    const queryClient = getQueryClient();

    queryClient.setQueryData(queryKeys.checkout, checkout);

    return (
        <HydrationBoundary state={dehydrate(queryClient)}>
            {children}
        </HydrationBoundary>
    );
}
