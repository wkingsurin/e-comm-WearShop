import { auth } from "@/auth";
import { updateUserAddress } from "@/features/profile/services/profile.service";
import { NextResponse } from "next/server";

export async function PATCH(request: Request) {
    const session = await auth();

    if (!session?.user.id) {
        return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }

    const data = await request.json();

    const address = await updateUserAddress(session.user.id, data);

    return NextResponse.json(address);
}
