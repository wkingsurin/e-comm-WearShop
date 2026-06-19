import SectionTitle from "@/components/shared/section-title";
import SortSelect from "@/components/shared/sort-select";
import ProductCard from "@/components/widgets/product-card/product-card";
import { getProducts } from "../../../../lib/get-products";

export default async function Sneakers() {
	const products = await getProducts({ categorySlug: "sneakers" });

	return (
		<div className="flex flex-col gap-5">
			<div className="relative flex items-center justify-between">
				<div className="flex items-start gap-[6px]">
					<SectionTitle>Sneakers</SectionTitle>
					<span className="text-base font-normal tracking-wider leading-base">
						({products.length})
					</span>
				</div>
				<SortSelect className="absolute -top-[12px] right-0" />
			</div>
			<div className="flex flex-wrap gap-5">
				{products.map((item) => (
					<ProductCard key={item.id} data={item} />
				))}
			</div>
		</div>
	);
}
