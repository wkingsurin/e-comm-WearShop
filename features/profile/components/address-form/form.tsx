import FormInput from "@/components/shared/form/form-input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { AddressSchema, AddressValues } from "./address.schema";
import FormProvider from "@/components/shared/form/form-provider";
import { Button } from "@/components/ui/button";
import useUpdateAddress from "../../hooks/use-update-address";

export default function AddressForm({
    initialValues,
}: {
    initialValues: {
        country: string;
        city: string;
        street: string;
        postalCode: string;
        phone?: string;
    };
}) {
    const { mutate: updateAddress } = useUpdateAddress();

    const form = useForm<AddressValues>({
        resolver: zodResolver(AddressSchema),
        defaultValues: initialValues,
    });

    const onSubmit = (values: AddressValues) => {
        updateAddress(values);
    };

    return (
        <FormProvider
            form={form}
            onSubmit={onSubmit}
            className="flex flex-col gap-5 items-end"
        >
            <div className="flex flex-col gap-3 w-full">
                <FormInput
                    name="street"
                    label="Street"
                    props={{ id: "street", type: "text" }}
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
            <Button type="submit" className="w-1/2">
                Save address
            </Button>
        </FormProvider>
    );
}
