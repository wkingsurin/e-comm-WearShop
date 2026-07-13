"use client";

import SectionTitle from "@/components/shared/section-title";
import SortSelect from "@/components/shared/sort-select";
import ProductCard from "@/components/widgets/product-card/product-card";
import { useFavorites } from "@/features/favorites/hooks/use-favorites";
import { IProduct } from "@/types/store/ui.types";

export default function JeansClient({ products }: { products: IProduct[] }) {
	const { data: favorites = {} } = useFavorites();

	return (
		<div className="flex flex-col gap-5">
			<div className="relative flex items-center justify-between">
				<div className="flex items-start gap-[6px]">
					<SectionTitle>Jeans</SectionTitle>
					<span className="text-base font-normal tracking-wider leading-base">
						({products.length})
					</span>
				</div>
				<SortSelect className="absolute -top-[12px] right-0" />
			</div>
			<div className="grid grid-cols-5 gap-5">
				{products.map((item) => (
					<ProductCard
						key={item.id}
						data={item}
						isFavorite={!!favorites[item.id]}
					/>
				))}
			</div>
		</div>
	);
}
