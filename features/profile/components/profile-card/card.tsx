import { Button } from "@/components/ui/button";
import { Pen } from "lucide-react";
import Marker from "./marker";

interface IProps {
    title: string;
    children: React.ReactNode;
}

export default function ProfileCard({ title, children }: IProps) {
    return (
        <div className="flex flex-col items-start gap-4 bg-[#F8F9FA] rounded-xl p-3">
            <div className="flex gap-2 items-center">
                <span className="text-lg font-medium tracking-wider leading-base">
                    {title}
                </span>
                {title.toLowerCase().includes("personal") && <Marker />}
            </div>
            {children}
        </div>
    );
}
