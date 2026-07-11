import { Prisma } from "@/prisma/generated/prisma/client";

export type ProductWithRelations = Prisma.ProductGetPayload<{
    include: {
        brand: { select: { name: true; slug: true } };
        category: { select: { name: true; slug: true } };
        productColors: {
            select: {
                id: true;
                name: true;
                slug: true;
                images: {
                    select: { id: true; src: true };
                };
            };
        };
        variants: {
            where: {
                isActive: true;
            };
            select: {
                id: true;
                sku: true;
                colorId: true;
                size: true;
                stock: true;
                price: true;
                oldPrice: true;
            };
        };
    };
}>;

export type CartItemWithRelations = Prisma.CartItemGetPayload<{
    include: {
        variant: {
            include: {
                product: {
                    include: {
                        brand: { select: { name: true; slug: true } };
                        category: { select: { name: true; slug: true } };
                        productColors: {
                            select: {
                                id: true;
                                name: true;
                                slug: true;
                                images: {
                                    select: { id: true; src: true };
                                };
                            };
                        };
                    };
                };
            };
        };
    };
}>;
