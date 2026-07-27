import { auth } from "@/auth";
import { getFavorites } from "@/features/favorites/services/favorites.service";
import { NextResponse } from "next/server";

export async function GET() {
    const session = await auth();

    if (!session?.user?.id) {
        return NextResponse.json([]);
    }

    const favorites = await getFavorites(session.user.id);

    return NextResponse.json(favorites);
}
