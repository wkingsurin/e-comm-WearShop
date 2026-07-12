import { prisma } from "@/lib/prisma";
import { OrderStatus } from "@/prisma/generated/prisma/enums";
import { canChangeOrderStatus, ORDER_STATUS } from "../constants";
import { Prisma } from "@/prisma/generated/prisma/client";

export async function updateOrderStatus(
    tx: Prisma.TransactionClient,
    orderId: string,
    status: OrderStatus,
) {
    switch (status) {
        case "PAID":
            break;

        case "PROCESSING":
            break;

        case "SHIPPED":
            break;

        case "DELIVERED":
            break;

        case "CANCELLED":
            break;
    }

    return tx.order.update({
        where: { id: orderId },
        data: { status, updatedAt: new Date() },
    });
}

export function canCancelOrder(status: OrderStatus) {
    return status === OrderStatus.PENDING;
}
