"use client";

import { useFavorites } from "@/components/hooks/useFavorites";
import useShowcase from "@/components/hooks/useShowcase";
import Dummy from "@/components/shared/dummy";
import SortSelect from "@/components/shared/sort-select";
import ProductCard from "@/components/widgets/product-card/product-card";
import { useFavoriteStore } from "@/lib/store/favorites.store";
import { Heart } from "lucide-react";

export default function Favorites() {
	const hasHydrated = useFavoriteStore((s) => s._hasHydrated);
	const { items: favorites } = useFavorites();
	const { products } = useShowcase();

	const favoriteProducts = favorites
		.map((fav) => products.find((prod) => prod.id === fav.id))
		.filter((prod) => prod !== undefined);

	return (
		<div className="relative flex flex-wrap w-full min-h-[492px] gap-5">
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
				<Dummy icon={Heart} text="No favorites" />
			)}
		</div>
	);
}
