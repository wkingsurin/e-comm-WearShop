import FormInput from "@/components/shared/form/form-input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { ProfileSchema, ProfileValues } from "./profile.schema";
import FormProvider from "@/components/shared/form/form-provider";
import { Button } from "@/components/ui/button";
import { useUpdateProfile } from "../../hooks/use-update-profile";

export default function ProfileForm({
    initialValues,
}: {
    initialValues: {
        firstName: string;
        lastName: string;
    };
}) {
    const { mutate: updateProfile } = useUpdateProfile();

    const form = useForm<ProfileValues>({
        resolver: zodResolver(ProfileSchema),
        defaultValues: initialValues,
    });

    const onSubmit = (values: ProfileValues) => {
        const name = `${values.firstName} ${values.lastName}`;
        updateProfile({ name });
    };

    return (
        <FormProvider
            form={form}
            onSubmit={onSubmit}
            className="flex flex-col gap-5 items-end"
        >
            <div className="flex flex-col gap-3 w-full">
                <FormInput
                    name="firstName"
                    label="First name"
                    props={{ id: "firstName", type: "text" }}
                />
                <FormInput
                    name="lastName"
                    label="Last name"
                    props={{ id: "lastName", type: "text" }}
                />
            </div>
            <Button type="submit" className="w-1/2">
                Save address
            </Button>
        </FormProvider>
    );
}
