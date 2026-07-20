"use client";

import { Button } from "@/components/ui/button";
import { MoveLeft } from "lucide-react";
import { useRouter } from "next/navigation";

interface IProps {
    text?: string;
    to?: string;
}

export default function BackButton({ text = "Back", to }: IProps) {
    const router = useRouter();
    const url: string | null = to ? to : null;

    const handleBack = () => {
        if (url) {
            router.push(url);
            return;
        }
        router.back();
    };

    return (
        <Button
            className="group/page-back flex items-center gap-3 font-bold text-md leading-base tracking-wider text-black/50 hover:no-underline cursor-pointer h-auto px-0 hover:text-black"
            onClick={handleBack}
            variant="link"
        >
            <MoveLeft className="size-4 stroke-black/50 group-hover/page-back:stroke-black transition-brand" />{" "}
            {text}
        </Button>
    );
}
