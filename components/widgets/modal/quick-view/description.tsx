import Link from "next/link";
import ColorSelector from "../../color-selector/color-selector";
import Sizes from "../../size-selector/size-selector";
import { Button } from "@/components/ui/button";
import { Minus, Plus, ShoppingBag } from "lucide-react";
import { useUIStore } from "@/lib/store/ui.store";
import { IColorOption, IProduct, IVariant } from "@/types/store/ui.types";
import PageLink from "./page-link";
import { useAddToCart } from "@/features/cart/hooks/use-add-to-cart";
import { mapProductToCartItem } from "@/app/mappers/mapper";

export default function Description({
	product,
	currentVariant,
	activeColorId,
	selectedSize,
	quantity,
	selectColor,
	selectSize,
	decrementQuantity,
	incrementQuantity,
}: {
	product: IProduct;
	currentColor: IColorOption;
	currentVariant: IVariant;
	activeColorId: string;
	selectedSize: string;
	quantity: number;
	selectColor: (colorId: string) => void;
	selectSize: (size: string) => void;
	decrementQuantity: () => void;
	incrementQuantity: () => void;
}) {
	const { mutate: addToCart } = useAddToCart();

	const selectedColorSlug = product.options.color.find(
		(c) => c.id === activeColorId
	)?.slug;

	if (!selectedColorSlug) return;

	const itemToCart = mapProductToCartItem(product, currentVariant, quantity);

	return (
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
			<ColorSelector
				colors={product.options.color}
				activeColorId={activeColorId}
				changeActiveColorId={selectColor}
				type="Modal"
			/>
			<div className="flex flex-col items-center gap-2 w-full">
				<Sizes
					sizes={product.options.size}
					initialSize={selectedSize}
					onChangeSize={selectSize}
				/>
				<div className="flex gap-4 w-full">
					<div className="group/amount flex rounded-xl bg-white border-[0.5px] border-black/10 hover:border-black/15 hover:shadow-[0_0_9px_-3px_var(--black)]/25 transition-brand">
						<Button
							className="flex gap-3 w-10 h-10 bg-white hover:bg-white"
							onClick={decrementQuantity}
							disabled={quantity <= 1}
						>
							<Minus className="size-4 stroke-[1.5px] stroke-black" />
						</Button>
						<span className="flex items-center justify-center w-10 h-10 font-mono tracking-wider leading-lg">
							{quantity}
						</span>
						<Button
							className="flex gap-3 w-10 h-10 bg-white hover:bg-white"
							onClick={incrementQuantity}
							disabled={quantity === currentVariant.stock}
						>
							<Plus className="size-4 stroke-[1.5px] stroke-black" />
						</Button>
					</div>
					<Button
						className="flex-1"
						disabled={selectedSize === "" ? true : false}
						onClick={() =>
							addToCart({
								variantId: currentVariant.id,
								quantity,
								item: itemToCart,
							})
						}
					>
						<ShoppingBag className="size-4 stroke-[1px]" />
						Pack
					</Button>
				</div>
				<PageLink
					productSlug={product.slug}
					selectedColor={selectedColorSlug}
					selectedSize={selectedSize}
				/>
			</div>
		</div>
	);
}
