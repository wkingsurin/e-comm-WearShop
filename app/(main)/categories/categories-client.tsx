"use client";

import FiltersButton from "@/components/shared/filters-button";
import SectionTitle from "@/components/shared/section-title";
import SortSelect from "@/components/shared/sort-select";
import Filters from "@/components/widgets/filters";
import ProductCard from "@/components/widgets/product-card/product-card";
import { useFavorites } from "@/features/favorites/hooks/use-favorites";
import { IProduct } from "@/types/store/ui.types";
import { useState } from "react";

export default function CategoriesClient({
	products,
}: {
	products: IProduct[];
}) {
	const { data: favorites = {} } = useFavorites();

	const [openFilters, setOpenFilters] = useState<boolean>(false);

	const onOpenFilters = () => {
		setOpenFilters((prev) => !prev);
	};

	return (
		<div className="flex flex-col gap-5">
			<div className="relative flex flex-col gap-4 lg:flex-row items-start lg:items-center lg:gap-auto justify-between px-2 md:px-0!">
				<div className="flex order-2 lg:order-1 items-start gap-[6px]">
					<SectionTitle>All Products</SectionTitle>
					<span className="text-base font-normal tracking-wider leading-base">
						({products.length})
					</span>
				</div>
				<div className="flex order-1 lg:order-2 gap-3 w-full md:w-auto lg:absolute lg:-top-[12px] right-0">
					<SortSelect />
					<FiltersButton onOpenFilters={onOpenFilters} />
				</div>
			</div>
			{openFilters && <Filters />}
			<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-1 lg:gap-5">
				{products.map((item) => {
					return (
						<ProductCard
							key={item.id}
							data={item}
							isFavorite={!!favorites[item.id]}
						/>
					);
				})}
			</div>
		</div>
	);
}
