"use client";

import { useFormContext } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { IFormInputProps } from "@/types/components/widgets/form.types";
import { X } from "lucide-react";

export default function FormInput({ name, label, props }: IFormInputProps) {
	const {
		register,
		setValue,
		formState: { errors },
	} = useFormContext();

	const { id } = props;

	const error = errors[name]?.message as string | undefined;

	return (
		<div className="group/input flex flex-col items-start gap-[6px] w-full">
			<div className="flex gap-2">
				<Label htmlFor={id}>{label}</Label>
				{error && (
					<span className="text-xs text-destructive font-medium">{error}</span>
				)}
			</div>
			<div className="relative flex items-center justify-between w-full hover:shadow-[0_0_12px_-3px_rgba(0,0,0,.10)]">
				<Input {...register(name)} {...props} />
				<Button
					variant="link"
					className="absolute right-0 w-10 h-10 opacity-0 group-hover/input:opacity-100 transition-brand"
					onClick={() => setValue(name, "")}
				>
					<X className="size-4 stroke-[1px] stroke-black" />
				</Button>
			</div>
		</div>
	);
}
