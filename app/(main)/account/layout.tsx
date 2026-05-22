"use client";

import Main from "@/components/main";
import Container from "@/components/shared/container";
import Section from "@/components/shared/section";
import SectionTitle from "@/components/shared/section-title";
import SortSelect from "@/components/shared/sort-select";
import ProductCard from "@/components/widgets/product-card";
import { useUIStore } from "@/lib/store/ui.store";
import {
	Boxes,
	Heart,
	Lock,
	LogOut,
	LucideIcon,
	Package,
	User,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface IProps {
	children: React.ReactNode;
}

export default function AccountLayout({ children }: IProps) {
	const path = usePathname();

	const navigationData: {
		id: string;
		label: string;
		ref: string;
		icon: LucideIcon;
	}[] = [
		{ id: "1", label: "Profile", ref: "profile", icon: User },
		{ id: "2", label: "Orders", ref: "orders", icon: Package },
		{ id: "3", label: "Favourites", ref: "favourites", icon: Heart },
		{ id: "4", label: "Purchases", ref: "purchases", icon: Boxes },
		{ id: "5", label: "Security", ref: "security", icon: Lock },
		{ id: "6", label: "Log out", ref: "/", icon: LogOut },
	];

	const data = useUIStore((s) => s.showcase);

	return (
		<Main>
			<Section>
				<Container>
					<div className="flex flex-col gap-5">
						<div className="flex items-center justify-between">
							<SectionTitle>Account</SectionTitle>
						</div>
						<div className="flex gap-5">
							<nav className="max-w-[305px] w-full">
								{navigationData.map((item) => {
									const Icon = item.icon;
									const href = `/account/${item.ref}`;
									const isActive = href === path;

									return (
										<Link
											href={href}
											key={item.id}
											className={`flex items-center gap-3 h-10 px-3 rounded-xl hover:bg-black/5 transition duration-100 ${
												isActive
													? "bg-black/10 hover:bg-black/10"
													: "bg-transparent"
											}`}
										>
											<Icon className="size-5 stroke-[1.5px] stroke-black" />
											<p className="font-mono tracking-wide">{item.label}</p>
										</Link>
									);
								})}
							</nav>
							<div className="flex w-full">{children}</div>
						</div>
					</div>
				</Container>
			</Section>
			<Section>
				<Container>
					<div className="flex flex-col gap-5">
						<div className="flex flex-col gap-[6px]">
							<span className="uppercase font-medium text-black/50 tracking-wider">
								You See
							</span>
							<div className="flex items-center justify-between">
								<SectionTitle>Last seen products</SectionTitle>
								<SortSelect />
							</div>
						</div>
						<div className="flex flex-wrap gap-5">
							{data.map((item) => (
								<ProductCard key={item.id} data={item} />
							))}
						</div>
					</div>
				</Container>
			</Section>
		</Main>
	);
}
