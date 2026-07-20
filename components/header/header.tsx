"use client";

import Container from "../shared/container";
import Logo from "../shared/logo";
import UtilityNav from "../shared/utility-nav";
import CategoryNavigation from "./category-navigation";
import Search from "@/features/search/components/search";

export default function Header() {
    return (
        <header className="fixed z-10000 w-full bg-white">
            <Container className="px-2">
                <div className="flex flex-col gap-5 py-2 md:pt-[30px] md:pb-[20px]">
                    <div className="flex flex-col md:flex-row justify-between gap-5 md:gap-[50px]">
                        <div className="flex flex-col md:flex-row items-center gap-6 flex-1">
                            <Logo />
                            <Search />
                        </div>
                        <UtilityNav />
                    </div>
                    <CategoryNavigation />
                </div>
            </Container>
        </header>
    );
}
