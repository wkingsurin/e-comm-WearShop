import { LucideIcon } from "lucide-react";

interface IProps {
	icon: LucideIcon;
	text: string;
}

export default function Dummy({ icon, text }: IProps) {
	const Icon = icon;

	return (
		<div className="flex items-center justify-center w-full h-full rounded-xl bg-black/5">
			<div className="flex items-center gap-3 text-sans text-center text-black/50 text-lg tracking-wider">
				<Icon className="size-6 stroke-[1px] stroke-black/50" />
				{text}
			</div>
		</div>
	);
}
