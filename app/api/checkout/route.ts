import { auth } from "@/auth";
import { EMPTY_CHECKOUT } from "@/features/checkout/constants";
import {
    getCheckout,
    updateCheckout,
} from "@/features/checkout/services/checkout.service";
import { NextResponse } from "next/server";

export async function GET() {
    const session = await auth();

    if (!session?.user?.id) {
        return NextResponse.json(EMPTY_CHECKOUT);
    }

    const checkout = await getCheckout(session.user.id);

    return NextResponse.json(checkout);
}

export async function PATCH(request: Request) {
    const session = await auth();

    if (!session?.user?.id) {
        return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }

    const data = await request.json();

    const checkout = await updateCheckout(session.user.id, data);

    return NextResponse.json(checkout);
}
