import z from "zod";

export const stepTwoSchema = z.object({
	email: z.string().email(),
	code: z
		.string()
		.length(6, "Code must me exactly 6 digits")
		.regex(/^\d+$/, "Only digits allowed"),
});

export type stepTwoValues = z.infer<typeof stepTwoSchema>;
