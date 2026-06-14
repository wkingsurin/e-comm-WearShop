import z from "zod";

export const stepOneSchema = z.object({
	email: z.string().min(1, "Email is required").email("Invalid email"),
});

export type stepOneValues = z.infer<typeof stepOneSchema>;
