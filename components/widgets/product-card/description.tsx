import Link from "next/link";
import { IProductDescriptionProps } from "@/types/components/widgets/product-card.types";
import { getColorById } from "@/lib/selectors/product.selectors";

export default function Description({
	data,
	defaultVariant,
}: IProductDescriptionProps) {
	const defaultColorId = defaultVariant.attributes.colorId;
	const defaultColor = getColorById(data, defaultColorId)?.slug;
	const defaultSize = defaultVariant.attributes.size;

	return (
		<div className="flex justify-between gap-4 px-3 pb-3">
			<div className="flex flex-col gap-1 items-start leading-base text-sans uppercase tracking-wider">
				<span className="text-black/25">{data.brand.name}</span>
				<Link
					href={`/products/${data.slug}?color=${defaultColor}&size=${defaultSize}`}
					className="font-medium tracking-wider leading-md hover:underline"
				>
					{data.title}
				</Link>
			</div>
			<div className="flex items-end gap-10">
				<div className="flex flex-col items-end">
					<span className="font-medium text-md text-black/25 line-through tracking-wider leading-md">
						{data.currency} {defaultVariant.oldPrice! / 100 + "0"}
					</span>
					<span className="font-medium text-lg tracking-wider leading-md">
						{data.currency} {defaultVariant.price / 100 + "0"}
					</span>
				</div>
			</div>
		</div>
	);
}
