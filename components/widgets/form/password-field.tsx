"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { IPasswordFieldProps } from "@/types/components/widgets/form.types";
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import { useFormContext } from "react-hook-form";

export default function PasswordField({
	id,
	label,
	name,
	placeholder,
}: IPasswordFieldProps) {
	const {
		register,
		formState: { errors },
	} = useFormContext();
	const [revealed, setRevealed] = useState<boolean>(false);

	const error = errors[name]?.message as string | undefined;

	return (
		<div className="group/input flex flex-col items-start gap-[6px] w-full">
			<Label htmlFor={id}>{label}</Label>
			{error && (
				<span className="text-xs text-destructive font-medium">{error}</span>
			)}
			<div className="relative flex items-center justify-between w-full">
				<Input
					id={id}
					type={revealed ? "text" : "password"}
					placeholder={placeholder}
					{...register(name)}
				/>
				<Button
					variant="link"
					className="absolute right-0 w-10 h-10 opacity-0 group-hover/input:opacity-100 transition-brand"
					onClick={() => setRevealed((prev) => !prev)}
				>
					{revealed ? (
						<EyeOff className="size-4 stroke-[1px] stroke-black" />
					) : (
						<Eye className="size-4 stroke-[1px] stroke-black" />
					)}
				</Button>
			</div>
		</div>
	);
}
