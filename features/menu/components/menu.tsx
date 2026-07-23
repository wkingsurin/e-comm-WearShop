"use client";

import {
    CircleUserRound,
    Handbag,
    Heart,
    House,
    LayoutGrid,
    LucideIcon,
    Package,
} from "lucide-react";
import Link from "next/link";

export default function Menu() {
    const list: { id: string; src: string; icon: LucideIcon }[] = [
        { id: "1", src: "/products", icon: House },
        { id: "2", src: "/categories", icon: LayoutGrid },
        { id: "3", src: "/account/orders", icon: Package },
        { id: "4", src: "/cart", icon: Handbag },
        { id: "5", src: "/account/favorites", icon: Heart },
        { id: "6", src: "/account/profile", icon: CircleUserRound },
    ];

    return (
        <div className="md:hidden fixed bottom-0 z-50 grid grid-cols-6 w-full h-[50px] bg-white/25 py-0! backdrop-blur-[12px] border-t-[0.5px] border-black/5">
            {list.map((link) => {
                const Icon = link.icon;

                return (
                    <Link
                        key={link.id}
                        href={link.src}
                        className="flex items-center justify-center"
                    >
                        <Icon className="size-6" />
                    </Link>
                );
            })}
        </div>
    );
}
