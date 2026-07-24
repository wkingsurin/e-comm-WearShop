import { auth } from "@/auth";
import AccountNavigation from "../account-navigation";
import PageTitle from "./page-title";

interface IProps {
    children: React.ReactNode;
}

export default async function MenuLayout({ children }: IProps) {
    const session = await auth();
    const authorized = session?.user.id ? true : false;

    return (
        <div className="flex flex-col gap-5">
            <PageTitle />
            <div className="relative flex items-start gap-4">
                {authorized && <AccountNavigation />}
                <div
                    className={`flex ${!authorized && "items-center justify-center min-h-[598px]"} w-full`}
                >
                    {children}
                </div>
            </div>
        </div>
    );
}
