"use client";

import DashboardWrapper from "@/components/shared/dashboard-wrapper";
import Dummy from "@/components/shared/dummy";
import ProtectedState from "@/components/shared/protected-state";
import ProductCard from "@/components/widgets/product-card/product-card";
import FavoritesSkeleton from "@/features/favorites/components/skeleton/favorites-skeleton";
import { useFavorites } from "@/features/favorites/hooks/use-favorites";
import { Heart, Lock } from "lucide-react";
import { useSession } from "next-auth/react";

export function FavoritesClient() {
    const session = useSession();
    const authorized = session.status === "authenticated";

    const { data: favorites = [], isPending } = useFavorites();

    if (!authorized) {
        return (
            <ProtectedState
                icon={Lock}
                description="Sign in to keep your wishlist available on every device."
            />
        );
    }

    if (isPending) {
        return <FavoritesSkeleton />;
    }

    return (
        <DashboardWrapper className="px-1! md:px-6!">
            <div
                className={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1 lg:gap-5 ${favorites.length > 0 ? "h-auto" : "h-full"}`}
            >
                {favorites.length !== 0 && (
                    <>
                        {favorites.map((item) => {
                            return (
                                <ProductCard
                                    key={item.id}
                                    data={item}
                                    isFavorite={true}
                                    type="Favorite"
                                    isPendingFavorite={false}
                                />
                            );
                        })}
                    </>
                )}
                {favorites.length === 0 && (
                    <Dummy icon={Heart} text="You haven`t favorites" />
                )}
            </div>
        </DashboardWrapper>
    );
}
