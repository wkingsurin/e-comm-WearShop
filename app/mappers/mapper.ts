import { ICartItem } from "../types/store/cart.types";
import { IProduct, IVariant } from "../types/store/ui.types";

export const mapProductToCartItem = (
	data: IProduct,
	currentVariant: IVariant,
	quantity: ICartItem["quantity"]
) => {
	return {
		id: data.id,
		title: data.title,
		slug: data.slug,
		currency: data.currency,

		cartItemId: `${data.id}-${currentVariant.id}-${currentVariant.attributes.color}-${currentVariant.attributes.size}`,

		variantId: currentVariant.id,
		sku: currentVariant.sku,

		price: currentVariant.price,
		oldPrice: currentVariant.oldPrice,
		image: currentVariant.href.small,

		selectedColor: currentVariant.attributes.color,
		selectedSize: currentVariant.attributes.size,

		quantity,

		maxStock: currentVariant.stock,

		brandName: data.brand.name,
		categorySlug: data.category.slug,
	};
};

export const mapCartItemsToOrder = (data: ICartItem[]) => {
	const totalItemsPrice = data.reduce((acc, item) => {
		return (acc += item.price);
	}, 0);
	const discountAmount = 35;
	const deliveryPrice = 350;
	const totalPrice = totalItemsPrice + discountAmount + deliveryPrice;

	return {
		id: `order-${data.length - 1}`,
		orderNumber: `№ UA-48910-2026`,
		createdAt: Date.now().toLocaleString(),
		updatedAt: Date.now().toLocaleString(),

		user: {
			id: "666",
			firstName: "Jane",
			lastName: "Doe",
			email: "janedoe@example.com",
			phone: "+1234567890",
		},
		deliveryMethod: "courier",
		deliveryAddress: {
			country: "United States",
			city: "Los Angeles",
			street: "15 Avenu",
			house: "37",
		},

		items: data,

		currency: "USD",
		totalItemsPrice,
		discountAmount,
		deliveryPrice,
		totalPrice,

		status: "paid",
		paymentMethod: "sbp",
		isPaid: true,
	};
};

export const mapProductToFavorite = (data: ICartItem | IProduct) => {
	return {
		id: data.id,
		userId: "666",
		productId: data.id,
		createdAt: new Date().toISOString(),
	};
};
