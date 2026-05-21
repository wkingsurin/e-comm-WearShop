import SortSelect from "@/components/shared/sort-select";
import ProductCard from "@/components/widgets/product-card";

export default function Purchases() {
	return (
		<div className="relative flex flex-wrap w-full gap-5">
			<SortSelect className="absolute -top-[56px] right-0" />
			<ProductCard fav />
			<ProductCard fav />
			<ProductCard fav />
		</div>
	);
}
