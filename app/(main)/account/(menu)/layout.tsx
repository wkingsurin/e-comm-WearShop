import SectionTitle from "@/components/shared/section-title";
import AccountNavigation from "../account-navigation";

interface IProps {
    children: React.ReactNode;
}

export default function MenuLayout({ children }: IProps) {
    return (
        <div className="flex flex-col gap-5">
            <div className="flex items-center justify-between">
                <SectionTitle>Account</SectionTitle>
            </div>
            <div className="relative flex items-start gap-4">
                <AccountNavigation />
                <div className="flex w-full">{children}</div>
            </div>
        </div>
    );
}
