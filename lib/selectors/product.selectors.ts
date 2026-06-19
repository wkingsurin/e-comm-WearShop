import { IProduct } from "@/types/store/ui.types";

export function getDefaultVariant(product: IProduct) {
	return (
		product.variants.find((variant) => variant.stock > 0) ?? product.variants[0]
	);
}
export function getCurrentVariant(
	product: IProduct,
	selectedColorId: string,
	selectedSize: string
) {
	return product.variants.find(
		(variant) =>
			variant.attributes.colorId === selectedColorId &&
			variant.attributes.size === selectedSize
	);
}

export function getColorById(product: IProduct, colorId: string) {
	return product.options.color.find((c) => c.id === colorId);
}
export function getColorBySlug(product: IProduct, colorSlug: string) {
	return product.options.color.find((c) => c.slug === colorSlug);
}