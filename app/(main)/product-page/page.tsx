import Main from "@/components/main";
import Container from "@/components/shared/container";
import Section from "@/components/shared/section";
import SectionTitle from "@/components/shared/section-title";
import SortSelect from "@/components/shared/sort-select";
import { Button } from "@/components/ui/button";
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import ProductCard from "@/components/widgets/product-card/product-card";
import {
	ChevronDown,
	ChevronUp,
	Heart,
	ShoppingBag,
	Truck,
} from "lucide-react";
import Image from "next/image";

export default function ProductPage() {
	const data = {
		id: "prod-111",
		title: "Under Armour",
		slug: "basic-under-armour",
		options: {
			color: ["white", "navy"],
			size: [
				{ label: "S", value: "46" },
				{ label: "M", value: "48" },
				{ label: "L", value: "50" },
				{ label: "XL", value: "52" },
			],
		},
		variants: [
			{
				id: "var-1",
				sku: "HOOD-UA-WHT-S",
				price: 7790,
				stock: 15,
				attributes: { color: "White", size: "S" },
				href: {
					small: "/image-white-240.png",
					medium: "/image-white-480.png",
					large: "/image-white-720.png",
					original: "/image-white-1280.png",
				},
				images: [
					{ id: "1", name: "under-armour-1", path: "/image-white-480.png" },
					{ id: "2", name: "under-armour-2", path: "/image-white-480.png" },
					{ id: "3", name: "under-armour-3", path: "/image-white-480.png" },
					{ id: "4", name: "under-armour-4", path: "/image-white-480.png" },
					{ id: "5", name: "under-armour-5", path: "/image-white-480.png" },
				],
			},
			{
				id: "var-2",
				sku: "HOOD-UA-NAVY",
				price: 7790,
				stock: 0,
				attributes: { color: "Navy", size: "S" },
				href: {
					small: "/image-navy-240.png",
					medium: "/image-navy-480.png",
					large: "/image-navy-720.png",
					original: "/image-navy-1280.png",
				},
				images: [
					{ id: "1", name: "under-armour-1", path: "/image-navy-480.png" },
					{ id: "2", name: "under-armour-2", path: "/image-navy-480.png" },
					{ id: "3", name: "under-armour-3", path: "/image-navy-480.png" },
					{ id: "4", name: "under-armour-4", path: "/image-navy-480.png" },
					{ id: "5", name: "under-armour-5", path: "/image-navy-480.png" },
				],
			},
		],
		currency: "$",
	};

	return (
		<Main>
			<Section>
				<Container>
					<div className="flex flex-col gap-5">
						<SectionTitle>Hoodie UNDER ARMOUR</SectionTitle>
						<div className="flex gap-[60px]">
							<div className="flex flex-wrap rounded-xl overflow-hidden max-w-[780px]">
								{data.variants[0].images.map((item) => (
									<Image
										key={item.id}
										src={item.path}
										alt={item.name}
										width={332}
										height={480}
										className="flex flex-col gap-4 w-full md:w-1/3 md:max-w-[260px] cursor-zoom-in"
									/>
								))}
							</div>
							<div className="flex flex-col py-4 gap-6 flex-1">
								<div className="flex items-center justify-between">
									<h3 className="text-xl font-mono font-medium uppercase tracking-wider leading-lg">
										UNDER ARMOUR
									</h3>
									<span className="font-sans text-2xl! font-medium text-lg tracking-wider leading-md">
										{data.currency} {data.variants[0].price / 100 + "0"}
									</span>
								</div>
								<div className="flex flex-col gap-3">
									<span className="text-lg font-medium tracking-wider leading-lg">
										Colors
									</span>
									<div className="flex gap-4">
										{data.variants.map((item) => (
											<div
												key={item.id}
												className="group/color flex flex-col gap-3 items-center text-black/50 hover:text-black transition-brand"
											>
												<div className="w-[90px] h-[120px] border border-transparent group-hover/color:border-black rounded-md overflow-hidden transition-brand">
													<Image
														src={item.href.small}
														alt={data.title}
														width={169}
														height={240}
														className="rounded-md"
													/>
												</div>
												<p className="font-mono tracking-wide">
													{item.attributes.color}
												</p>
											</div>
										))}
									</div>
								</div>
								<div className="flex flex-col gap-3">
									<div className="flex flex-col gap-[6px]">
										<span className="text-lg font-medium leading-lg tracking-wider">
											Size
										</span>
										<Select items={data.options.size}>
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
										</Select>
									</div>
									<div className="flex gap-4">
										<Button className="flex-1">
											<ShoppingBag className="size-4 stroke-[1px]" />
											Pack
										</Button>
										<Button
											variant="link"
											className="group/fav bg-black/10 w-10 hover:bg-[#EC0404]/10"
										>
											<Heart className="size-4 stroke-[1.5px] stroke-black group-hover/fav:stroke-[#EC0404] group-hover/fav:fill-[#EC0404]" />
										</Button>
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
			<Section>
				<Container>
					<div className="flex flex-col gap-5">
						<div className="flex flex-col gap-[6px]">
							<span className="uppercase font-medium text-black/50 tracking-wider">
								You might also like
							</span>
							<div className="flex items-center justify-between">
								<SectionTitle>Similar products</SectionTitle>
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
