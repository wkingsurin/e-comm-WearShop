import { Prisma } from "@/prisma/generated/prisma/client";
import { lastSeenInclude, productInclude } from "./includes";

export type ProductWithRelations = Prisma.ProductGetPayload<{
    include: typeof productInclude;
}>;

export type CartItemWithRelations = Prisma.CartItemGetPayload<{
    include: {
        variant: {
            include: {
                color: {
                    select: {
                        id: true;
                        name: true;
                        slug: true;
                        images: {
                            take: 1;
                            select: { id: true; src: true };
                        };
                    };
                };
                product: {
                    select: {
                        brand: { select: { name: true; slug: true } };
                        category: { select: { name: true; slug: true } };
                        title: true;
                        currency: true;
                        slug: true;
                    };
                };
            };
        };
    };
}>;

export type LastSeenWithRelations = Prisma.LastSeenProductGetPayload<{
    include: typeof lastSeenInclude;
}>;
