import { CircleUserRound, Handbag, Heart, Package } from "lucide-react";
import ServiceLink from "./service-link";

export default function UtilityNav() {
    const list: { id: string; label: string; href: string }[] = [
        { id: "1", label: "Account", href: "profile" },
        { id: "2", label: "Orders", href: "orders" },
        { id: "3", label: "Cart", href: "cart" },
        { id: "4", label: "Favorites", href: "favorites" },
    ];

    return (
        <nav className="hidden md:flex justify-center md:justify-normal gap-4">
            {list.map((item) => {
                const Icon =
                    item.id === "1"
                        ? CircleUserRound
                        : item.id === "2"
                          ? Package
                          : item.id === "3"
                            ? Handbag
                            : Heart;

                return (
                    <ServiceLink key={item.id} href={item.href}>
                        <Icon className="size-4 stroke-[1.5px]" />
                        <p className="text-base leading-base">{item.label}</p>
                    </ServiceLink>
                );
            })}
        </nav>
    );
}
