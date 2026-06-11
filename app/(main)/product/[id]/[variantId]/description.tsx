import { IDetails } from "./product-client";
import { IProduct, IVariant } from "@/types/store/ui.types";
import Colors from "@/components/widgets/colors/colors";
import Sizes from "@/components/widgets/sizes/sizes";

interface IProps {
	product: IProduct;
	productVariant: IVariant;
	size: string;
	onChangeSize: (value: string) => void;
	detailsData: IDetails[];
}

export default function Description({
	product,
	size,
	onChangeSize,
	detailsData,
}: IProps) {
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

			<Colors product={product} type="Page" />

			<Sizes product={product} onChangeSize={onChangeSize} initialSize={size} />
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
