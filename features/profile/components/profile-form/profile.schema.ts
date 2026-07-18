import z from "zod";

export const ProfileSchema = z.object({
    firstName: z.string(),
    lastName: z.string(),
});

export type ProfileValues = z.infer<typeof ProfileSchema>;
