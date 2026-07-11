"use client";

import DashboardWrapper from "@/components/shared/dashboard-wrapper";
import DashboardWrapperTitle from "@/components/shared/dashboard-wrapper-title";
import Dummy from "@/components/shared/dummy";
import SortSelect from "@/components/shared/sort-select";
import ProductCard from "@/components/widgets/product-card/product-card";
import { useFavorites } from "@/features/favorites/hooks/use-favorites";
import { IProduct } from "@/types/store/ui.types";
import { Boxes } from "lucide-react";

export default function PurchasesClient({
    products,
}: {
    products: IProduct[];
}) {
    const { data: favorites = {} } = useFavorites();
    const favoriteProducts = products.filter(
        (product) => favorites[product.id],
    );

    return (
        <DashboardWrapper
            pageTitle={<DashboardWrapperTitle title="Purchases" />}
        >
            <div className="flex items-center gap-4 h-full">
                {favoriteProducts.length !== 0 && (
                    <>
                        <SortSelect className="absolute -top-[56px] right-0" />
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
                    <Dummy icon={Boxes} text="You haven`t purchases" />
                )}
            </div>
        </DashboardWrapper>
    );
}
