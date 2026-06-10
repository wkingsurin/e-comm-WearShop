import Link from "next/link";
import { IProductDescriptionProps } from "@/app/types/components/widgets/product-card.types";

export default function ProductDescription({ data }: IProductDescriptionProps) {
	return (
		<div className="flex justify-between gap-4 px-3 pb-3">
			<div className="flex flex-col gap-1 items-start leading-base text-sans uppercase tracking-wider">
				<span className="text-black/25">{data.brand.name}</span>
				<Link
					href={`/product/${data.id}/${data.variants[0].id}`}
					className="font-medium tracking-wider leading-md hover:underline"
				>
					{data.title}
				</Link>
			</div>
			<div className="flex items-end gap-10">
				<div className="flex flex-col items-end">
					<span className="font-medium text-md text-black/25 line-through tracking-wider leading-md">
						{data.currency} {data.variants[0].oldPrice! / 100 + "0"}
					</span>
					<span className="font-medium text-lg tracking-wider leading-md">
						{data.currency} {data.variants[0].price / 100 + "0"}
					</span>
				</div>
			</div>
		</div>
	);
}
