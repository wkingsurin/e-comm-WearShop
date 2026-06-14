import { z } from "zod";

export const signUpSchema = z
	.object({
		email: z.string().email("Invalid email"),
		password: z.string().min(8, "Password must contain at least 8 characters"),
		confirmPassword: z.string(),
	})
	.refine((data) => data.password === data.confirmPassword, {
		path: ["confirmPassword"],
		message: "Password do not match",
	});

export type signUpSchema = z.infer<typeof signUpSchema>;
