"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { IInputFieldProps } from "@/types/components/widgets/form.types";
import { X } from "lucide-react";
import { useState } from "react";

export default function InputField({
	id,
	label,
	type,
	placeholder,
}: IInputFieldProps) {
	const [value, setValue] = useState<string>("");

	const clearField = () => setValue("");

	return (
		<div className="group/input flex flex-col items-start gap-[6px] w-full">
			<Label htmlFor={id}>{label}</Label>
			<div className="relative flex items-center justify-between w-full hover:shadow-[0_0_12px_-3px_rgba(0,0,0,.10)]">
				<Input
					id={id}
					type={type}
					placeholder={placeholder}
					value={value}
					onChange={(e) => setValue(() => e.target.value)}
				/>
				<Button
					variant="link"
					className="absolute right-0 w-10 h-10 opacity-0 group-hover/input:opacity-100 transition-brand"
					onClick={clearField}
				>
					<X className="size-4 stroke-[1px] stroke-black" />
				</Button>
			</div>
		</div>
	);
}
