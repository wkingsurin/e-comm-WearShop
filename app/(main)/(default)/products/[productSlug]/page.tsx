import ProductClient from "./product-client";
import { getProduct } from "../../../../../lib/get-product";
import LastSeenSection from "@/features/last-seen/components/last-seen-section";

interface IProps {
    params: Promise<{ productSlug: string }>;
    searchParams: Promise<{ [key: string]: string }>;
}

export default async function ProductPage({ params }: IProps) {
    const { productSlug } = await params;

    const product = await getProduct({ productSlug });
    if (!product) return;

    return (
        <>
            <ProductClient key={productSlug} product={product} />
            <LastSeenSection />
        </>
    );
}
