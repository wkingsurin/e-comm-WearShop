import { prisma } from "../../../lib/prisma";
import { FavoriteMap } from "../types";

export async function getFavoriteMap(userId: string) {
	const favorites = await prisma.favorite.findMany({
		where: { userId },
		select: { productId: true },
	});

	const favoriteMap: FavoriteMap = {};

	for (const favorite of favorites) {
		favoriteMap[favorite.productId] = true;
	}

	return favoriteMap;
}

export async function toggleFavorite(
	userId: string,
	productId: string
): Promise<boolean> {
	const favorite = await prisma.favorite.findUnique({
		where: {
			userId_productId: {
				userId,
				productId,
			},
		},
	});

	if (favorite) {
		await prisma.favorite.delete({
			where: { id: favorite.id },
		});

		return false;
	}

	await prisma.favorite.create({
		data: { userId, productId },
	});

	return true;
}
