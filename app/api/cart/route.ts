import { auth } from "@/auth";
import { EMPTY_CART } from "@/features/cart/constants";
import {
    addToCart,
    getCartItems,
    removeItem,
    updateQuantity,
} from "@/features/cart/services/cart.service";
import { NextResponse } from "next/server";

export async function GET() {
    const session = await auth();

    if (!session?.user.id) {
        return NextResponse.json(EMPTY_CART);
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

    await addToCart(session.user.cartId!, variantId, quantity);

    return NextResponse.json({ success: true });
}

export async function PATCH(request: Request) {
    const session = await auth();

    if (!session?.user.id) {
        return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }

    const { cartItemId, quantity } = await request.json();

    const cart = await updateQuantity(cartItemId, quantity);

    return NextResponse.json(cart);
}

export async function DELETE(request: Request) {
    const session = await auth();

    if (!session?.user?.id) {
        return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }

    const { cartItemId } = await request.json();

    await removeItem(session.user.id, cartItemId);

    return NextResponse.json({ success: true });
}
