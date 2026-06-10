import { ISectionTitleProps } from "@/types/components/shared/shared.types";

export default function SectionTitle({ children }: ISectionTitleProps) {
	return (
		<h3 className="text-2xl font-bold tracking-wider leading-base">
			{children}
		</h3>
	);
}
