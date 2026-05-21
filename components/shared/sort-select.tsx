import { ArrowUpDown } from "lucide-react";
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "../ui/select";

interface IProps {
	className?: string;
}

export default function SortSelect({ className }: IProps) {
	const style = className ? className : "default";

	const data: { label: string; value: string }[] = [
		{ label: "Higher price", value: "higher" },
		{ label: "Lower price", value: "lower" },
	];

	return (
		<Select items={data}>
			<SelectTrigger
				className={`w-[160px] h-[36px]! rounded-md font-mono tracking-wide ${style}`}
			>
				<SelectValue placeholder="Sort by">
					<ArrowUpDown className="size-4 stroke-[1.5px] gap-[10px]" />
					Sort
				</SelectValue>
			</SelectTrigger>
			<SelectContent className="rounded-md font-mono tracking-wide">
				<SelectGroup>
					{data.map((item) => (
						<SelectItem
							key={item.value}
							value={item.value}
							className="rounded-md h-[36px]"
						>
							{item.label}
						</SelectItem>
					))}
				</SelectGroup>
			</SelectContent>
		</Select>
	);
}
