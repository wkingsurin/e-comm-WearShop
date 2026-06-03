import Container from "../shared/container";
import Logo from "../shared/logo";
import UtilityNav from "../shared/utility-nav";
import SearchInput from "../widgets/search-input";
import CategoryNavigation from "./category-navigation";

export default function Header() {
	return (
		<header className="fixed z-10000 w-full bg-white">
			<Container>
				<div className="flex flex-col gap-5 mt-[30px] mb-[20px]">
					<div className="flex justify-between gap-[50px]">
						<div className="flex items-center gap-10 flex-1">
							<Logo />
							<SearchInput />
						</div>
						<UtilityNav />
					</div>
					<CategoryNavigation />
				</div>
			</Container>
		</header>
	);
}
