import ProductClient from "./product-client";

interface IProps {
	params: Promise<{ id: string; variantId: string }>;
}

export default async function ProductPage({ params }: IProps) {
	const { id, variantId } = await params;

	return <ProductClient key={variantId} productId={id} variantId={variantId} />;
}
