import {
	getColorById,
	getCurrentVariant,
} from "@/lib/selectors/product.selectors";
import { IProduct } from "@/types/store/ui.types";
import { useState } from "react";

export default function useProductSelection(
	product: IProduct,
	options: {
		initialColorId: string;
		initialSize: string;
	}
) {
	const [activeColorId, setActiveColorId] = useState<string>(
		options.initialColorId
	);
	const [selectedSize, setSelectedSize] = useState<string>(options.initialSize);

	const [quantity, setQuantity] = useState<number>(1);

	const currentColor = getColorById(product, activeColorId);
	const currentVariant = getCurrentVariant(
		product,
		activeColorId,
		selectedSize
	);

	const decrementQuantity = () => {
		if (!currentVariant) return;

		setQuantity((prev) =>
			prev <= 1 || currentVariant.stock <= 1 ? prev : prev - 1
		);
	};
	const incrementQuantity = () => {
		if (!currentVariant) return;

		setQuantity((prev) => (prev < currentVariant.stock ? prev + 1 : prev));
	};

	const selectColor = (colorId: string) => {
		if (activeColorId !== colorId) {
			setActiveColorId(colorId);
			setQuantity(1);
		}
	};

	const selectSize = (size: string) => {
		if (selectedSize !== size) {
			setQuantity(1);
			setSelectedSize(size);
		}
	};

	return {
		activeColorId,
		selectedSize,
		quantity,

		currentColor,
		currentVariant,

		selectColor,
		selectSize,

		decrementQuantity,
		incrementQuantity,

		setQuantity,
	};
}
