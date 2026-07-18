import { auth } from "@/auth";
import {
    getUserProfile,
    updateUserAddress,
    updateUserProfile,
} from "@/features/profile/services/profile.service";
import { NextResponse } from "next/server";

export async function GET() {
    const session = await auth();

    if (!session?.user.id) {
        return NextResponse.json({});
    }

    const user = await getUserProfile(session.user.id);

    return NextResponse.json(user);
}

export async function PATCH(request: Request) {
    const session = await auth();

    if (!session?.user.id) {
        return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }

    const data = await request.json();

    const profile = await updateUserProfile(session.user.id, data.name);

    return NextResponse.json(profile);
}
