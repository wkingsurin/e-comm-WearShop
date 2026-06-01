import Container from "../shared/container";
import Logo from "../shared/logo";
import { Input } from "../ui/input";
import { Search } from "lucide-react";
import { Button } from "../ui/button";
import UtilityNav from "../shared/utility-nav";
import CategoryNavigation from "./category-navigation";

export default function Header() {
	return (
		<header className="fixed z-10000 w-full bg-white">
			<Container>
				<div className="flex flex-col gap-5 mt-[30px] mb-[20px]">
					<div className="flex justify-between gap-[50px]">
						<div className="flex items-center gap-10 flex-1">
							<Logo />
							<div className="hidden md:flex gap-4 flex-1">
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
					<CategoryNavigation />
				</div>
			</Container>
		</header>
	);
}
