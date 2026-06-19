"use client";

import FiltersButton from "@/components/shared/filters-button";
import SectionTitle from "@/components/shared/section-title";
import SortSelect from "@/components/shared/sort-select";
import Filters from "@/components/widgets/filters";
import ProductCard from "@/components/widgets/product-card/product-card";
import { IProduct } from "@/types/store/ui.types";
import { useState } from "react";

export default function CategoriesClient({
	products,
}: {
	products: IProduct[];
}) {
	const [openFilters, setOpenFilters] = useState<boolean>(false);

	const onOpenFilters = () => {
		setOpenFilters((prev) => !prev);
	};

	return (
		<div className="flex flex-col gap-5">
			<div className="relative flex items-center justify-between">
				<div className="flex items-start gap-[6px]">
					<SectionTitle>All Products</SectionTitle>
					<span className="text-base font-normal tracking-wider leading-base">
						({products.length})
					</span>
				</div>
				<div className="flex gap-3 absolute -top-[12px] right-0">
					<SortSelect />
					<FiltersButton onOpenFilters={onOpenFilters} />
				</div>
			</div>
			{openFilters && <Filters />}
			<div className="flex flex-wrap gap-5">
				{products.map((item) => {
					return <ProductCard key={item.id} data={item} />;
				})}
			</div>
		</div>
	);
}
