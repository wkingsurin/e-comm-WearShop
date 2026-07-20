import Link from "next/link";
import Container from "./shared/container";
import Github from "./shared/icons/github";
import Telegram from "./shared/icons/telegram";
import LinkedIn from "./shared/icons/linkedin";

export default function Footer() {
	const navigationData: { id: string; label: string; ref: string }[] = [
		{ id: "1", label: "Terms of service", ref: "/" },
		{ id: "2", label: "Privacy policy", ref: "/" },
	];
	const socialData: { id: string; icon: React.ReactNode }[] = [
		{ id: "1", icon: <Github /> },
		{ id: "2", icon: <Telegram /> },
		{ id: "3", icon: <LinkedIn /> },
	];

	return (
		<footer className="py-[30px] bg-black/5 mb-[50px] md:mb-auto">
			<Container>
				<div className="flex flex-col gap-5 items-center lg:gap-auto lg:flex-row lg:gap-auto lg:items-start justify-between">
					<p className="order-3 lg:order-1 font-medium tracking-wider leading-md text-black/50">
						© Copyright 2026
					</p>
					<nav className="order-1 lg:order-2 flex gap-5">
						{navigationData.map((item) => (
							<Link key={item.id} href={item.ref} className="leading-md opacity-75 hover:opacity-100 transition-brand">
								{item.label}
							</Link>
						))}
					</nav>
					<div className="order-2 lg:order-3 flex gap-3">
						{socialData.map((item) => {
							const Icon = item.icon;

							return (
								<Link key={item.id} href={"/"} className="opacity-75 hover:opacity-100 transition-brand">
									{Icon}
								</Link>
							);
						})}
					</div>
				</div>
			</Container>
		</footer>
	);
}
