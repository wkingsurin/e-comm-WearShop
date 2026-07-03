"use client";

import { IFormProps } from "@/types/components/widgets/form.types";

export default function Form({ onSubmit, children, className }: IFormProps) {
	const style = className ? className : "";

	return (
		<form
			className={`flex flex-col items-center w-full ${style}`}
			onSubmit={onSubmit}
		>
			{children}
		</form>
	);
}
