"use client";

import Dummy from "@/components/shared/dummy";
import SortSelect from "@/components/shared/sort-select";
import ProductCard from "@/components/widgets/product-card/product-card";
import { useFavorites } from "@/features/favorites/hooks/use-favorites";
import { IProduct } from "@/types/store/ui.types";
import { Heart } from "lucide-react";

interface ClientProps {
    products: IProduct[];
}

export function FavoritesClient({ products }: ClientProps) {
    const { data: favorites = {} } = useFavorites();
    const favoriteProducts = products.filter((product) => favorites[product.id]);

    return (
        <div className="grid grid-cols-4 gap-4 h-full">
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
    );
}
