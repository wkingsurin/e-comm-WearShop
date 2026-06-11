import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { ISizesProps } from "@/types/components/widgets/sizes.types";

export default function Sizes({
	product,
	onChangeSize,
	initialSize,
}: ISizesProps) {
	return (
		<div className="flex flex-col gap-[6px] w-full">
			<span className="text-lg font-medium leading-lg tracking-wider">
				Size
			</span>
			<Select
				items={product.options.size}
				onValueChange={(value) => {
					if (!value) return;

					onChangeSize(value);
				}}
				value={initialSize}
			>
				<SelectTrigger className="w-full border-[0.5px] border-black/10 hover:border-black/15 hover:shadow-[0_0_9px_-3px_var(--black)]/25 transition-brand">
					<SelectValue placeholder="Select size" />
				</SelectTrigger>
				<SelectContent>
					<SelectGroup>
						{product.options.size.map((s) => (
							<SelectItem key={s.label} value={`${s.label} ${s.value}`}>
								{s.label} {s.value}
							</SelectItem>
						))}
					</SelectGroup>
				</SelectContent>
			</Select>
		</div>
	);
}
