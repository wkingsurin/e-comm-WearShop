"use client";

import Link from "next/link";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuGroup,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import {
	Boxes,
	Lock,
	LogOut,
	LucideIcon,
	User,
	UserCircle,
} from "lucide-react";
import { Button } from "../ui/button";

interface IProps {
	href: string;
	children: string | React.ReactNode;
}

export default function ServiceLink({ href, children }: IProps) {
	const data: { id: string; label: string; ref: string; icon: LucideIcon }[] = [
		{
			id: "1",
			label: "Profile",
			ref: "profile",
			icon: User,
		},
		{ id: "2", label: "Purchases", ref: "purchases", icon: Boxes },
		{ id: "3", label: "Security", ref: "security", icon: Lock },
		{ id: "4", label: "Log out", ref: "", icon: LogOut },
	];

	if (href.includes("account"))
		return (
			<DropdownMenu>
				<DropdownMenuTrigger
					render={
						<Button
							variant="link"
							className="flex items-center gap-[6px] p-0 font-sans hover:no-underline cursor-pointer"
						>
							<UserCircle className="size-5 stroke-[1px]" />
							Account
						</Button>
					}
				/>
				<DropdownMenuContent align="start">
					<DropdownMenuGroup>
						{data.map((item) => {
							const Icon = item.icon;

							return (
								<DropdownMenuItem key={item.id} className="p-0">
									<Link
										href={`/account/${item.ref}`}
										className="flex items-center w-full h-full gap-[6px] px-3 py-[6px]"
									>
										<Icon className="size-5 stroke-[1px] stroke-black" />
										{item.label}
									</Link>
								</DropdownMenuItem>
							);
						})}
					</DropdownMenuGroup>
				</DropdownMenuContent>
			</DropdownMenu>
		);

	return (
		<Link
			href={href.includes("cart") ? `/${href}` : `/account/${href}`}
			className="flex gap-[6px] items-center"
		>
			{children}
		</Link>
	);
}
