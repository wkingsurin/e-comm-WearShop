import BackButton from "@/components/shared/back-button";
import SectionTitle from "@/components/shared/section-title";

interface IProps {
    children: React.ReactNode;
}

export default function DetailsLayout({ children }: IProps) {
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
