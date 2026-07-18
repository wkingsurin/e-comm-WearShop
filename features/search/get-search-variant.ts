import { IProduct } from "@/types/store/ui.types";

export default function getDefaultVariant(product: IProduct) {
    const available = product.variants.find((v) => v.stock > 0);

    if (available) return available;

    return product.variants[0];
}
