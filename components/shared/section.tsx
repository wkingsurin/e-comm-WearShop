import { ISectionProps } from "@/types/components/shared/shared.types";

export default function Section({ className, children }: ISectionProps) {
	const style = className ? className : "default";

	return (
		<section className={`flex flex-col gap-5 w-full ${style}`}>
			{children}
		</section>
	);
}
