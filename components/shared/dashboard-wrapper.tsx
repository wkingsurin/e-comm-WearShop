import { IDashboardWrapperProps } from "@/types/components/shared/shared.types";

export default function DashboardWrapper({
    className,
    pageTitle,
    children,
}: IDashboardWrapperProps) {
    const style = className ? className : "default";

    return (
        <div
            className={`flex flex-col gap-4 w-full min-h-[453px] px-2 py-6 md:p-6 rounded-xl bg-white hover:shadow-[0_0_12px_-3px_rgba(0,0,0,.1)] transition-brand ${style}`}
        >
            {pageTitle && (
                <div className="flex items-center justify-between leading-md text-lg">
                    {pageTitle}
                </div>
            )}
            {children}
        </div>
    );
}
