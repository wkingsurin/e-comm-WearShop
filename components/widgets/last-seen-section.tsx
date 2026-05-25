"use client";

import useLastSeen from "../hooks/useLastSeen";
import Container from "../shared/container";
import Section from "../shared/section";
import SectionTitle from "../shared/section-title";
import SortSelect from "../shared/sort-select";
import ProductCard from "./product-card/product-card";

export default function LastSeenSection() {
	const { lastSeenItemsList } = useLastSeen();

	return (
		<Section>
			<Container>
				<div className="flex flex-col gap-5">
					<div className="flex flex-col gap-[6px]">
						<span className="uppercase font-medium text-black/50 tracking-wider">
							You See
						</span>
						<div className="flex items-center justify-between">
							<SectionTitle>Last seen products</SectionTitle>
							<SortSelect />
						</div>
					</div>
					<div className="flex flex-wrap gap-5">
						{lastSeenItemsList.map((item) => (
							<ProductCard key={item.id} data={item} />
						))}
					</div>
				</div>
			</Container>
		</Section>
	);
}
