import Header from "@/components/header/header";
import Footer from "@/components/footer";
import { queryKeys } from "@/lib/react-query/query-keys";
import { getQueryClient } from "@/lib/react-query/get-query-client";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import { getFavoriteMap } from "@/features/favorites/services/favorites.service";
import { getCartItems } from "@/features/cart/services/cart.service";
import { EMPTY_CART } from "@/features/cart/constants";
import { auth } from "@/auth";

interface IProps {
    children: React.ReactNode;
}

export default async function MainLayout({ children }: IProps) {
    const session = await auth();
    console.log(`[session]:`, session);

    const [favoriteMap, cart] = await Promise.all([
        session?.user?.id
            ? getFavoriteMap(session.user.id)
            : Promise.resolve({}),
        session?.user?.id
            ? getCartItems(session.user.id)
            : Promise.resolve(EMPTY_CART),
    ]);

    const queryClient = getQueryClient();

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
