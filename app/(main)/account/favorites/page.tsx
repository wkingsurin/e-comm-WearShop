"use client";

import DashboardWrapper from "@/components/shared/dashboard-wrapper";
import Dummy from "@/components/shared/dummy";
import SortSelect from "@/components/shared/sort-select";
import ProductCard from "@/components/widgets/product-card/product-card";
import { Heart } from "lucide-react";
import { IProduct } from "@/types/store/ui.types";

export default function Favorites() {
	const favoriteProducts: IProduct[] = [];

	return (
		<DashboardWrapper pageTitle="Favorites">
			<div className="flex items-center gap-4 h-full">
				{favoriteProducts.length !== 0 && (
					<>
						<SortSelect className="absolute -top-[56px] right-0" />
						{favoriteProducts.map((item) => {
							return <ProductCard key={item.id} data={item} type="Favourite" />;
						})}
					</>
				)}
				{favoriteProducts.length === 0 && (
					<Dummy icon={Heart} text="You haven`t favorites" />
				)}
			</div>
		</DashboardWrapper>
	);
}
