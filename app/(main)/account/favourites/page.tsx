"use client";

import { useFavorites } from "@/components/hooks/useFavorites";
import SortSelect from "@/components/shared/sort-select";
import ProductCard from "@/components/widgets/product-card/product-card";

export default function Favourites() {
	const { favoritesList } = useFavorites();

	return (
		<div className="relative flex flex-wrap w-full gap-5">
			<SortSelect className="absolute -top-[56px] right-0" />
			{favoritesList.map((item) => {
				return <ProductCard key={item.id} data={item} type="Favourite" />;
			})}
		</div>
	);
}
