"use client";

import Main from "@/components/main";
import Container from "@/components/shared/container";
import Section from "@/components/shared/section";
import SectionTitle from "@/components/shared/section-title";
import SortSelect from "@/components/shared/sort-select";
import ProductCard from "@/components/widgets/product-card";
import { useUIStore } from "@/lib/store/ui.store";

export default function Home() {
	const data = useUIStore((s) => s.showcase);

	return (
		<Main>
			<Section>
				<Container>
					<div className="flex flex-col gap-5">
						<div className="relative flex items-center justify-between">
							<SectionTitle>Hoodies</SectionTitle>
							<SortSelect className="absolute -top-[12px] right-0" />
						</div>
						<div className="flex flex-wrap gap-5">
							{data.map((item) => (
								<ProductCard key={item.id} data={item} />
							))}
						</div>
					</div>
				</Container>
			</Section>
		</Main>
	);
}
