import { mapProductToCartItem } from "@/app/mappers/mapper";
import { IProduct } from "@/app/types/store/ui.types";
import useCart from "@/components/hooks/useCart";
import useShowcase from "@/components/hooks/useShowcase";
import CarouselSpacing from "@/components/shared/carousel-spacing";
import { Button } from "@/components/ui/button";
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { useSimilarStore } from "@/lib/store/similar.store";
import { useUIStore } from "@/lib/store/ui.store";
import {
	ArrowLeft,
	ArrowRight,
	Minus,
	MoveRight,
	Plus,
	ShoppingBag,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Modal from "./modal";

export default function FastView() {
	const { addItem } = useCart();
	const { products: showcase } = useShowcase();
	const product = useUIStore((s) => s.modal.target as IProduct);

	const [variantIndex, setVariantIndex] = useState<number>(0);
	const [size, setSize] = useState<string>("");

	const [quantity, setQuantity] = useState<number>(1);

	const [activeImageIndex, setActiveImageIndex] = useState<number>(0);
	const selectImage = (index: number) =>
		setActiveImageIndex((prevIndex) =>
			prevIndex === index ? prevIndex : index
		);

	if (!product) return null;

	const currentVariant = product.variants[variantIndex];
	const selectedSizeLabel = size.split(" ")[0];

	const decrementItem = () =>
		setQuantity((prevQty) =>
			prevQty <= 1 || currentVariant.stock <= 1 ? prevQty : prevQty - 1
		);
	const incrementItem = () =>
		setQuantity((prevQty) =>
			prevQty < currentVariant.stock ? prevQty + 1 : prevQty
		);

	const prevImage = () =>
		setActiveImageIndex((prevIndex) =>
			prevIndex > 0 ? prevIndex - 1 : prevIndex
		);
	const nextImage = () =>
		setActiveImageIndex((prevIndex) =>
			prevIndex < currentVariant.images.length - 1 ? prevIndex + 1 : prevIndex
		);

	const changeVariant = (index: number) => {
		setVariantIndex(index);
		setActiveImageIndex(0);
	};
	const changeSize = (targetSize: string) => {
		setSize(targetSize);
	};

	const dynamicVariant = {
		...currentVariant,
		attributes: { ...currentVariant.attributes, size: selectedSizeLabel },
	};

	const itemToCart = mapProductToCartItem(product, dynamicVariant, quantity);

	return (
		<Modal className="w-full">
			<div className="relative flex items-start gap-[60px] max-w-[720px] w-full">
				<div className="flex flex-col gap-3 max-w-[320px] w-full">
					<div className="group/product relative flex items-center justify-center w-[320px] h-[384px] bg-[#F4F4F6] rounded-xl">
						<Image
							src={currentVariant.images[activeImageIndex].src}
							alt={product.title}
							width={332}
							height={480}
							className={`rounded-xl cursor-zoom-in ${
								activeImageIndex === 0
									? "w-[220px] h-[318px] object-contain"
									: "w-full h-full object-cover"
							}`}
						/>
						<Button
							className={`absolute top-[calc(50%-16px)] left-3 flex w-8 h-8 rounded-[50%] bg-white opacity-0 hover:bg-white shadow-[0_0_9px_-3px_var(--black)]/50 ${
								activeImageIndex > 0 && currentVariant.images.length > 1
									? "group-hover/product:opacity-100"
									: "pointer-events-none"
							}`}
							onClick={prevImage}
						>
							<ArrowLeft className="size-4 stroke-[1.5px] stroke-black" />
						</Button>
						<Button
							className={`absolute top-[calc(50%-16px)] right-3 flex w-8 h-8 rounded-[50%] bg-white opacity-0 hover:bg-white shadow-[0_0_9px_-3px_var(--black)]/50 ${
								activeImageIndex < currentVariant.images.length - 1 &&
								currentVariant.images.length > 1
									? "group-hover/product:opacity-100"
									: "pointer-events-none"
							}`}
							onClick={nextImage}
						>
							<ArrowRight className="size-4 stroke-[1.5px] stroke-black" />
						</Button>
					</div>
					<CarouselSpacing
						data={currentVariant}
						activeIndex={activeImageIndex}
						onSelect={selectImage}
					/>
				</div>
				<div className="flex flex-col items-center gap-6 w-full">
					<div className="flex flex-col gap-2 w-full">
						<div className="flex items-start justify-between w-full">
							<Link
								href={`/product/${product.id}/${product.variants[0].id}`}
								className="text-xl font-mono font-medium uppercase tracking-wider leading-md hover:underline"
								onClick={() => {
									useUIStore.getState().updateOverlay({ open: false });
									useUIStore.getState().changeModalType(null);
								}}
							>
								{product.brand.name}
							</Link>
							<span className="font-medium text-xl tracking-wider leading-md">
								{product.currency} {currentVariant.price / 100 + "0"}
							</span>
						</div>
						<span>{product.title}</span>
					</div>
					<div className="flex flex-col gap-2 w-full">
						<span className="font-medium tracking-wider leading-lg">
							Colors
						</span>
						<div className="flex gap-3">
							{product.variants.map((variant, index) => {
								const isCurrentColorActive = variantIndex === index;

								return (
									<div
										key={variant.id}
										data-id={variant.attributes.color}
										className={`group/color flex flex-col gap-1 items-center text-black/50 hover:text-black transition-brand ${
											isCurrentColorActive && "text-black!"
										}`}
										onClick={() => {
											changeVariant(index);
											setQuantity(1);
										}}
									>
										<div
											className={`relative flex items-center justify-center w-[60px] h-[80px] border border-transparent group-hover/color:border-black bg-[#F4F4F6] rounded-md overflow-hidden transition-brand ${
												isCurrentColorActive && "border-black!"
											}`}
										>
											<div
												className={`absolute w-full h-full ${
													isCurrentColorActive
														? "bg-black/10"
														: "bg-transparent"
												}`}
											></div>
											<Image
												src={variant.images[0].src}
												alt={product.title}
												width={169}
												height={240}
												className="rounded-md w-[49px] h-[70px] object-contain"
											/>
										</div>
										<p className="text-md font-mono tracking-wide">
											{variant.attributes.color}
										</p>
									</div>
								);
							})}
						</div>
					</div>
					<div className="flex flex-col items-center gap-2 w-full">
						<div className="flex flex-col gap-2 w-full">
							<span className="font-medium leading-lg tracking-wider">
								Size
							</span>
							<Select
								items={product.options.size}
								value={size}
								onValueChange={(value) => {
									if (!value) return;

									changeSize(value);
								}}
							>
								<SelectTrigger
									className="w-full border-[0.5px] border-black/10 hover:border-black/15 hover:shadow-[0_0_9px_-3px_var(--black)]/25 transition-brand"
									data-id={size}
									value={size}
								>
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
						<div className="flex gap-4 w-full">
							<div className="group/amount flex rounded-xl bg-white border-[0.5px] border-black/10 hover:border-black/15 hover:shadow-[0_0_9px_-3px_var(--black)]/25 transition-brand">
								<Button
									className="flex gap-3 w-10 h-10 bg-white hover:bg-white"
									onClick={decrementItem}
									disabled={quantity <= 1}
								>
									<Minus className="size-4 stroke-[1.5px] stroke-black" />
								</Button>
								<span className="flex items-center justify-center w-10 h-10 font-mono tracking-wider leading-lg">
									{quantity}
								</span>
								<Button
									className="flex gap-3 w-10 h-10 bg-white hover:bg-white"
									onClick={incrementItem}
									disabled={quantity === currentVariant.stock}
								>
									<Plus className="size-4 stroke-[1.5px] stroke-black" />
								</Button>
							</div>
							<Button
								className="flex-1"
								disabled={size === "" ? true : false}
								onClick={() => addItem(itemToCart)}
							>
								<ShoppingBag className="size-4 stroke-[1px]" />
								Pack
							</Button>
						</div>
						<Link
							href={`/product/${[product.id]}/${dynamicVariant.id}`}
							className="flex items-center justify-center gap-3 opacity-50"
							onClick={() => {
								useUIStore.getState().updateOverlay({ open: false });
								useUIStore.getState().changeModalType(null);
								useSimilarStore
									.getState()
									.computeSimilarProducts(product, currentVariant, showcase);
							}}
						>
							<p className="tracking-wider leading-md">More details</p>
							<MoveRight className="size-4 stroke-[1.5px]" />
						</Link>
					</div>
				</div>
			</div>
		</Modal>
	);
}
