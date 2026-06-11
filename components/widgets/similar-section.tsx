"use client";

import { useSimilarStore } from "@/lib/store/similar.store";
import Container from "../shared/container";
import Section from "../shared/section";
import SectionTitle from "../shared/section-title";
import SortSelect from "../shared/sort-select";
import ProductCard from "./product-card/product-card";
import SectionSubtitle from "../shared/section-subtitle";

export default function SimilarSection() {
	const similarProducts = useSimilarStore((s) => s.similarProducts);

	if (similarProducts.length === 0) return null;

	return (
		<Section>
			<Container>
				<div className="flex flex-col gap-5">
					<div className="flex flex-col gap-[6px]">
						<SectionSubtitle>You might also like</SectionSubtitle>
						<div className="flex items-center justify-between">
							<SectionTitle>Similar products</SectionTitle>
							<SortSelect />
						</div>
					</div>
					<div className="flex flex-wrap gap-5">
						{similarProducts.map((item) => (
							<ProductCard key={item.id} data={item} />
						))}
					</div>
				</div>
			</Container>
		</Section>
	);
}
