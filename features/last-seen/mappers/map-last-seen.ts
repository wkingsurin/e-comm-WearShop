import { mapProduct } from "@/app/mappers/map-product";
import { LastSeenWithRelations } from "@/types/prisma/product-db-type";
import { IProduct } from "@/types/store/ui.types";

export function mapLastSeen(lastSeen: LastSeenWithRelations) {
    const mappedLastSeenProduct = {
        id: lastSeen.id,
        product: mapProduct(lastSeen.product),
        userId: lastSeen.userId,
        productId: lastSeen.productId,
        viewedAt: lastSeen.viewedAt,
    };

    return mappedLastSeenProduct;
}
