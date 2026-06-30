import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { ISizesProps } from "@/types/components/widgets/sizes.types";
import { useRouter, useSearchParams } from "next/navigation";

export default function SizeSelector({
	sizes,
	initialSize,
	onChangeSize,
}: ISizesProps) {
	const router = useRouter();
	const searchParams = useSearchParams();

	const changeSize = (size: string) => {
		const params = new URLSearchParams(searchParams.toString());

		params.set("size", size);

		router.replace(`?${params.toString()}`);
	};

	return (
		<div className="flex flex-col gap-[6px] w-full">
			<span className="text-lg font-medium leading-lg tracking-wider">
				Size
			</span>
			<Select
				// items={sizes}
				onValueChange={(value) => {
					if (!value) return;

					if (onChangeSize !== undefined) {
						onChangeSize(value);
					} else {
						changeSize(value);
					}
				}}
				value={initialSize}
				disabled={sizes.length <= 1}
			>
				<SelectTrigger className="w-full border-[0.5px] border-black/10 hover:border-black/15 hover:shadow-[0_0_9px_-3px_var(--black)]/25 transition-brand">
					<SelectValue placeholder="Select size" />
				</SelectTrigger>
				<SelectContent>
					<SelectGroup>
						{sizes.map((s) => (
							<SelectItem
								key={s.value}
								value={s.value}
								disabled={!s.isAvailable}
							>
								{s.value}
							</SelectItem>
						))}
					</SelectGroup>
				</SelectContent>
			</Select>
		</div>
	);
}
