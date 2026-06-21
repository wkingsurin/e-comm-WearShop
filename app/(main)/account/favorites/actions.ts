"use server";

import { prisma } from "@/lib/prisma";
import { mapProduct } from "@/app/mappers/map-product";
import { auth } from "@/auth";
import { revalidatePath } from "next/cache";

export async function getFavorites() {
	const session = await auth();

	if (!session?.user?.id) return [];

	const userId = session.user.id;

	const products = await prisma.favorite.findMany({
		where: { userId },
		include: {
			product: {
				include: {
					brand: true,
					category: true,
					variants: {
						where: { isActive: true },
						orderBy: [{ colorId: "asc" }, { size: "asc" }],
					},
					productColors: {
						include: { images: true },
						orderBy: { name: "asc" },
					},
				},
			},
		},
	});

	return products.map((favorite) => mapProduct(favorite.product));
}

export async function addFavorite(productId: string) {
	const session = await auth();

	if (!session?.user?.id) {
		throw new Error("Unauthorized");
	}

	const userId = session.user.id;

	try {
		const product = await prisma.favorite.findFirst({
			where: {
				userId,
				productId,
			},
		});

		if (!product) {
			await prisma.favorite.create({
				data: {
					userId,
					productId,
				},
			});

			revalidatePath("/");
		}

		return { success: true };
	} catch (err) {
		console.error(err);
		return { success: false };
	}
}

export async function deleteFavorite(productId: string) {
	const session = await auth();

	if (!session?.user?.id) {
		throw new Error("Unauthorized");
	}

	const userId = session.user.id;

	try {
		await prisma.favorite.deleteMany({
			where: {
				userId,
				productId,
			},
		});

		revalidatePath("/");

		return { success: true };
	} catch (err) {
		console.error(err);
		return { success: false };
	}
}
