import { Button } from "@/components/ui/button";
import { Heart, RefreshCcw, Undo } from "lucide-react";
import Image from "next/image";

export default function Orders() {
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

	return (
		<div className="flex flex-col gap-3 w-full p-4 rounded-lg border border-black/10 bg-[#D9D9D9]/10">
			<div className="flex items-center justify-between">
				<span className="text-xl font-medium tracking-wider">Delivery</span>
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
							<div className="flex flex-col justify-between">
								<div className="flex flex-col gap-[6px] font-mono">
									<span className="font-medium text-lg leading-lg tracking-wider">
										{item.title}
									</span>
									<p className="tracking-wider leading-lg">{item.category}</p>
									<p className="tracking-wider leading-lg">{item.size}</p>
									<p className="tracking-wider leading-lg">{item.color}</p>
								</div>

								<Button className="flex gap-3">
									<RefreshCcw className="size-4 stroke-[1.5px] stroke-white" />
									Order again
								</Button>
							</div>
							<div className="flex flex-col justify-between items-end">
								<Button className="group/cancel flex gap-3 bg-black/10 hover:bg-[#EC0404]/10 text-black hover:text-[#EC0404]/75">
									Cancel
									<Undo className="size-4 stroke-[1.5px] stroke-black group-hover/cancel:stroke-[#EC0404]/75 transition-brand" />
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
	);
}
