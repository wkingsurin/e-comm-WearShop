import z from "zod";

export const otpAuthSchema = z.object({
	email: z.string().email(),
	code: z.string().length(6).regex(/^\d+$/).optional().or(z.literal("")),
	guestCart: z.string().optional(),
	guestFavorites: z.string().optional(),
});
