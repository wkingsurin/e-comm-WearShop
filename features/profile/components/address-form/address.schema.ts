import z from "zod";

export const AddressSchema = z.object({
    street: z.string(),
    country: z.string(),
    city: z.string(),
    postalCode: z.string(),
    phone: z.string().optional(),
});

export type AddressValues = z.infer<typeof AddressSchema>;
