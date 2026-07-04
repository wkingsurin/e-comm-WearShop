import { Prisma } from "@/prisma/generated/prisma/client";

export async function clearCart(tx: Prisma.TransactionClient, cartId: string) {
	await tx.cartItem.deleteMany({ where: { cartId } });
}
