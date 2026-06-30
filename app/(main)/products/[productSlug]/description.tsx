import { IDetails } from "./product-client";
import { IProduct, IVariant } from "@/types/store/ui.types";
import { useMemo } from "react";
import ColorSelector from "@/components/widgets/color-selector/color-selector";
import SizeSelector from "@/components/widgets/size-selector/size-selector";

interface IProps {
	product: IProduct;
	currentVariant: IVariant;
	detailsData: IDetails[];
	activeColorId: string;
}

export default function Description({
	product,
	currentVariant,
	detailsData,
	activeColorId,
}: IProps) {
	const colors = product.options.color;

	const availableSizes = useMemo(() => {
		return product.options.size.map((size) => ({
			value: size.value,
			isAvailable: product.variants.some(
				(variant) =>
					variant.attributes.colorId === activeColorId &&
					variant.attributes.size === size.value &&
					variant.stock > 0
			),
		}));
	}, [product, activeColorId]);
	const defaultSize = currentVariant.attributes.size;

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

			<ColorSelector colors={colors} type="Page" defaultSize={defaultSize} />

			<SizeSelector
				sizes={availableSizes}
				initialSize={currentVariant.attributes.size}
			/>
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
