"use client";

import {
	FieldValues,
	FormProvider as RHFFormProvider,
	SubmitHandler,
	UseFormReturn,
} from "react-hook-form";
import Form from "./form";

interface FormProviderProps<T extends FieldValues> {
	form: UseFormReturn<T>;
	onSubmit: SubmitHandler<T>;
	children: React.ReactNode;
	className?: string;
}

export default function FormProvider<T extends FieldValues>({
	form,
	onSubmit,
	children,
	className,
}: FormProviderProps<T>) {
	return (
		<RHFFormProvider {...form}>
			<Form onSubmit={form.handleSubmit(onSubmit)} className={className}>
				{children}
			</Form>
		</RHFFormProvider>
	);
}
