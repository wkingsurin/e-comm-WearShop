import { auth } from "@/auth";
import { toggleFavorite } from "@/features/favorites/services/favorites.service";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
	const session = await auth();

	if (!session?.user?.id) {
		return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
	}

	const { productId } = await request.json();

	const isFavorite = await toggleFavorite(session.user.id, productId);

	return NextResponse.json({ isFavorite });
}
