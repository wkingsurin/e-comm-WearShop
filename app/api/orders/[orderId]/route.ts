import { auth } from "@/auth";
import { getOrder } from "@/features/orders/services/order.service";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
	_: NextRequest,
	{
		params,
	}: {
		params: Promise<{ orderId: string }>;
	}
) {
	const session = await auth();

	if (!session?.user?.id) {
		return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
	}

	const { orderId } = await params;

	const order = await getOrder(session.user.id, orderId);

	return NextResponse.json(order);
}
