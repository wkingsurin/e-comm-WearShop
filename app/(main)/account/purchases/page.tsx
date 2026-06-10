"use client";

import { useFavorites } from "@/hooks/useFavorites";
import useShowcase from "@/hooks/useShowcase";
import DashboardWrapper from "@/components/shared/dashboard-wrapper";
import Dummy from "@/components/shared/dummy";
import SortSelect from "@/components/shared/sort-select";
import ProductCard from "@/components/widgets/product-card/product-card";
import { useFavoriteStore } from "@/lib/store/favorites.store";
import { Boxes } from "lucide-react";

export default function Purchases() {
	const hasHydrated = useFavoriteStore((s) => s._hasHydrated);
	const { items: favorites } = useFavorites();
	const { products } = useShowcase();

	const favoriteProducts = favorites
		.map((fav) => products.find((prod) => prod.id === fav.id))
		.filter((prod) => prod !== undefined);

	return (
		<DashboardWrapper pageTitle="Purchases">
			<div className="flex gap-4">
				{hasHydrated && favoriteProducts.length !== 0 && (
					<SortSelect className="absolute -top-[56px] right-0" />
				)}
				{hasHydrated && favoriteProducts.length !== 0 && (
					<>
						{favoriteProducts.map((item) => {
							return <ProductCard key={item.id} data={item} type="Favourite" />;
						})}
					</>
				)}
				{hasHydrated && favoriteProducts.length === 0 && (
					<Dummy icon={Boxes} text="You haven`t purchases" />
				)}
			</div>
		</DashboardWrapper>
	);
}
