import AccountNavigation from "../account-navigation";
import PageTitle from "./page-title";

interface IProps {
    children: React.ReactNode;
}

export default function MenuLayout({ children }: IProps) {
    return (
        <div className="flex flex-col gap-5">
            <PageTitle />
            <div className="relative flex items-start gap-4">
                <AccountNavigation />
                <div className="flex w-full">{children}</div>
            </div>
        </div>
    );
}
