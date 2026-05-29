import { IProduct } from "@/lib/store/ui.store";
import Link from "next/link";
import FastShowButton from "./fast-show-button";

interface IProps {
	data: IProduct;
}

export default function ProductDescription({ data }: IProps) {
	return (
		<div className="flex flex-col gap-4">
			<Link
				href="/"
				className="font-mono font-medium uppercase tracking-wider leading-lg"
			>
				{data.title}
			</Link>
			<div className="flex items-center justify-between gap-10">
				<div className="flex flex-col">
					<span className="font-medium text-md text-black/25 line-through tracking-wider leading-md">
						{data.currency} {data.variants[0].oldPrice! / 100 + "0"}
					</span>
					<span className="font-medium text-lg tracking-wider leading-md">
						{data.currency} {data.variants[0].price / 100 + "0"}
					</span>
				</div>
				<FastShowButton data={data} />
			</div>
		</div>
	);
}
