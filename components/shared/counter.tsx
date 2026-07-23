import { Minus, Plus } from "lucide-react";
import { Button } from "../ui/button";

interface IProps {
    quantity: number;
    stock: number;
    increment: () => void;
    decrement: () => void;
}

export default function Counter({
    quantity,
    stock,
    increment,
    decrement,
}: IProps) {
    return (
        <div className="group/counter flex rounded-xl bg-white border-[0.5px] border-black/10 hover:border-black/15 hover:shadow-[0_0_9px_-3px_var(--black)]/25 transition-brand">
            <Button
                className="flex gap-3 w-[50px] h-[50px] md:w-10 md:h-10 bg-white hover:bg-white"
                onClick={decrement}
                disabled={quantity === 1}
            >
                <Minus className="size-4 stroke-[1.5px] stroke-black" />
            </Button>
            <span className="flex items-center justify-center w-[50px] h-[50px] md:w-10 md:h-10 font-mono tracking-wider leading-lg">
                {quantity}
            </span>
            <Button
                className="flex gap-3 w-[50px] h-[50px] md:w-10 md:h-10 bg-white hover:bg-white"
                onClick={increment}
                disabled={quantity === stock}
            >
                <Plus className="size-4 stroke-[1.5px] stroke-black" />
            </Button>
        </div>
    );
}
