import { Lock, LucideIcon } from "lucide-react";
import Link from "next/link";

interface IProps {
    icon: LucideIcon;
    title?: string;
    description?: React.ReactNode;
    buttonText?: string;
}

export default function ProtectedState({
    icon,
    title,
    description,
    buttonText = "Sing in",
}: IProps) {
    const Icon = icon;

    return (
        <div className="col-span-full flex flex-col justify-center items-center gap-2 w-full md:w-[480px] h-[280px] bg-white rounded-xl p-6 hover:shadow-[0_0_12px_-3px_rgba(0,0,0,.1)] transition-brand">
            <div className="flex flex-col items-center gap-3 font-medium tracking-wider">
                <Icon className="size-6 stroke-[1px]" />
                {title ? title : "Sign in to view page"}
            </div>
            {description && <p className="max-w-[240px] text-center tracking-wide text-black/75">{description}</p>}
            <Link
                href="/auth"
                className="flex items-center justify-center w-[240px] h-10 bg-black rounded-md text-white font-medium tracking-wide"
            >
                {buttonText}
            </Link>
        </div>
    );
}
