import { Prisma } from "@/prisma/generated/prisma/client";

export type ProductWithRelations = Prisma.ProductGetPayload<{
	include: {
		brand: true;
		category: true;
		productColors: {
			include: { images: true };
		};
		variants: true;
	};
}>;
