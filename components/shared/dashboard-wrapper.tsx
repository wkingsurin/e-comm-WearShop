import { IDashboardWrapperProps } from "@/types/components/shared/shared.types";

export default function DashboardWrapper({
	className,
	pageTitle,
	children,
}: IDashboardWrapperProps) {
	const style = className ? className : "default";

	return (
		<div
			className={`flex flex-col gap-3 w-full min-h-[529px] p-6 rounded-lg border-[1px] border-[#E5E7EB] bg-white hover:shadow-[0_0_12px_-3px_rgba(0,0,0,.1)] transition-brand ${style}`}
		>
			<div className="flex items-center justify-between pb-4 border-b border-[#E5E7EB]">
				<span className="text-xl font-medium tracking-wider">{pageTitle}</span>
			</div>
			{children}
		</div>
	);
}
