"use client";

import { mapProductToFavorite } from "@/app/mappers/mapper";
import { IOrderProps } from "@/app/types/orders.types";
import { useFavorites } from "@/components/hooks/useFavorites";
import { Button } from "@/components/ui/button";
import { useUIStore } from "@/lib/store/ui.store";
import { ChevronDown, Heart, RefreshCcw, Undo } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export default function Order({ data }: IOrderProps) {
	const [open, setOpen] = useState<boolean>(false);

	const { isFavorite, toggleFavorite } = useFavorites();

	const orderItems = data.items;

	const updateOverlay = useUIStore((s) => s.updateOverlay);
	const updateModalTarget = useUIStore((s) => s.updateModalTarget);
	const changeModalType = useUIStore((s) => s.changeModalType);

	const cancelOrder = () => {
		updateOverlay({ open: true });
		updateModalTarget(data);
		changeModalType("CancelOrder");
	};

	const orderAgain = (id: string) => {
		console.log(`Order again [Item ID]: ${id}`);
	};

	return (
		<div
			className={`flex flex-col gap-3 w-full ${
				open ? "min-h-[492px]" : "min-h-[72px]"
			} p-4 rounded-lg border border-black/10 bg-[#D9D9D9]/10 transition-brand`}
		>
			<div className="flex justify-between">
				<div className="flex items-center gap-4">
					<span className="flex items-center font-sans font-medium text-xl tracking-wider">
						Order
					</span>
					<span className="flex items-center font-mono font-medium italic">
						№ UA-48910-2026
					</span>
					<span className="flex items-center h-[30px] px-3 rounded-[50px] bg-black/75 text-white tracking-wide leading-base">
						In delivery
					</span>
				</div>
				<div className="flex gap-3">
					<div className="flex items-center rounded-xl font-medium px-3 py-[3px] bg-black/5 leading-lg">
						Tue, 5/26 - Sat, 5/30
					</div>
					<Button
						className="group/cancel flex gap-3 bg-black/10 hover:bg-[#EC0404]/10 text-black hover:text-[#EC0404]/75"
						onClick={(e) => {
							e.stopPropagation();
							cancelOrder();
						}}
					>
						Cancel
						<Undo className="size-4 stroke-[1.5px] stroke-black group-hover/cancel:stroke-[#EC0404]/75 transition-brand" />
					</Button>
					<Button
						className="w-10 h-10 bg-black/15 hover:bg-black/25"
						onClick={() => setOpen((prev) => !prev)}
					>
						<ChevronDown className={`size-4 stroke-[1.5px] stroke-black`} />
					</Button>
				</div>
			</div>
			{open && (
				<>
					<div className="flex justify-between">
						<span className="text-lg font-medium tracking-wider leading-lg">
							Goods:
						</span>
						<span className="text-lg font-medium tracking-wider leading-lg">
							$ {data.totalItemsPrice / 100 + "0"}
						</span>
					</div>
					<div className="flex flex-col gap-3">
						{orderItems.map((item) => {
							const isFav = isFavorite(item.id);
							const favData = mapProductToFavorite(item);

							return (
								<div
									key={item.id}
									className="flex gap-[30px] bg-black/5 hover:bg-black/10 rounded-xl p-[3px] pr-[18px] overflow-hidden transition-brand"
								>
									<div className="relative w-[160px] h-[192px] bg-[#F4F4F6] rounded-md">
										<Image
											src={item.image}
											alt={item.title}
											width={169}
											height={240}
											className="rounded-md w-full h-full object-contain cursor-zoom-in"
										/>
										<Button
											size="icon-lg"
											className={`group/tag absolute top-[6px] right-[6px] bg-black/10 backdrop-blur-[12px] hover:bg-[#EC0404]/10 ${
												isFav && "bg-[#EC0404]/10"
											}`}
											onClick={() => toggleFavorite(favData)}
										>
											<Heart
												className={`size-5 stroke-black stroke-[1.5px] group-hover/tag:stroke-[#EC0404] group-hover/tag:fill-[#EC0404] ${
													isFav && "fill-[#EC0404] stroke-[#EC0404]!"
												}`}
											/>
										</Button>
									</div>
									<div className="flex gap-[60px] justify-between flex-1 py-3">
										<div className="flex flex-col justify-between">
											<div className="flex flex-col gap-[6px] font-mono">
												<span className="font-medium text-lg leading-lg tracking-wider">
													{item.title}
												</span>
												<p className="tracking-wider leading-lg">
													{/* {product.category.name} */}
												</p>
												{/* <p className="tracking-wider leading-lg">{size}</p> */}
												{/* <p className="tracking-wider leading-lg">{color}</p> */}
											</div>

											<Button
												className="flex gap-3"
												onClick={() => orderAgain(item.id)}
											>
												<RefreshCcw className="size-4 stroke-[1.5px] stroke-white" />
												Order again
											</Button>
										</div>
										<div className="flex flex-col justify-between items-end">
											<span className="font-medium text-lg tracking-wider leading-md">
												{/* {product.currency} {currentVariant!.price / 100 + "0"} */}
											</span>
										</div>
									</div>
								</div>
							);
						})}
					</div>
				</>
			)}
		</div>
	);
}
