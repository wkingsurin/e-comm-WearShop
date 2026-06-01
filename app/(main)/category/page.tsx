"use client";

import useShowcase from "@/components/hooks/useShowcase";
import SectionTitle from "@/components/shared/section-title";
import SortSelect from "@/components/shared/sort-select";
import ProductCard from "@/components/widgets/product-card/product-card";

export default function Category() {
	const { products: data } = useShowcase();

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
				{data.map((item) => (
					<ProductCard key={item.id} data={item} />
				))}
			</div>
		</div>
	);
}
