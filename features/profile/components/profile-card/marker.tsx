import { CircleCheckBig } from "lucide-react";

export default function Marker() {
    return (
        <div className="flex items-center gap-2 h-5 px-2 py-1 rounded-xl bg-[#1AA759]/5 border-[0.5px] border-[#1AA759]/10">
            <CircleCheckBig className="size-3 stroke-[#1AA759]" />
            <p className="text-sm tracking-wider text-[#1AA759] leading-base">
                Authentication: Email OTP
            </p>
        </div>
    );
}
