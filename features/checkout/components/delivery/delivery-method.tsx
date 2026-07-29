"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { LucideIcon } from "lucide-react";

interface IDeliveryMethod {
    item: { id: string; label: string; icon: LucideIcon };
    checked: boolean;
    onClick: (methodId: string) => void;
}

export default function DeliveryMethod({
    item,
    checked,
    onClick,
}: IDeliveryMethod) {
    const Icon = item.icon;

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
            <div className="flex items-center justify-center gap-2">
                <Icon className="size-4 stroke-[1px]" />
                <span>{item.label}</span>
            </div>
        </Label>
    );
}
