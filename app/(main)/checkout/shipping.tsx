"use client";

import { Button } from "@/components/ui/button";
import { Clock4 } from "lucide-react";

export default function Shipping() {
	return (
		<div className="flex flex-col gap-3 min-h-[94px] rounded-xl border-[0.5px] border-[#E5E7EB] p-6 hover:shadow-[0_0_12px_-3px_rgba(0,0,0,.1)] transition-brand">
			<div className="flex items-center justify-between pb-4 border-b border-[#E5E7EB]">
				<span className="tracking-wide font-medium text-black/75 uppercase">
					Shipping
				</span>
				<Button className="h-5 px-4 rounded-[6px] text-sm bg-transparent text-black border-black hover:text-white">
					Edit
				</Button>
			</div>

			<div className="flex flex-col gap-2 tracking-wider">
				<p className="font-bold">Jane Doe</p>
				<p>714 Green St, Apt 2B</p>
				<p>San Francisco, CA 94108</p>
				<p>United States</p>
			</div>

			<div className="flex items-center gap-3 text-black/50 tracking-wider text-sm pt-4 border-t-[1px] border-[#E5E7EB]">
				<Clock4 className="size-4 stroke-[1px]" />
				<p>Standard delivery (3-5 days)</p>
			</div>
		</div>
	);
}
