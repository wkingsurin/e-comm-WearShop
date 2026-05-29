"use client";

import {
	mapProductToCartItem,
	mapProductToFavorite,
} from "@/app/mappers/mapper";

import useShowcase from "@/components/hooks/useShowcase";
import useCart from "@/components/hooks/useCart";
import { useEffect, useState } from "react";
import { useSimilarStore } from "@/lib/store/similar.store";
import { IVariant } from "@/lib/store/ui.store";

import Main from "@/components/main";
import Container from "@/components/shared/container";
import FavoriteButton from "@/components/shared/favorite-button";
import Section from "@/components/shared/section";
import SectionTitle from "@/components/shared/section-title";
import SimilarSection from "@/components/widgets/similar-section";
import LastSeenSection from "@/components/widgets/last-seen-section";
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronUp, ShoppingBag, Truck } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface IProps {
	productId: string;
	variantId: string;
}

export default function ProductClient({ productId, variantId }: IProps) {
	const { products: showcase } = useShowcase();
	const computeSimilarProducts = useSimilarStore(
		(s) => s.computeSimilarProducts
	);

	const product = showcase.find((item) => item.id === productId) || null;
	const { addItem } = useCart();

	const [size, setSize] = useState<string>("");

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
	const favData = mapProductToFavorite(product);

	const selectedSizeLabel = size.split(" ")[0];
	const dynamicVariant: IVariant = {
		...currentVariant,
		attributes: { ...currentVariant!.attributes, size: selectedSizeLabel },
	};

	const itemToCart = mapProductToCartItem(product, dynamicVariant, 1);

	return (
		<Main>
			<Section>
				<Container>
					<div className="flex flex-col gap-5">
						<SectionTitle>
							{product.category.name} {product.title}
						</SectionTitle>
						<div className="flex gap-[60px]">
							<div className="flex flex-wrap rounded-xl overflow-hidden max-w-[780px] w-2/3 flex-1">
								{currentVariant!.images.map((image) => {
									return (
										<div
											key={image.id}
											className="flex flex-col gap-4 items-center justify-center w-full h-[347px] md:w-1/3 md:max-w-[260px] bg-[#F4F4F6] cursor-zoom-in"
										>
											<Image
												src={image.src}
												alt={product.title}
												width={332}
												height={480}
												className={`flex flex-col gap-4 ${
													image.id === "1" && "max-w-[220px] max-h-[318px]"
												} object-contain`}
											/>
										</div>
									);
								})}
							</div>
							<div className="flex flex-col py-4 gap-6 max-w-[440px] w-full">
								<div className="flex items-center justify-between">
									<h3 className="text-xl font-mono font-medium uppercase tracking-wider leading-lg">
										{product.title}
									</h3>
									<span className="font-sans text-2xl! font-medium text-lg tracking-wider leading-md">
										{product.currency} {currentVariant!.price / 100 + "0"}
									</span>
								</div>
								<div className="flex flex-col gap-3">
									<span className="text-lg font-medium tracking-wider leading-lg">
										Colors
									</span>
									<div className="flex gap-4">
										{product.variants.map((variant) => {
											return (
												<Link
													key={variant.id}
													data-id={variant.attributes.color}
													href={`./${variant.id}`}
													className={`group/color flex flex-col gap-3 items-center text-black/50 hover:text-black transition-brand ${
														variant.id === variantId &&
														variant.attributes.color &&
														"text-black!"
													}`}
												>
													<div
														className={`flex items-center justify-center w-[60px] h-[80px] border border-transparent group-hover/color:border-black bg-[#F4F4F6] rounded-md overflow-hidden transition-brand ${
															variant.id === variantId &&
															variant.attributes.color &&
															"border-black!"
														}`}
													>
														<Image
															src={variant.images[0].src}
															alt={product.title}
															width={169}
															height={240}
															className="rounded-md w-[49px] h-[70px] object-contain"
														/>
													</div>
													<p className="font-mono tracking-wide">
														{variant.attributes.color}
													</p>
												</Link>
											);
										})}
									</div>
								</div>
								<div className="flex flex-col gap-3">
									<div className="flex flex-col gap-[6px]">
										<span className="text-lg font-medium leading-lg tracking-wider">
											Size
										</span>
										<Select
											items={product.options.size}
											onValueChange={(value) => setSize(value as string)}
										>
											<SelectTrigger className="w-full" value={size}>
												<SelectValue placeholder="Select size" />
											</SelectTrigger>
											<SelectContent>
												<SelectGroup>
													{product.options.size.map((s) => (
														<SelectItem
															key={s.label}
															value={`${s.label} ${s.value}`}
														>
															{s.label} {s.value}
														</SelectItem>
													))}
												</SelectGroup>
											</SelectContent>
										</Select>
									</div>
									<div className="relative flex gap-4">
										<Button
											className="flex-1"
											disabled={size === ""}
											onClick={() => {
												if (!size) return console.log(`Select size!!!`);

												addItem(itemToCart);
											}}
										>
											<ShoppingBag className="size-4 stroke-[1px]" />
											Pack
										</Button>
										<FavoriteButton data={favData} inline />
									</div>
									<div className="flex items-center justify-center gap-3 opacity-50">
										<Truck className="size-4 stroke-[1.5px]" />
										<p className="tracking-wider leading-md">Free shipping</p>
									</div>
								</div>
								<div className="flex flex-col">
									<div className="border-b-[0.5px] border-black">
										<div className="flex items-center justify-between px-4 py-2">
											<span className="text-lg font-medium tracking-wider">
												Material & care instructions
											</span>
											<ChevronUp className="size-4 stroke-black stroke-[1.5px]" />
										</div>
										<div className="flex flex-col gap-2 px-4 py-2">
											<div className="flex gap-1">
												<span className="tracking-wider">Material:</span>
												<p className="font-mono tracking-wide">
													80% Cotton, 20% Polyester - PES
												</p>
											</div>
											<div className="flex gap-1">
												<span className="tracking-wider">
													Country of origin:
												</span>
												<p className="font-mono tracking-wide">Malaysia</p>
											</div>
										</div>
									</div>
									<div className="border-b-[0.5px] border-black">
										<div className="flex items-center justify-between px-4 py-2">
											<span className="text-lg font-medium tracking-wider">
												Size & Fit
											</span>
											<ChevronDown className="size-4 stroke-black stroke-[1.5px]" />
										</div>
									</div>
									<div className="border-b-[0.5px] border-black">
										<div className="flex items-center justify-between px-4 py-2">
											<span className="text-lg font-medium tracking-wider">
												Functionality
											</span>
											<ChevronDown className="size-4 stroke-black stroke-[1.5px]" />
										</div>
									</div>
								</div>
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
