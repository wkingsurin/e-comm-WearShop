"use client";

import useShowcase from "@/hooks/useShowcase";
import { useEffect, useState } from "react";
import { useSimilarStore } from "@/lib/store/similar.store";

import Main from "@/components/main";
import Container from "@/components/shared/container";
import Section from "@/components/shared/section";
import SectionTitle from "@/components/shared/section-title";
import SimilarSection from "@/components/widgets/similar-section";
import LastSeenSection from "@/components/widgets/last-seen-section";
import Gallery from "./gallery";
import Description from "./description";
import SellMenu from "./sell-menu";
import { IVariant } from "@/types/store/ui.types";

interface IProps {
	productId: string;
	variantId: string;
}

export interface IDetails {
	id: string;
	label: string;
	description: string;
}

export default function ProductClient({ productId, variantId }: IProps) {
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

	const [quantity, setQuantity] = useState<number>(1);
	const incrementItem = () => {
		setQuantity((prevQty) => {
			const nextQty = prevQty + 1;

			if (nextQty > currentVariant.stock) return prevQty;

			return nextQty;
		});
	};
	const decrementItem = () => {
		setQuantity((prevQty) => {
			const nextQty = prevQty - 1;

			if (nextQty <= 0) return prevQty;

			return nextQty;
		});
	};

	const { products: showcase } = useShowcase();
	const computeSimilarProducts = useSimilarStore(
		(s) => s.computeSimilarProducts
	);

	const product = showcase.find((item) => item.id === productId) || null;

	const [size, setSize] = useState<string>("M 48");
	const onChangeSize = (value: string) => setSize(value as string);

	useEffect(() => {
		if (!product) return;

		const currentVariant =
			product.variants.find((item) => item.id === variantId) ||
			product.variants[0];

		computeSimilarProducts(product, currentVariant, showcase);
	}, [product, variantId, showcase, computeSimilarProducts]);

	if (!product) {
		return <span>Product not found!</span>;
	}

	const currentVariant =
		product.variants.find((item) => item.id === variantId) ||
		product.variants[0];

	const selectedSizeLabel = size.split(" ")[0];
	const dynamicVariant: IVariant = {
		...currentVariant,
		attributes: { ...currentVariant!.attributes, size: selectedSizeLabel },
	};

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
								productName={product.title}
								productVariant={currentVariant}
							/>
							<div className="flex gap-4 justify-between">
								<Description
									product={product}
									productVariant={currentVariant}
									size={size}
									onChangeSize={onChangeSize}
									detailsData={detailsData}
								/>
								<SellMenu
									product={product}
									productVariant={currentVariant}
									dynamicVariant={dynamicVariant}
									quantity={quantity}
									decrementItem={decrementItem}
									incrementItem={incrementItem}
									size={size}
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
