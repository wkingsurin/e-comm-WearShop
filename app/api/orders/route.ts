import { auth } from "@/auth";
import {
	createOrder,
	getOrders,
} from "@/features/orders/services/order.service";
import { NextResponse } from "next/server";

export async function GET() {
	const session = await auth();

	if (!session?.user?.id) {
		return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
	}

	const orders = await getOrders(session.user.id);

	return NextResponse.json(orders);
}

export async function POST() {
	const session = await auth();

	if (!session?.user?.id) {
		return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
	}

	try {
		const order = await createOrder(session.user.id);

		return NextResponse.json(order);
	} catch (error) {
		return NextResponse.json(
			{
				message:
					error instanceof Error ? error.message : "Failed to create order",
			},
			{ status: 400 }
		);
	}
}
