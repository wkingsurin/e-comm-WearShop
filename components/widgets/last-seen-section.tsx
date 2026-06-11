"use client";

import useLastSeen from "../../hooks/useLastSeen";
import Container from "../shared/container";
import Section from "../shared/section";
import SectionSubtitle from "../shared/section-subtitle";
import SectionTitle from "../shared/section-title";
import SortSelect from "../shared/sort-select";
import ProductCard from "./product-card/product-card";

export default function LastSeenSection() {
	const { lastSeenIds, lastSeenItems } = useLastSeen();

	const orderedProducts = [...lastSeenIds]
		.reverse()
		.map((id) => lastSeenItems[id]);

	if (orderedProducts.length === 0) return null;

	return (
		<Section>
			<Container>
				<div className="flex flex-col gap-5">
					<div className="flex flex-col gap-[6px]">
						<SectionSubtitle>You See</SectionSubtitle>
						<div className="flex items-center justify-between">
							<SectionTitle>Last seen products</SectionTitle>
							<SortSelect />
						</div>
					</div>
					<div className="flex flex-wrap gap-5">
						{orderedProducts.map((product) => {
							return <ProductCard key={product.id} data={product} />;
						})}
					</div>
				</div>
			</Container>
		</Section>
	);
}
