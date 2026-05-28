"use client";

import { useFavorites } from "@/components/hooks/useFavorites";
import Dummy from "@/components/shared/dummy";
import SortSelect from "@/components/shared/sort-select";
import ProductCard from "@/components/widgets/product-card/product-card";
import { useFavoriteStore } from "@/lib/store/favorites.store";
import { Boxes } from "lucide-react";

export default function Purchases() {
	const hasHydrated = useFavoriteStore((s) => s._hasHydrated);
	const { favoritesList } = useFavorites();

	return (
		<div className="relative flex flex-wrap w-full min-h-[492px] gap-5">
			{hasHydrated && favoritesList.length !== 0 && (
				<SortSelect className="absolute -top-[56px] right-0" />
			)}
			{hasHydrated && favoritesList.length !== 0 && (
				<>
					{favoritesList.map((item) => {
						return <ProductCard key={item.id} data={item} type="Favourite" />;
					})}
				</>
			)}
			{hasHydrated && favoritesList.length === 0 && (
				<Dummy icon={Boxes} text="No purchases" />
			)}
		</div>
	);
}
