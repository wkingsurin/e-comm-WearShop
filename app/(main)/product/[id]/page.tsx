import ProductClient from "./product-client";

interface IProps {
	params: Promise<{ id: string }>;
}

export default async function ProductPage({ params }: IProps) {
	const { id } = await params;

	return <ProductClient id={id} />;
}
