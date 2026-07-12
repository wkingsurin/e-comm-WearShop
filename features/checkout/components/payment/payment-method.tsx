"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Image from "next/image";

interface IPaymentMethod {
	item: { id: string; label: string; image: string };
	checked: boolean;
	onClick: (methodId: string) => void;
}

export default function PaymentMethod({
	item,
	checked,
	onClick,
}: IPaymentMethod) {
	return (
		<Label
			htmlFor={item.label}
			key={item.id}
			className={`flex items-center gap-3 rounded-[8px] border-[0.5px] px-3 border-black/10 w-full h-10 ${
				checked ? "border-black" : "hover:border-black/25"
			} transition-brand`}
		>
			<Input
				id={item.label}
				name="payment"
				type="radio"
				className="w-4 h-4"
				checked={checked}
				onClick={() => onClick(item.id)}
			/>
			<Image
				src={`/${item.image}`}
				alt={item.label}
				width={62}
				height={16}
				className="h-4 object-contain"
			/>
		</Label>
	);
}
