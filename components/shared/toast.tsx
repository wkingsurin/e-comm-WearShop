import { Check, LucideIcon, X } from "lucide-react";

interface IProps {
    type: "ERROR" | "SUCCESS";
    message: string;
}

export default function Toast({ message, type }: IProps) {
    const Icon: LucideIcon = type === "ERROR" ? X : Check;
    const iconStatusStyle =
        type === "ERROR" ? "stroke-[#F51E1E]" : "stroke-[#1AA759]";
    const toastStatusStyle =
        type === "ERROR"
            ? "bg-[#F51E1E]/25 backdrop-blur-[12px] md:bg-[#F51E1E]/15 md:border-[1px] md:border-[#F51E1E]/15 text-[#F51E1E]"
            : "bg-[#1AA759]/25 backdrop-blur-[12px] md:bg-[#1AA759]/15 md:border-[1px] md:border-[#1AA759]/15 text-[#1AA759]";

    return (
        <div className={`sticky bottom-[50px] md:absolute z-10050 md:top-[86px] md:right-4 flex items-center gap-2 h-[50px] px-5 md:px-3 md:rounded-md z-50 ${toastStatusStyle}`}>
            <Icon className={`size-4 ${iconStatusStyle}`} />
            <p>{message}</p>
        </div>
    );
}
