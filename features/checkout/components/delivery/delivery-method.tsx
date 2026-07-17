"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface IDeliveryMethod {
	item: { id: string; label: string; image: string };
	checked: boolean;
	onClick: (methodId: string) => void;
}

export default function DeliveryMethod({
	item,
	checked,
	onClick,
}: IDeliveryMethod) {
	return (
		<Label
			htmlFor={item.label}
			key={item.id}
			className={`flex items-center gap-3 rounded-md border-[0.5px] px-3 border-black/10 w-full h-10 ${
				checked ? "border-black" : "hover:border-black/25"
			} transition-brand`}
		>
			<Input
				id={item.label}
				name="delivery"
				type="radio"
				className="w-4 h-4"
				checked={checked}
				onClick={() => onClick(item.id)}
			/>
			<span>{item.label}</span>
		</Label>
	);
}
