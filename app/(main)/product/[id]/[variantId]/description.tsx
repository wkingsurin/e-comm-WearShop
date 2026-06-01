import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { IProduct, IVariant } from "@/lib/store/ui.store";
import Image from "next/image";
import Link from "next/link";
import { IDetails } from "./product-client";

interface IProps {
	product: IProduct;
	productVariant: IVariant;
	size: string;
	onChangeSize: (value: string) => void;
	detailsData: IDetails[];
}

export default function Description({
	product,
	productVariant,
	size,
	onChangeSize,
	detailsData,
}: IProps) {
	const variantId = productVariant.id;

	return (
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
					onValueChange={(value) => onChangeSize(value as string)}
					value={size}
				>
					<SelectTrigger className="w-full">
						<SelectValue placeholder="Select size" />
					</SelectTrigger>
					<SelectContent>
						<SelectGroup>
							{product.options.size.map((s) => (
								<SelectItem key={s.label} value={`${s.label} ${s.value}`}>
									{s.label} {s.value}
								</SelectItem>
							))}
						</SelectGroup>
					</SelectContent>
				</Select>
			</div>
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
	);
}
