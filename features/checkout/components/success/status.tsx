import { Check } from "lucide-react";

export default function Status() {
    return (
        <div className="flex flex-col items-center gap-5">
            <div className="flex items-center justify-center w-[50px] h-[50px] rounded-[50%] bg-[#1AA759]/35 border-[0.5px] border-[#1AA759]/15">
                <Check className="size-6 stroke-[#1AA759]" />
            </div>
            <div className="flex flex-col items-center gap-2 tracking-wider">
                <span className="font-bold text-xl leading-base">
                    Order successfully created!
                </span>
                <p className="text-sm text-black/50 leading-base">
                    We have already started preparing you order
                </p>
            </div>
        </div>
    );
}
