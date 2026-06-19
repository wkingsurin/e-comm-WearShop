type ProductColor = {
	code: string;
	color: string;
	images: string[];
};

export function generateVariants(
	prefix: string,
	colors: ProductColor[],
	sizes: string[]
) {
	return colors.flatMap((colorData) =>
		sizes.map((size) => ({
			sku: `${prefix}-${colorData.code}-${size}`,

			price: 7790,

			oldPrice: 9790,

			stock: Math.floor(Math.random() * 10),

			attributes: {
				color: colorData.color,
				size,
			},

			images: colorData.images.map((src) => ({ src })),
		}))
	);
}
