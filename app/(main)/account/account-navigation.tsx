"use client";

import { Button } from "@/components/ui/button";
import {
    Boxes,
    Heart,
    Lock,
    LogOut,
    LucideIcon,
    Package,
    User,
} from "lucide-react";
import { signOut } from "next-auth/react";
import Link from "next/link";
import { redirect, usePathname, useRouter } from "next/navigation";

export default function AccountNavigation() {
    const path = usePathname();
    const router = useRouter();

    const navigationData: {
        id: string;
        label: string;
        ref: string;
        icon: LucideIcon;
    }[] = [
        { id: "1", label: "Profile", ref: "profile", icon: User },
        { id: "2", label: "Orders", ref: "orders", icon: Package },
        { id: "3", label: "Favorites", ref: "favorites", icon: Heart },
        { id: "4", label: "Purchases", ref: "purchases", icon: Boxes },
        { id: "5", label: "Security", ref: "security", icon: Lock },
        { id: "6", label: "Log out", ref: "/", icon: LogOut },
    ];

    return (
        <nav className="max-w-[265px] w-full p-[6px] rounded-xl border-[1px] border-[#E5E7EB] hover:shadow-[0_0_12px_-3px_rgba(0,0,0,.1)] transition-brand">
            {navigationData.map((item) => {
                const Icon = item.icon;
                const href = `/account/${item.ref}`;
                const isActive = href === path;

                if (item.label.includes("Log out")) {
                    return (
                        <Button
                            key={item.id}
                            variant="link"
                            className="flex justify-start gap-3 w-full h-10 px-3 rounded-xl hover:bg-[#F51E1E]/10 transition duration-100 no-underline! cursor-pointer"
                            onClick={async () => {
                                await signOut({ redirect: false });
                                router.refresh();
                                redirect("/auth");
                            }}
                        >
                            <Icon className="size-5 stroke-[1.5px] stroke-[#F51E1E]" />
                            <p className="font-mono tracking-wide text-[#F51E1E]/75">
                                {item.label}
                            </p>
                        </Button>
                    );
                }

                return (
                    <Link
                        href={href}
                        key={item.id}
                        className={`flex items-center gap-3 h-10 px-3 rounded-xl hover:bg-black/5 transition duration-100 ${
                            isActive
                                ? "bg-black/10 hover:bg-black/10"
                                : "bg-transparent"
                        }`}
                        prefetch={false}
                    >
                        <Icon className="size-5 stroke-[1.5px] stroke-black" />
                        <p className="font-mono tracking-wide">{item.label}</p>
                    </Link>
                );
            })}
        </nav>
    );
}
