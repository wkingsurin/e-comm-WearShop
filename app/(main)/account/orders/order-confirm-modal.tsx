import { IOrderProps } from "@/types/orders.types";
import Image from "next/image";

export default function OrderConfirmModal({ data }: IOrderProps) {
	return (
		<>
			<div className="flex items-center gap-4">
				<span className="flex items-center font-sans font-medium text-xl tracking-wider">
					Order
				</span>
				<span className="flex items-center font-mono font-medium italic">
					{data.orderNumber}
				</span>
				<span className="flex items-center h-[30px] px-3 rounded-[50px] bg-black/75 text-white tracking-wide leading-base">
					In delivery
				</span>
			</div>
			<div className="flex flex-col gap-3">
				<div className="flex justify-between">
					<span className="tracking-wider leading-base">Goods:</span>
					<p className="font-medium tracking-wider leading-base">
						$ {data.totalItemsPrice / 100 + "0"}
					</p>
				</div>
				<div className="flex gap-2">
					{data.items.map((item) => {
						return (
							<div
								key={item.id}
								className="flex items-center justify-center w-[75px] h-[100px] bg-[#F5F5F5] rounded-md"
							>
								<Image
									src={item.image}
									alt={item.title}
									width={55}
									height={62}
									className="w-[55px] h-[80x] object-contain"
								/>
							</div>
						);
					})}
				</div>
			</div>
		</>
	);
}
