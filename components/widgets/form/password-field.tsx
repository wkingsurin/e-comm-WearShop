"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";

interface IProps {
	id: string;
	label: string;
	placeholder: string;
}

export default function PasswordField({ id, label, placeholder }: IProps) {
	const [revealed, setRevealed] = useState<boolean>(false);

	return (
		<div className="group/input flex flex-col items-start gap-[6px] w-full">
			<Label htmlFor={id}>{label}</Label>
			<div className="relative flex items-center justify-between w-full">
				<Input id={id} type="password" placeholder={placeholder} />
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
