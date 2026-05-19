import Link from "next/link";
import Container from "./shared/container";
import Logo from "./shared/logo";
import { Input } from "./ui/input";
import { Search } from "lucide-react";
import { Button } from "./ui/button";
import UtilityNav from "./shared/utility-nav";

export default function Header() {
	const list: { id: string; text: string }[] = [
		{ id: "1", text: "All" },
		{ id: "2", text: "Hoodies" },
		{ id: "3", text: "Jeans" },
		{ id: "4", text: "T-Shirts" },
		{ id: "5", text: "Sneakers" },
		{ id: "6", text: "Caps" },
	];

	return (
		<header className="fixed w-full">
			<Container>
				<div className="flex flex-col gap-5 mt-[30px]">
					<div className="flex justify-between gap-[50px]">
						<div className="flex items-center gap-10 flex-1">
							<Logo />
							<div className="flex gap-4 flex-1">
								<Input
									type="text"
									placeholder="Search..."
									className="bg-black/5"
								/>
								<Button size="icon-lg">
									<Search className="size-4 stroke-[2px]" />
								</Button>
							</div>
						</div>
						<UtilityNav />
					</div>
					<nav className="flex gap-3 text-black/50">
						{list.map((item) => (
							<Link
								key={item.id}
								href=""
								className="hover:text-black transition-brand"
							>
								{item.text}
							</Link>
						))}
					</nav>
				</div>
			</Container>
		</header>
	);
}
