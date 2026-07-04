import { auth } from "@/auth";
import { cancelOrder } from "@/features/order/services/order.service";
import { NextResponse } from "next/server";

export async function PATCH(request: Request) {
	const session = await auth();

	if (!session?.user?.id) {
		return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
	}

	try {
		const { orderId } = await request.json();

		const order = await cancelOrder(session.user.id, orderId);

		return NextResponse.json(order);
	} catch (error) {
		return NextResponse.json(
			{
				message:
					error instanceof Error ? error.message : "Failed to cancel order",
			},
			{ status: 401 }
		);
	}
}
