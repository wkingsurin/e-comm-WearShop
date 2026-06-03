"use client";

import useShowcase from "@/components/hooks/useShowcase";
import SectionTitle from "@/components/shared/section-title";
import SortSelect from "@/components/shared/sort-select";
import ProductCard from "@/components/widgets/product-card/product-card";
import { IProduct, useUIStore } from "@/lib/store/ui.store";

export default function Category() {
	const { products: data } = useShowcase();
	const sortOption = useUIStore((s) => s.sortOption);

	const getMinPrice = (product: IProduct): number => {
		if (!product.variants || product.variants.length === 0) return 0;

		return Math.min(...product.variants.map((v) => v.price));
	};

	const sortProductsByPrice = (
		products: IProduct[],
		direction: "higher" | "lower"
	): IProduct[] => {
		return [...products].sort((a, b) => {
			const priceA = getMinPrice(a);
			const priceB = getMinPrice(b);

			if (direction === "lower") {
				return priceA - priceB;
			} else {
				return priceB - priceA;
			}
		});
	};

	const sortedData = sortProductsByPrice(data, sortOption);

	return (
		<div className="flex flex-col gap-5">
			<div className="relative flex items-center justify-between">
				<div className="flex items-start gap-[6px]">
					<SectionTitle>All Products</SectionTitle>
					<span className="text-base font-normal tracking-wider leading-base">
						({data.length})
					</span>
				</div>
				<SortSelect className="absolute -top-[12px] right-0" />
			</div>
			<div className="flex flex-wrap gap-5">
				{sortedData.map((item) => (
					<ProductCard key={item.id} data={item} />
				))}
			</div>
		</div>
	);
}
