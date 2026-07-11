import Header from "@/components/header/header";
import Footer from "@/components/footer";
import { auth } from "@/auth";
import { redirect, RedirectType } from "next/navigation";
import { getCartItems } from "@/features/cart/services/cart.service";
import { EMPTY_CART } from "@/features/cart/constants";
import { queryKeys } from "@/lib/react-query/query-keys";
import { getQueryClient } from "@/lib/react-query/get-query-client";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import { getFavoriteMap } from "@/features/favorites/services/favorites.service";
import { EMPTY_ORDERS } from "@/features/orders/constants";
import { getOrders } from "@/features/orders/services/order.service";

interface IProps {
    children: React.ReactNode;
}

export default async function MainLayout({ children }: IProps) {
    const session = await auth();
    console.log(`[session]:`, session);

    if (!session) {
        redirect("/auth", RedirectType.replace);
    }

    const favoriteMap = session?.user?.id
        ? await getFavoriteMap(session.user.id)
        : {};

    const cart = session?.user?.id
        ? await getCartItems(session.user.id)
        : EMPTY_CART;

    const orders = session?.user?.id
        ? await getOrders(session.user.id)
        : EMPTY_ORDERS;

    const queryClient = getQueryClient();

    queryClient.setQueryData(queryKeys.orders(), orders);
    queryClient.setQueryData(queryKeys.cart, cart);
    queryClient.setQueryData(queryKeys.favorites, favoriteMap);

    return (
        <>
            <Header />
            <HydrationBoundary state={dehydrate(queryClient)}>
                {children}
            </HydrationBoundary>
            <Footer />
        </>
    );
}
