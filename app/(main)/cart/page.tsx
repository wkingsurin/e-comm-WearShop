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
import ProductCard from "@/components/widgets/product-card";
import {
	ChevronDown,
	ChevronUp,
	Heart,
	Minus,
	Plus,
	RefreshCcw,
	ShoppingBag,
	Trash2,
	Truck,
	Undo,
} from "lucide-react";
import Image from "next/image";

export default function Cart() {
	const data: {
		id: string;
		title: string;
		image: string;
		category: string;
		size: string;
		color: string;
		price: number;
		currency: string;
	}[] = [
		{
			id: "1",
			title: "UNDER ARMOUR",
			image: "image-white-240.png",
			category: "Hoodie",
			size: "M",
			color: "White",
			price: 11990,
			currency: "$",
		},
		{
			id: "2",
			title: "UNDER ARMOUR",
			image: "image-white-240.png",
			category: "Hoodie",
			size: "M",
			color: "White",
			price: 11990,
			currency: "$",
		},
	];

	const payments: { id: string; label: string; image: string }[] = [
		{ id: "1", label: "PayPal", image: "image-pay-1.png" },
		{ id: "2", label: "Visa", image: "image-pay-2.png" },
		{ id: "3", label: "Mastercard", image: "image-pay-3.png" },
	];

	return (
		<Main>
			<Section>
				<Container>
					<div className="flex flex-col gap-5">
						<SectionTitle>Cart</SectionTitle>
						<div className="flex gap-5">
							<div className="flex flex-col gap-3 w-3/4 p-4 rounded-lg border border-black/10 bg-[#D9D9D9]/10">
								<div className="flex items-center justify-between">
									<span className="text-xl font-medium tracking-wider">
										Delivery
									</span>
									<div className="h-7 rounded-md font-medium px-3 py-[3px] bg-black/5 leading-lg">
										Tue, 5/26 - Sat, 5/30
									</div>
								</div>
								<div className="flex flex-col gap-3">
									{data.map((item) => (
										<div
											key={item.id}
											className="flex gap-[30px] bg-black/5 hover:bg-black/10 rounded-xl p-[3px] pr-[18px] overflow-hidden transition-brand"
										>
											<div className="relative w-[160px] h-[192px] bg-[#F4F4F6] rounded-md">
												<Image
													src={`/${item.image}`}
													alt={item.title}
													width={169}
													height={240}
													className="rounded-md w-full h-full object-contain cursor-zoom-in"
												/>
												<Button
													size="icon-lg"
													className="group/tag absolute top-[6px] right-[6px] bg-black/10 backdrop-blur-[12px] hover:bg-[#EC0404]/10"
												>
													<Heart className="size-5 stroke-black stroke-[1.5px] group-hover/tag:stroke-[#EC0404] group-hover/tag:fill-[#EC0404]" />
												</Button>
											</div>
											<div className="flex gap-[60px] justify-between flex-1 py-3">
												<div className="flex flex-col items-start justify-between">
													<div className="flex flex-col gap-[6px] font-mono">
														<span className="font-medium text-lg leading-lg tracking-wider">
															{item.title}
														</span>
														<p className="tracking-wider leading-lg">
															{item.category}
														</p>
														<p className="tracking-wider leading-lg">
															{item.size}
														</p>
														<p className="tracking-wider leading-lg">
															{item.color}
														</p>
													</div>

													<div className="group/amount flex rounded-xl bg-white border-[0.5px] border-black/10 hover:border-black/15 hover:shadow-[0_0_9px_-3px_var(--black)]/25 transition-brand">
														<Button className="flex gap-3 w-10 h-10 bg-white hover:bg-white">
															<Minus className="size-4 stroke-[1.5px] stroke-black" />
														</Button>
														<span className="flex items-center justify-center w-10 h-10 font-mono tracking-wider leading-lg">
															1
														</span>
														<Button className="flex gap-3 w-10 h-10 bg-white hover:bg-white">
															<Plus className="size-4 stroke-[1.5px] stroke-black" />
														</Button>
													</div>
												</div>
												<div className="flex flex-col justify-between items-end">
													<Button className="group/cancel flex gap-3 w-10 h-10 bg-black/10 hover:bg-[#EC0404]/10 text-black hover:text-[#EC0404]/75">
														<Trash2 className="size-4 stroke-[1.5px] stroke-black group-hover/cancel:stroke-[#EC0404]/75 transition-brand" />
													</Button>
													<span className="font-medium text-lg tracking-wider leading-md">
														{item.currency} {item.price / 100 + "0"}
													</span>
												</div>
											</div>
										</div>
									))}
								</div>
							</div>
							<div className="flex flex-col gap-5 w-1/4">
								<div className="flex flex-col gap-4 min-h-[188px] bg-[#D9D9D9]/10 rounded-xl border-[0.5px] border-black/10 p-4">
									<div className="flex flex-col gap-3">
										<div className="flex justify-between font-medium tracking-wider leading-lg">
											<span>Total</span>
											<p>$ 239.80</p>
										</div>
										<div className="flex justify-between font-medium tracking-wider leading-lg">
											<span>Shipping & Service</span>
											<p>$ 0.00</p>
										</div>
									</div>
									<div className="flex justify-between font-medium tracking-wider leading-lg text-xl font-medium text-wider">
										<span>Total</span>
										<p>$ 239.80</p>
									</div>
									<Button>Proceed to checkout</Button>
								</div>
								<div className="flex flex-col gap-3 min-h-[94px] bg-[#D9D9D9]/10 rounded-xl border-[0.5px] border-black/10 p-4">
									<span>Available payments</span>
									<div className="flex gap-[6px]">
										{payments.map((item) => (
											<div
												key={item.id}
												className="flex items-center justify-center rounded-md bg-black/5 border-[0.5px] border-black/10 w-1/3 h-7"
											>
												<Image
													src={`/${item.image}`}
													alt={item.label}
													width={62}
													height={16}
													className="h-4 object-contain"
												/>
											</div>
										))}
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
