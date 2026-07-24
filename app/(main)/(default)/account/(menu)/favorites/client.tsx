"use client";

import DashboardWrapper from "@/components/shared/dashboard-wrapper";
import Dummy from "@/components/shared/dummy";
import ProtectedState from "@/components/shared/protected-state";
import ProductCard from "@/components/widgets/product-card/product-card";
import { useFavorites } from "@/features/favorites/hooks/use-favorites";
import { IProduct } from "@/types/store/ui.types";
import { Heart, Lock } from "lucide-react";
import { useSession } from "next-auth/react";

interface ClientProps {
    products: IProduct[];
}

export function FavoritesClient({ products }: ClientProps) {
    const session = useSession();
    const authorized = session.status === "authenticated";

    const { data: favorites = {} } = useFavorites();
    const favoriteProducts = products.filter(
        (product) => favorites[product.id],
    );

    return (
        <>
            {!authorized ? (
                <ProtectedState icon={Lock} description="Sign in to keep your wishlist available on every device." />
            ) : (
                <DashboardWrapper className="min-h-[534px] px-1! md:px-6!">
                    <div
                        className={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1 lg:gap-5 ${favoriteProducts.length > 0 ? "h-auto" : "h-full"}`}
                    >
                        {favoriteProducts.length !== 0 && (
                            <>
                                {favoriteProducts.map((item) => {
                                    return (
                                        <ProductCard
                                            key={item.id}
                                            data={item}
                                            isFavorite={true}
                                            type="Favorite"
                                        />
                                    );
                                })}
                            </>
                        )}
                        {favoriteProducts.length === 0 && (
                            <Dummy icon={Heart} text="You haven`t favorites" />
                        )}
                    </div>
                </DashboardWrapper>
            )}
        </>
    );
}
