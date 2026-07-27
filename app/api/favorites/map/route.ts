import { auth } from "@/auth";
import { getFavoritesMap } from "@/features/favorites/services/favorites.service";
import { NextResponse } from "next/server";

export async function GET() {
	const session = await auth();

	if (!session?.user?.id) {
		return NextResponse.json({});
	}

	const favorites = await getFavoritesMap(session.user.id);

	return NextResponse.json(favorites);
}
