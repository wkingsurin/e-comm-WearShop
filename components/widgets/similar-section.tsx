"use client";

import { useSimilarStore } from "@/lib/store/similar.store";
import Container from "../shared/container";
import Section from "../shared/section";
import SectionTitle from "../shared/section-title";
import SortSelect from "../shared/sort-select";
import ProductCard from "./product-card/product-card";
import SectionSubtitle from "../shared/section-subtitle";
import { useFavorites } from "@/features/favorites/hooks/use-favorites";

export default function SimilarSection() {
	const { data: favorites = {} } = useFavorites();

	const similarProducts = useSimilarStore((s) => s.similarProducts);

	if (similarProducts.length === 0) return null;

	return (
		<Section>
			<Container>
				<div className="flex flex-col gap-5">
					<div className="flex flex-col gap-[6px] px-2 md:px-0!">
						<SectionSubtitle>You might also like</SectionSubtitle>
						<div className="flex items-center justify-between">
							<SectionTitle>Similar products</SectionTitle>
							<SortSelect />
						</div>
					</div>
					<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-1 lg:gap-5">
						{similarProducts.map((item) => (
							<ProductCard
								key={item.id}
								data={item}
								isFavorite={!!favorites[item.id]}
							/>
						))}
					</div>
				</div>
			</Container>
		</Section>
	);
}
