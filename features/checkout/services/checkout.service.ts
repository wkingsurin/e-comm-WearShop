import { prisma } from "@/lib/prisma";
import { DeliveryMethod, PaymentMethod } from "@/prisma/generated/prisma/enums";

export interface UpdateCheckoutDTO {
	address?: string;
	city?: string;
	country?: string;
	postalCode?: string;
	paymentMethod?: PaymentMethod | null;
	deliveryMethod?: DeliveryMethod | null;
}

export async function getCheckout(userId: string) {
	return await prisma.checkout.findUnique({ where: { userId } });
}

export async function updateCheckout(userId: string, data: UpdateCheckoutDTO) {
	return prisma.checkout.upsert({
		where: { userId },
		update: data,
		create: { userId, ...data },
	});
}
