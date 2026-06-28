import { auth } from "@/auth";
import { addToCart, getCartItems } from "@/features/cart/services/cart.service";
import { NextResponse } from "next/server";

export async function GET() {
	const session = await auth();

	if (!session?.user?.id) {
		return NextResponse.json([]);
	}

	const cart = await getCartItems(session.user.id);

	return NextResponse.json(cart);
}

export async function POST(request: Request) {
	const session = await auth();

	if (!session?.user?.id) {
		return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
	}

	const { variantId, quantity } = await request.json();

	await addToCart(session.user.id, variantId, quantity);

	return NextResponse.json({ success: true });
}
