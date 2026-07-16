import { Button } from "@/components/ui/button";
import { Pencil } from "lucide-react";

interface IProps {
    onEdit: () => void;
    onCancel: () => void;
}

export default function OrderReturn({ onEdit, onCancel }: IProps) {
    return (
        <div className="flex flex-col gap-4 bg-white rounded-xl p-6 hover:shadow-[0_0_12px_-3px_rgba(0,0,0,.1)] transition-brand">
            <Button
                variant="link"
                className="flex gap-3 justify-start w-full h-10 px-0 hover:no-underline hover:bg-[#F8F9FA]"
                onClick={() => onEdit()}
            >
                <span className="flex items-center justify-center w-10 h-10 rounded-md bg-[#F8F9FA]">
                    <Pencil className="size-5 stroke-black/50" />
                </span>
                <p>Edit address</p>
            </Button>
            <Button
                className="h-[50px] bg-black/15 hover:bg-[#F51E1E]/10 hover:text-[#F51E1E]/75"
                onClick={() => onCancel()}
            >
                Cancel order
            </Button>
        </div>
    );
}
