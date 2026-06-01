import { IProduct } from "@/lib/store/ui.store";
import Link from "next/link";
import FastViewButton from "./fast-view-button";

interface IProps {
	data: IProduct;
}

export default function ProductDescription({ data }: IProps) {
	return (
		<div className="flex flex-col gap-4 px-3 pb-3">
			<div className="flex flex-col gap-2 items-start leading-base text-sans uppercase tracking-wider">
				<span>{data.brand.name}</span>
				<Link
					href={`/product/${data.id}/${data.variants[0].id}`}
					className="font-mono font-medium tracking-wider"
				>
					{data.title}
				</Link>
			</div>
			<div className="flex items-center justify-between gap-10">
				<div className="flex flex-col">
					<span className="font-medium text-md text-black/25 line-through tracking-wider leading-md">
						{data.currency} {data.variants[0].oldPrice! / 100 + "0"}
					</span>
					<span className="font-medium text-lg tracking-wider leading-md">
						{data.currency} {data.variants[0].price / 100 + "0"}
					</span>
				</div>
				<FastViewButton data={data} />
			</div>
		</div>
	);
}
