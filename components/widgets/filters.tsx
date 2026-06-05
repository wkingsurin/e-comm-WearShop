import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

export default function Filters() {
	const sizeData: { id: string; label: string }[] = [
		{ id: "1", label: "S" },
		{ id: "2", label: "M" },
		{ id: "3", label: "L" },
		{ id: "4", label: "XL" },
		{ id: "5", label: "2XL" },
	];

	return (
		<div className="flex items-center justify-between p-3 bg-[#D9D9D9]/10 rounded-xl border-[0.5px] border-black/15">
			<div className="flex items-center gap-4">
				<div className="flex items-center flex-row gap-3">
					<span className="font-medium tracking-wide">Price</span>
					<div className="group/price-filter relative flex rounded-md ">
						<Label className="absolute left-3 top-[calc(50%-11px)] text-black/25 group-hover/price-filter:text-black/50 text-base font-mono tracking-wider leading-base transition-brand">
							$
						</Label>
						<Input className="rounded-md w-[120px] pl-[26px]" placeholder="3" />
					</div>
					<span className="tracking-wider text-black/25 font-medium">-</span>
					<div className="group/price-filter relative flex rounded-md ">
						<Label className="absolute left-3 top-[calc(50%-11px)] text-black/25 group-hover/price-filter:text-black/50 text-base font-mono tracking-wider leading-base transition-brand">
							$
						</Label>
						<Input className="rounded-md w-[120px] pl-[26px]" placeholder="3" />
					</div>
				</div>
				<div className="flex items-center flex-row gap-3">
					<span className="font-medium tracking-wide">Size</span>
					<div className="flex gap-2 h-[30px]">
						{sizeData.map((size) => (
							<div
								key={size.id}
								className="flex items-center justify-center w-[45px] h-full bg-black/5 rounded-md cursor-pointer hover:bg-black/25 transition-brand"
							>
								{size.label}
							</div>
						))}
					</div>
				</div>
			</div>
			<Button className="opacity-25 hover:opacity-100 min-w-[120px]">
				Reset
			</Button>
		</div>
	);
}
