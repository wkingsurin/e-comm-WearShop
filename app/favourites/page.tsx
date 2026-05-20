import Main from "@/components/main";
import Container from "@/components/shared/container";
import Section from "@/components/shared/section";
import SectionTitle from "@/components/shared/section-title";
import SortSelect from "@/components/shared/sort-select";
import ProductCard from "@/components/widgets/product-card";

export default function Favourites() {
	return (
		<Main>
			<Section>
				<Container>
					<div className="flex flex-col gap-5">
						<div className="flex items-center justify-between">
							<SectionTitle>Favourites</SectionTitle>
							<SortSelect />
						</div>
						<div className="flex flex-wrap gap-5">
							<ProductCard fav />
							<ProductCard fav />
							<ProductCard fav />
							<ProductCard fav />
						</div>
					</div>
				</Container>
			</Section>
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
							<ProductCard />
							<ProductCard />
							<ProductCard />
							<ProductCard />
						</div>
					</div>
				</Container>
			</Section>
		</Main>
	);
}
