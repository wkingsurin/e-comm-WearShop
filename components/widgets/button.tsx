import { Button } from "@/components/ui/button";
import { Ban, Loader, ShoppingBag } from "lucide-react";

const config = {
    idle: { icon: ShoppingBag, text: "Add", className: "" },
    pending: {
        icon: Loader,
        text: "Loading",
        className: "bg-black/25 text-white",
    },
    success: {
        icon: ShoppingBag,
        text: "Added",
        className:
            "bg-[#1AA759]/25 text-[#1AA759] border-[0.5px] border-[#1AA759]/50 hover:bg-[#1AA759]/25 hover:border-[#1AA759]/50",
    },
    error: {
        icon: Ban,
        text: "Failed",
        className: "bg-[#F51E1E]/25 text-[#F51E1E]",
    },
};

interface IProps {
    state: "idle" | "pending" | "success" | "error",
    onClick: () => {};
}

export default function ButtonToCart({ state, onClick }: IProps) {
    const Icon = config[state].icon;
    const text = config[state].text;

    console.log(`[status]:`, state);

    return (
        <Button
            className={`flex-1 bg-black ${config[state].className}`}
            disabled={state !== 'idle'}
            onClick={onClick}
        >
            <Icon className="size-4 stroke-[1px]" />
            {text}
        </Button>
    );
}
