import { ChevronDown, SlidersHorizontal } from "lucide-react";
import { Button } from "../ui/button";

export default function FiltersButton({
	onOpenFilters,
}: {
	onOpenFilters: () => void;
}) {
	return (
		<Button
			variant="link"
			className="flex justify-between min-w-[160px] h-[36px] px-3 border-[1px] border-black/15 rounded-md font-sans hover:no-underline hover:border-black/25 shadow-xs transition-[color,box-shadow] scale-100 active:scale-100"
			onClick={onOpenFilters}
		>
			<div className="flex items-center gap-[6px] font-mono tracking-wide">
				<SlidersHorizontal className="size-4 stroke-[1.5px] gap-[10px]" />
				Filters
			</div>
			<ChevronDown className="size-4 stroke-[1.5px] gap-[10px]" />
		</Button>
	);
}
