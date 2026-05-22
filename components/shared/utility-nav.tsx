import { CircleUser, Heart, Package, ShoppingBag } from "lucide-react";
import ServiceLink from "./service-link";

export default function UtilityNav() {
	const list: { id: string; text: string }[] = [
		{ id: "1", text: "Account" },
		{ id: "2", text: "Orders" },
		{ id: "3", text: "Cart" },
		{ id: "4", text: "Favourites" },
	];

	return (
		<nav className="hidden md:flex gap-4">
			{list.map((item) => {
				const Icon =
					item.id === "1"
						? CircleUser
						: item.id === "2"
						? Package
						: item.id === "3"
						? ShoppingBag
						: Heart;

				return (
					<ServiceLink key={item.id} href={item.text.toLowerCase()}>
						<Icon className="size-5 stroke-[1px]" />
						<p className="text-base leading-base tracking-wide">{item.text}</p>
					</ServiceLink>
				);
			})}
		</nav>
	);
}
