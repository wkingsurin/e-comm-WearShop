import BackButton from "@/components/shared/back-button";
import SectionTitle from "@/components/shared/section-title";
import getCurrentUser from "@/lib/auth/get-current-user";
import { redirect } from "next/navigation";

interface IProps {
    children: React.ReactNode;
}

export default async function DetailsLayout({ children }: IProps) {
    const user = await getCurrentUser()

    if (!user) {
        redirect('/auth')
    }

    return (
        <div className="flex flex-col gap-5">
            <div className="flex gap-3 lg:flex-row items-center lg:gap-4 px-3 md:px-0!">
                <BackButton />
                <SectionTitle>Order details</SectionTitle>
            </div>
            <div className="flex items-start gap-4">
                <div className="flex w-full">{children}</div>
            </div>
        </div>
    );
}
