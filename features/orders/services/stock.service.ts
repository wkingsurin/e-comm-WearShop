import { CartItemWithVariant } from "@/features/cart/types";
import { Prisma } from "@/prisma/generated/prisma/client";

export async function decreaseStock(
	tx: Prisma.TransactionClient,
	items: CartItemWithVariant[]
) {
	await Promise.all(
		items.map((item) =>
			tx.variant.update({
				where: { id: item.id },
				data: { stock: { decrement: item.quantity } },
			})
		)
	);
}
