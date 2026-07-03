import z from "zod";

export const ShippingSchema = z.object({
	country: z.string(),
	city: z.string(),
	address: z.string(),
	postalCode: z.string(),
});

export type ShippingValues = z.infer<typeof ShippingSchema>;
