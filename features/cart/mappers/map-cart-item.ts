import { CartItemWithRelations } from "@/types/product-db-type";

export const mapCartItem = (cartItem: CartItemWithRelations) => {
	const color = cartItem.variant.product.productColors.find(
		(color) => color.id === cartItem.variant.colorId
	);

	return {
		id: cartItem.id,
		title: cartItem.variant.product.title,
		slug: cartItem.variant.product.slug,
		currency: cartItem.variant.product.currency,
		cartItemId: cartItem.id,

		variantId: cartItem.variantId,
		sku: cartItem.variant.sku,

		price: cartItem.variant.price,
		oldPrice: cartItem.variant.oldPrice,
		image: color?.images[0].src ?? "",

		selectedColor: { id: cartItem.variant.colorId, value: color?.name ?? "" },
		selectedSize: cartItem.variant.size,

		quantity: cartItem.quantity,

		maxStock: cartItem.variant.stock,

		brandName: cartItem.variant.product.brand.name,
		category: { ...cartItem.variant.product.category },
	};
};
