import NextAuth from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { prisma } from "./lib/prisma";
import Credentials from "next-auth/providers/credentials";
import { ZodError } from "zod";
import { otpAuthSchema } from "./lib/validation/otp-auth.schems";
import crypto from "crypto";
import { ICartItem } from "./types/store/cart.types";
import { IFavorite } from "./types/store/favorites.types";

function verifyTelegramAuth(data: any, botToken: string) {
	const { hash, ...checkData } = data;

	const dataCheckString = Object.keys(checkData)
		.sort()
		.map((key) => `${key}=${checkData[key]}`)
		.join("\n");

	const secretKey = crypto.createHash("sha256").update(botToken).digest();

	const hmac = crypto
		.createHmac("sha256", secretKey)
		.update(dataCheckString)
		.digest("hex");

	return hmac === hash;
}

export const { handlers, auth, signIn, signOut } = NextAuth({
	secret: process.env.NEXTAUTH_SECRET,
	providers: [
		Credentials({
			name: "OTP",
			credentials: {
				email: { label: "Email", type: "email" },
				code: { label: "Code", type: "text" },
				guestCart: { type: "text" },
				guestFavorites: { type: "text" },
			},
			async authorize(credentials) {
				try {
					const { email, code, guestCart, guestFavorites } =
						await otpAuthSchema.parseAsync(credentials);

					if (!email || !code) return null;

					const verificationToken = await prisma.verificationToken.findFirst({
						where: { identifier: email, token: code },
					});

					if (!verificationToken) {
						return null;
					}

					const isExpired = new Date() > new Date(verificationToken.expires);

					if (isExpired) {
						await prisma.verificationToken.delete({
							where: {
								identifier_token: {
									identifier: email,
									token: code,
								},
							},
						});

						return null;
					}

					await prisma.verificationToken.delete({
						where: {
							identifier_token: {
								identifier: email,
								token: code,
							},
						},
					});

					let user = await prisma.user.findUnique({ where: { email } });

					if (!user) {
						const parsedCart = JSON.parse((guestCart as string) || "[]");
						const parsedFavorites = JSON.parse(
							(guestFavorites as string) || "[]"
						);

						user = await prisma.$transaction(async (tx) => {
							const newUser = await tx.user.create({
								data: { email, name: email.split("@")[0] },
							});

							if (parsedCart.length > 0) {
								await tx.cartItem.createMany({
									data: parsedCart.map((item: ICartItem) => ({
										userId: newUser.id,
										productId: item.id,
										quantity: item.quantity,
									})),
								});
							}

							if (parsedFavorites.length > 0) {
								await tx.favorite.createMany({
									data: parsedFavorites.map((item: IFavorite) => ({
										userId: newUser.id,
										productId: item.productId,
									})),
								});
							}

							return newUser;
						});
					} else {
						console.log(
							`[Existing user logged in]: ${user.email}. Storage ignored.`
						);
					}

					return {
						id: user.id,
						email: user.email,
						name: user.name,
					};
				} catch (err) {
					if (err instanceof ZodError) {
						return null;
					}
					throw err;
				}
			},
		}),
		Credentials({
			id: "telegram",
			name: "Telegram",
			credentials: {
				id: { label: "TG ID", type: "text" },
				first_name: { type: "text" },
				username: { type: "text" },
				photo_url: { type: "text" },
				auth_data: { type: "text" },
				hash: { type: "text" },
			},
			async authorize(credentials) {
				if (!credentials || !process.env.TELEGRAM_BOT_TOKEN) return null;

				const isValid = verifyTelegramAuth(
					credentials,
					process.env.TELEGRAM_BOT_TOKEN
				);
				if (!isValid) {
					console.error("Telegram auth hash verification failed");
					return null;
				}

				const tgId = credentials.id as bigint;
				const username = credentials.username as string;

				const telegramEmail = `tg_${tgId}@telegram.com`;

				let user = await prisma.user.findFirst({
					where: {
						OR: [{ telegramId: tgId }, { email: telegramEmail }],
					},
				});

				if (!user) {
					user = await prisma.user.create({
						data: {
							email: telegramEmail,
							name: (credentials.first_name as string) || username,
							telegramId: tgId,
						},
					});
				}

				return { id: user.id, email: user.email, name: user.name };
			},
		}),
	],
	adapter: PrismaAdapter(prisma),
	session: { strategy: "jwt" },
	callbacks: {
		async jwt({ token, user }) {
			if (user) {
				token.id = user.id;
			}
			return token;
		},
		async session({ session, token }) {
			if (session.user && token.id) {
				session.user.id = token.id as string;
			}

			return session;
		},
	},
});
