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
import {
	ArrowDown,
	ArrowUp,
	Minus,
	Plus,
	ShoppingBag,
	Truck,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface IProps {
	productId: string;
	variantId: string;
}

interface IDetails {
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

	const itemToCart = mapProductToCartItem(product, dynamicVariant, quantity);

	return (
		<Main>
			<Section>
				<Container>
					<div className="flex flex-col gap-5">
						<SectionTitle>
							{product.category.name} {product.title}
						</SectionTitle>
						<div className="flex gap-[60px]">
							<div className="flex gap-3 w-full max-w-[572px]">
								<div className="relative flex flex-col gap-2 rounded-xl flex-1 min-w-[80px]">
									{currentVariant!.images.map((image) => {
										return (
											<div
												key={image.id}
												className="flex flex-col gap-4 items-center justify-center w-full h-[100px] bg-[#F4F4F6] rounded-xl overflow-hidden border-[1px] border-transparent hover:border-black transition-brand"
											>
												<Image
													src={image.src}
													alt={product.title}
													width={332}
													height={480}
													className={`flex flex-col gap-4 ${
														image.id === "1"
															? "max-w-[60px] max-h-[80px]"
															: "w-full h-full"
													} object-cover`}
												/>
											</div>
										);
									})}
									<Button
										className={`absolute -top-2 left-[calc(50%-16px)] flex w-8 h-8 rounded-[50%] bg-white opacity-0 hover:bg-white shadow-[0_0_9px_-3px_var(--black)]/50 ${"opacity-100"}
										`}
									>
										<ArrowUp className="size-4 stroke-[1.5px] stroke-black" />
									</Button>
									<Button
										className={`absolute -bottom-2 left-[calc(50%-16px)] flex w-8 h-8 rounded-[50%] bg-white opacity-0 hover:bg-white shadow-[0_0_9px_-3px_var(--black)]/50 ${"opacity-100"}
										`}
									>
										<ArrowDown className="size-4 stroke-[1.5px] stroke-black" />
									</Button>
								</div>
								<div className="w-full h-full max-w-[480px] max-h-[640px] rounded-xl overflow-hidden bg-[#F4F4F6]">
									<Image
										src={currentVariant.href.original}
										alt=""
										width={480}
										height={640}
										className="w-full h-full object-contain cursor-zoom-in"
									/>
								</div>
							</div>
							<div className="flex gap-4 justify-between">
								<div className="flex flex-col py-4 gap-6 min-w-[352px]">
									<div className="flex flex-col gap-2 justify-between">
										<h3 className="text-xl font-sans font-medium tracking-wider leading-lg">
											{product.brand.name}
										</h3>
										<span className="font-sans tracking-wider uppercase leading-md">
											{product.title}
										</span>
									</div>

									{/* Colors */}
									<div className="flex flex-col gap-[6px]">
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

									{/* Size */}
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
									{/* Move */}
									{/* <div className="relative flex gap-4">
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
									</div> */}

									{/* Accordion */}
									{/* <div className="flex flex-col">
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
									</div> */}
									<div className="flex flex-col gap-[6px]">
										<span className="text-lg font-medium leading-lg tracking-wider">
											Details
										</span>
										<div className="flex flex-col">
											{detailsData.map((item) => {
												return (
													<div
														key={item.id}
														className="flex gap-3 border-b-[0.5px] border-black/50 py-2"
													>
														<span className="text-sans tracking-wider w-[160px]">
															{item.label}
														</span>
														<p className="text-mono tracking-wide max-w-[180px]">
															{item.description}
														</p>
													</div>
												);
											})}
										</div>
									</div>
								</div>
								<div className="sticky top-[154px] flex flex-col gap-5 w-[280px]">
									<div className="flex flex-col gap-4 min-h-[188px] bg-[#D9D9D9]/10 rounded-xl border-[0.5px] border-black/10 p-4">
										<div className="flex flex-col gap-3">
											<div className="flex justify-between font-medium tracking-wider leading-lg">
												<div>
													<span className="text-xl font-medium tracking-wider">
														$ {currentVariant.price / 100 + "0"}
													</span>
													<p>1 pcs</p>
												</div>
												<div className="flex flex-col items-end">
													<span className="text-xl font-medium tracking-wider">
														${" "}
														{((currentVariant.price / 100) * quantity).toFixed(
															1
														) + "0"}
													</span>
													<p>{quantity} pcs </p>
												</div>
											</div>
										</div>
										<div className="flex flex-col gap-[10px]">
											<div className="flex flex-col gap-2">
												<div className="flex items-center justify-between">
													<span>Quantity</span>
													<div className="group/amount flex rounded-xl bg-white border-[0.5px] border-black/10 hover:border-black/15 hover:shadow-[0_0_9px_-3px_var(--black)]/25 transition-brand">
														<Button
															className="flex gap-3 w-10 h-10 bg-white hover:bg-white"
															onClick={decrementItem}
														>
															<Minus className="size-4 stroke-[1.5px] stroke-black" />
														</Button>
														<span className="flex items-center justify-center w-10 h-10 font-mono tracking-wider leading-lg">
															{quantity}
														</span>
														<Button
															className="flex gap-3 w-10 h-10 bg-white hover:bg-white"
															onClick={incrementItem}
														>
															<Plus className="size-4 stroke-[1.5px] stroke-black" />
														</Button>
													</div>
												</div>
												<div className="flex items-center justify-between">
													<span className="tracking-wider ">Delivery</span>
													<p className="font-mono tracking-wide">
														Satturday 5/30
													</p>
												</div>
											</div>
											<div className="flex flex-col gap-[10px]">
												<div className="relative flex gap-3">
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
													<p className="tracking-wider leading-md">
														Free shipping
													</p>
												</div>
											</div>
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
