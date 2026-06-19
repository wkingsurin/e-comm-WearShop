import { useUIStore } from "@/lib/store/ui.store";
import Modal from "../modal";
import { IProduct } from "@/types/store/ui.types";
import useProductSelection from "./use-product-selection";
import Description from "./description";
import Carousel from "./carousel";

export default function QuickView() {
	const product = useUIStore((s) => s.modal.target.product as IProduct);
	const variantId = useUIStore((s) => s.modal.target.variantId);
	const defaultVariant = product.variants.find(
		(variant) => variant.id === variantId
	);
	const defaultColorId = defaultVariant?.attributes.colorId;
	const defaultSize = defaultVariant?.attributes.size;

	const {
		currentColor,
		currentVariant,
		activeColorId,
		selectedSize,
		quantity,
		selectColor,
		selectSize,
		decrementQuantity,
		incrementQuantity,
	} = useProductSelection(product, {
		initialColorId: defaultColorId!,
		initialSize: defaultSize!,
	});

	if (!product || !currentColor || !currentVariant) return null;

	return (
		<Modal className="w-full">
			<div className="relative flex items-start gap-[60px] max-w-[720px] w-full">
				<Carousel
					key={currentColor.id}
					productTitle={product.title}
					images={currentColor.images}
				/>
				<Description
					product={product}
					currentColor={currentColor}
					currentVariant={currentVariant}
					activeColorId={activeColorId}
					selectedSize={selectedSize}
					quantity={quantity}
					selectColor={selectColor}
					selectSize={selectSize}
					decrementQuantity={decrementQuantity}
					incrementQuantity={incrementQuantity}
				/>
			</div>
		</Modal>
	);
}
