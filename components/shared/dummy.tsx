import { IDummyProps } from "@/types/components/shared/shared.types";
import Link from "next/link";

export default function Dummy({ icon, text }: IDummyProps) {
	const Icon = icon;

	return (
		<div className="flex flex-col gap-2 items-center justify-center w-full h-full flex-1 rounded-xl">
			<div className="flex flex-col items-center gap-3 text-sans text-center text-black text-lg tracking-wider">
				<Icon className="size-6 stroke-[1px] stroke-black/50" />
				{text}
			</div>
			<Link
				href="/"
				className="flex items-center justify-center min-w-[240px] h-10 bg-black/75 font-mono tracking-wide text-white rounded-xl hover:bg-black transition-brand"
			>
				Continue shopping
			</Link>
		</div>
	);
}
