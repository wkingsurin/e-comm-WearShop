"use client";

import useShowcase from "@/components/hooks/useShowcase";
import Main from "@/components/main";
import Container from "@/components/shared/container";
import FavoriteButton from "@/components/shared/favorite-button";
import Section from "@/components/shared/section";
import SectionTitle from "@/components/shared/section-title";
import { Button } from "@/components/ui/button";
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import LastSeenSection from "@/components/widgets/last-seen-section";
import SimilarSection from "@/components/widgets/similar-section";
import { ChevronDown, ChevronUp, ShoppingBag, Truck } from "lucide-react";
import Image from "next/image";

interface IProps {
	id: string;
}

export default function ProductClient({ id }: IProps) {
	const { products: showcase } = useShowcase();
	const product = showcase.find((item) => item.id === id) || null;

	if (!product) {
		return <span>Product not found!</span>;
	}

	// const data = {
	// 	id: "1",
	// 	title: "Under Armour",
	// 	slug: "basic-under-armour",
	// 	options: {
	// 		color: ["white", "navy"],
	// 		size: [
	// 			{ label: "S", value: "46" },
	// 			{ label: "M", value: "48" },
	// 			{ label: "L", value: "50" },
	// 			{ label: "XL", value: "52" },
	// 		],
	// 	},
	// 	variants: [
	// 		{
	// 			id: "1",
	// 			sku: "HOOD-UA-WHT-S",
	// 			price: 7790,
	// 			stock: 15,
	// 			attributes: { color: "White", size: "S" },
	// 			href: {
	// 				small: "/image-white-240.png",
	// 				medium: "/image-white-480.png",
	// 				large: "/image-white-720.png",
	// 				original: "/image-white-1280.png",
	// 			},
	// 			images: [
	// 				{ id: "1", name: "under-armour-1", path: "/image-white-480.png" },
	// 				{ id: "2", name: "under-armour-2", path: "/image-white-480.png" },
	// 				{ id: "3", name: "under-armour-3", path: "/image-white-480.png" },
	// 				{ id: "4", name: "under-armour-4", path: "/image-white-480.png" },
	// 				{ id: "5", name: "under-armour-5", path: "/image-white-480.png" },
	// 			],
	// 		},
	// 		{
	// 			id: "var-2",
	// 			sku: "HOOD-UA-NAVY",
	// 			price: 7790,
	// 			stock: 0,
	// 			attributes: { color: "Navy", size: "S" },
	// 			href: {
	// 				small: "/image-navy-240.png",
	// 				medium: "/image-navy-480.png",
	// 				large: "/image-navy-720.png",
	// 				original: "/image-navy-1280.png",
	// 			},
	// 			images: [
	// 				{ id: "1", name: "under-armour-1", path: "/image-navy-480.png" },
	// 				{ id: "2", name: "under-armour-2", path: "/image-navy-480.png" },
	// 				{ id: "3", name: "under-armour-3", path: "/image-navy-480.png" },
	// 				{ id: "4", name: "under-armour-4", path: "/image-navy-480.png" },
	// 				{ id: "5", name: "under-armour-5", path: "/image-navy-480.png" },
	// 			],
	// 		},
	// 	],
	// 	currency: "$",
	// };

	return (
		<Main>
			<Section>
				<Container>
					<div className="flex flex-col gap-5">
						<SectionTitle>
							{product.category} {product.title}
						</SectionTitle>
						<div className="flex gap-[60px]">
							<div className="flex flex-wrap rounded-xl overflow-hidden max-w-[780px] w-2/3 flex-1">
								<Image
									src={`/${product.image}`}
									// src={`/image-white-480.png`}
									alt={product.title}
									width={332}
									height={480}
									className="flex flex-col gap-4 w-full h-[347px] object-contain md:w-1/3 md:max-w-[260px] cursor-zoom-in"
								/>
								<Image
									src={`/${product.image}`}
									alt={product.title}
									width={332}
									height={480}
									className="flex flex-col gap-4 w-full h-[347px] object-contain md:w-1/3 md:max-w-[260px] cursor-zoom-in"
								/>
								<Image
									src={`/${product.image}`}
									alt={product.title}
									width={332}
									height={480}
									className="flex flex-col gap-4 w-full h-[347px] object-contain md:w-1/3 md:max-w-[260px] cursor-zoom-in"
								/>
							</div>
							<div className="flex flex-col py-4 gap-6 max-w-[440px] w-full">
								<div className="flex items-center justify-between">
									<h3 className="text-xl font-mono font-medium uppercase tracking-wider leading-lg">
										{product.title}
									</h3>
									<span className="font-sans text-2xl! font-medium text-lg tracking-wider leading-md">
										{product.currency} {product.price / 100 + "0"}
									</span>
								</div>
								<div className="flex flex-col gap-3">
									<span className="text-lg font-medium tracking-wider leading-lg">
										Colors
									</span>
									<div className="flex gap-4">
										<div
											key={product.id}
											className="group/color flex flex-col gap-3 items-center text-black/50 hover:text-black transition-brand"
										>
											<div className="w-[90px] h-[120px] border border-transparent group-hover/color:border-black rounded-md overflow-hidden transition-brand">
												<Image
													// src={`/image-white-240.png`}
													src={`/${product.image}`}
													alt={product.title}
													width={169}
													height={240}
													className="rounded-md"
												/>
											</div>
											<p className="font-mono tracking-wide">{product.color}</p>
										</div>
									</div>
								</div>
								<div className="flex flex-col gap-3">
									<div className="flex flex-col gap-[6px]">
										<span className="text-lg font-medium leading-lg tracking-wider">
											Size
										</span>
										{/* <Select items={data.options.size}>
											<SelectTrigger className="w-full">
												<SelectValue placeholder="Select size" />
											</SelectTrigger>
											<SelectContent>
												<SelectGroup>
													{data.options.size.map((s) => (
														<SelectItem
															key={s.label}
															value={`${s.label} ${s.value}`}
														>
															{s.label} {s.value}
														</SelectItem>
													))}
												</SelectGroup>
											</SelectContent>
										</Select> */}
									</div>
									<div className="relative flex gap-4">
										<Button className="flex-1">
											<ShoppingBag className="size-4 stroke-[1px]" />
											Pack
										</Button>
										<FavoriteButton data={product} inline />
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
