import { auth } from "@/auth";
import { getFavoriteMap } from "@/features/favorites/services/favorites.service";
import { NextResponse } from "next/server";

export async function GET() {
	const session = await auth();

	if (!session?.user?.id) {
		return NextResponse.json({});
	}

	const favorites = await getFavoriteMap(session.user.id);

	return NextResponse.json(favorites);
}
