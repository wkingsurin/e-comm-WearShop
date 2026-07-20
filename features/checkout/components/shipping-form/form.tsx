import FormInput from "@/components/shared/form/form-input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { ShippingSchema, ShippingValues } from "./shipping.schema";
import FormProvider from "@/components/shared/form/form-provider";
import { Button } from "@/components/ui/button";
import { useUpdateCheckout } from "../../hooks/use-update-checkout";

export default function ShippingForm({
	initialValues,
}: {
	initialValues: {
		country: string;
		city: string;
		address: string;
		postalCode: string;
	};
}) {
	const { mutate: updateCheckout } = useUpdateCheckout();

	const form = useForm<ShippingValues>({
		resolver: zodResolver(ShippingSchema),
		defaultValues: initialValues,
	});

	const onSubmit = (values: ShippingValues) => {
		updateCheckout(values);
	};

	return (
		<FormProvider
			form={form}
			onSubmit={onSubmit}
			className="flex flex-col gap-5 items-end w-full"
		>
			<div className="flex flex-col gap-3 w-full">
				<FormInput
					name="address"
					label="Address"
					props={{ id: "address", type: "text" }}
				/>
				<FormInput
					name="country"
					label="Country"
					props={{ id: "country", type: "text" }}
				/>
				<FormInput
					name="city"
					label="City"
					props={{ id: "city", type: "text" }}
				/>
				<FormInput
					name="postalCode"
					label="Postal code"
					props={{
						id: "postalCode",
						type: "text",
					}}
				/>
			</div>
			<Button type="submit" className="w-full md:w-1/2">
				Save address
			</Button>
		</FormProvider>
	);
}
