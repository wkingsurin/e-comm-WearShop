import { IDummyProps } from "@/app/types/components/shared/shared.types";

export default function Dummy({ icon, text }: IDummyProps) {
	const Icon = icon;

	return (
		<div className="flex items-center justify-center w-full h-full flex-1 rounded-xl bg-black/5">
			<div className="flex items-center gap-3 text-sans text-center text-black/50 text-lg tracking-wider">
				<Icon className="size-6 stroke-[1px] stroke-black/50" />
				{text}
			</div>
		</div>
	);
}
