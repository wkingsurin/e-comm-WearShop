import { mapProduct } from "@/app/mappers/map-product";
import { getDefaultVariant } from "@/lib/selectors/product.selectors";
import { ProductWithRelations } from "@/types/prisma/product-db-type";

export default function mapSearchProduct(product: ProductWithRelations) {
    const mapped = mapProduct(product);

    const prviewVariant = getDefaultVariant(mapped);

    return {
        id: mapped.id,
        title: mapped.title,
        slug: mapped.slug,
        brand: mapped.brand,
        category: mapped.category,

        prviewVariant,
    };
}
