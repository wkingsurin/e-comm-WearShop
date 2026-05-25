import useCart from "@/components/hooks/useCart";
import FavoriteButton from "@/components/shared/favorite-button";
import { Button } from "@/components/ui/button";
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { useUIStore } from "@/lib/store/ui.store";
import { ArrowLeft, ArrowRight, MoveRight, ShoppingBag, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function FastWatch() {
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

	const target = useUIStore((s) => s.modal.target);

	const { addItem } = useCart();

	return (
		<div
			className="relative flex gap-[60px] max-w-[720px] w-full min-h-[527px] bg-white rounded-xl p-4"
			onClick={(e) => e.stopPropagation()}
		>
			<div className="flex flex-col gap-3 max-w-[320px]">
				<div className="group/product relative h-[384px] bg-[#F4F4F6] rounded-xl">
					<Image
						src={data.variants[0].href.medium}
						alt=""
						width={332}
						height={480}
						className="rounded-xl cursor-zoom-in w-full h-full object-contain"
					/>
					<Button className="absolute top-[calc(50%-16px)] left-3 flex w-8 h-8 rounded-[50%] bg-white opacity-0 hover:bg-white shadow-[0_0_9px_-3px_var(--black)]/50 group-hover/product:opacity-100">
						<ArrowLeft className="size-4 stroke-[1.5px] stroke-black" />
					</Button>
					<Button className="absolute top-[calc(50%-16px)] right-3 flex w-8 h-8 rounded-[50%] bg-white opacity-0 hover:bg-white shadow-[0_0_9px_-3px_var(--black)]/50 group-hover/product:opacity-100">
						<ArrowRight className="size-4 stroke-[1.5px] stroke-black" />
					</Button>
				</div>
				<div className="relative">
					<div className="flex gap-2 overflow-hidden">
						{data.variants[0].images.map((item) => (
							<Link
								href="/"
								key={item.id}
								className="flex min-w-[calc(25%-6px)] w-[calc(25%-6px)] h-[99px] rounded-sm border border-transparent hover:border-black transition-brand"
							>
								<Image
									src={item.path}
									alt={data.title}
									width={332}
									height={480}
									className="rounded-sm"
								/>
							</Link>
						))}
					</div>
					<Button className="opacity-0 pointer-events-none absolute top-[calc(50%-16px)] -left-3 flex w-8 h-8 rounded-[50%] bg-white hover:bg-white shadow-[0_0_9px_-3px_var(--black)]/50">
						<ArrowLeft className="size-4 stroke-[1.5px] stroke-black" />
					</Button>
					<Button className="absolute top-[calc(50%-16px)] -right-3 flex w-8 h-8 rounded-[50%] bg-white hover:bg-white shadow-[0_0_9px_-3px_var(--black)]/50">
						<ArrowRight className="size-4 stroke-[1.5px] stroke-black" />
					</Button>
				</div>
			</div>
			<div className="flex flex-col items-center gap-6 py-4 w-full">
				<div className="flex items-start justify-between w-full">
					<Link
						href="/"
						className="text-xl font-mono font-medium uppercase tracking-wider leading-lg"
					>
						{data.title}
					</Link>
					<span className="font-medium text-2xl tracking-wider leading-md">
						{data.currency} {data.variants[0].price / 100 + "0"}
					</span>
				</div>
				<div className="flex flex-col gap-3 w-full">
					<span className="text-lg font-medium tracking-wider leading-lg">
						Colors
					</span>
					<div className="flex gap-4">
						{data.variants.map((item) => (
							<div
								key={item.id}
								className="group/color flex flex-col gap-3 items-center text-black/50 hover:text-black transition-brand"
							>
								<div className="w-[60px] h-[80px] border border-transparent group-hover/color:border-black rounded-md overflow-hidden transition-brand">
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
				<div className="flex flex-col items-center gap-3 w-full">
					<div className="flex flex-col gap-[6px] w-full">
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
										<SelectItem key={s.label} value={`${s.label} ${s.value}`}>
											{s.label} {s.value}
										</SelectItem>
									))}
								</SelectGroup>
							</SelectContent>
						</Select>
					</div>
					<div className="flex gap-4 w-full">
						<Button className="flex-1" onClick={() => addItem(target!)}>
							<ShoppingBag className="size-4 stroke-[1px]" />
							Pack
						</Button>
						<FavoriteButton data={target!} inline />
					</div>
					<Link
						href="/product-page"
						className="flex items-center justify-center gap-3 opacity-50"
						onClick={() => {
							useUIStore.getState().updateOverlay({ open: false });
							useUIStore.getState().changeModalTyle(null);
						}}
					>
						<p className="tracking-wider leading-md">More details</p>
						<MoveRight className="size-4 stroke-[1.5px]" />
					</Link>
				</div>
			</div>
			<Button
				className="absolute z-10003 top-0 -right-13 w-10 h-10 bg-white rounded-[50%] hover:bg-white hover:shadow-[0_0_9px_-3px_var(--black)]/50"
				onClick={() => {
					useUIStore.getState().updateOverlay({ open: false });
					useUIStore.getState().changeModalTyle(null);
				}}
			>
				<X className="size-4 stroke-[1.5px] stroke-black" />
			</Button>
		</div>
	);
}
