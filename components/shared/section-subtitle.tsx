import { ISectionSubtitleProps } from "@/app/types/components/shared/shared.types";

export default function SectionSubtitle({ children }: ISectionSubtitleProps) {
	return (
		<span className="font-medium tracking-wider uppercase text-black/50">
			{children}
		</span>
	);
}
