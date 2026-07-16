import SectionTitle from "@/components/shared/section-title";

interface IProps {
    children: React.ReactNode;
}

export default function DetailsLayout({ children }: IProps) {
    return (
        <div className="flex flex-col gap-5">
            <div className="flex items-center justify-between">
                <SectionTitle>Order details</SectionTitle>
            </div>
            <div className="flex items-start gap-4">
                <div className="flex w-full">{children}</div>
            </div>
        </div>
    );
}
