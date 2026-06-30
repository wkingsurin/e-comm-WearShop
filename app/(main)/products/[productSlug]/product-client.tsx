"use client";

// import { useSimilarStore } from "@/lib/store/similar.store";

import Main from "@/components/main";
import Container from "@/components/shared/container";
import Section from "@/components/shared/section";
import SectionTitle from "@/components/shared/section-title";
import SimilarSection from "@/components/widgets/similar-section";
import LastSeenSection from "@/components/widgets/last-seen-section";
import Gallery from "./gallery";
import Description from "./description";
import SellMenu from "./sell-menu";
import { IProduct } from "@/types/store/ui.types";
import { useSearchParams } from "next/navigation";
import {
	getColorBySlug,
	getCurrentVariant,
} from "@/lib/selectors/product.selectors";
import { useFavorites } from "@/features/favorites/hooks/use-favorites";

interface IProps {
	product: IProduct;
}

export interface IDetails {
	id: string;
	label: string;
	description: string;
}

export default function ProductClient({ product }: IProps) {
	const { data: favorites = {} } = useFavorites();

	const searchParams = useSearchParams();
	const selectedColorSlug = searchParams.get("color");
	const selectedSize = searchParams.get("size");

	const detailsData: IDetails[] = [
		{
			id: "1",
			label: "Fabric type",
			description: "80% Cotton, 20% Polyester - PES",
		},
		{
			id: "2",
			label: "Care instructions",
			description: "Machine Wash",
		},
		{
			id: "3",
			label: "Origin",
			description: "Imported",
		},
	];

	// const computeSimilarProducts = useSimilarStore(
	// 	(s) => s.computeSimilarProducts
	// );

	if (!selectedColorSlug) return null;

	const currentColor = getColorBySlug(product, selectedColorSlug);
	const selectedColorId = currentColor?.id;

	if (!currentColor || !selectedSize || !selectedColorId) return;

	const currentVariant = getCurrentVariant(
		product,
		selectedColorId,
		selectedSize
	);

	const images = currentColor.images;

	if (!currentVariant || !images) return;

	return (
		<Main>
			<Section>
				<Container>
					<div className="flex flex-col gap-5">
						<SectionTitle>
							{product.category.name} {product.title}
						</SectionTitle>
						<div className="flex gap-[60px]">
							<Gallery
								key={currentVariant.id}
								productName={product.title}
								images={images}
							/>
							<div className="flex gap-4 justify-between">
								<Description
									product={product}
									currentVariant={currentVariant}
									detailsData={detailsData}
									activeColorId={selectedColorId}
								/>
								<SellMenu
									product={product}
									currentVariant={currentVariant}
									isFavorite={!!favorites[product.id]}
								/>
							</div>
						</div>
					</div>
				</Container>
			</Section>
			<SimilarSection />
			<LastSeenSection />
		</Main>
	);
}
