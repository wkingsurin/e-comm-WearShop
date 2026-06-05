"use client";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useUIStore } from "@/lib/store/ui.store";
import { X } from "lucide-react";

export default function CancelReason() {
	const reasonsData: { id: string; text: string }[] = [
		{ id: "reason-1", text: "I want to reorder" },
		{ id: "reason-2", text: "I want another thing" },
		{ id: "reason-3", text: "Doesn’t fit in size" },
		{ id: "reason-4", text: "Too expensive" },
		{ id: "reason-5", text: "Another reason" },
	];

	const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
	};

	return (
		<div
			className="relative flex gap-[60px] max-w-[480px] w-full min-h-[428px] bg-white rounded-xl p-4"
			onClick={(e) => e.stopPropagation()}
		>
			<div className="flex flex-col items-center gap-6 w-full">
				<span className="max-w-[320px] text-center text-xl font-medium leading-lg tracking-wider">
					Tell us why you decide cancel the order?
				</span>
				<form
					className="flex flex-col items-center justify-between gap-4 w-full"
					onSubmit={onSubmit}
				>
					<div className="flex flex-col gap-2 w-full">
						{reasonsData.map((item) => (
							<div
								key={item.id}
								className="group/reason flex items-center gap-3"
							>
								<Checkbox id={item.id} className="peer" />
								<Label
									htmlFor={item.id}
									className="text-base text-black/75 leading-md group-hover/reason:text-black peer-data-[checked]:text-black transition-brand"
								>
									{item.text}
								</Label>
							</div>
						))}
					</div>
					<div className="flex flex-col items-start gap-[6px] w-full">
						<Label
							htmlFor="textarea"
							className="text-base text-black leading-md"
						>
							Describe a reason
						</Label>
						<Textarea
							id="textarea"
							placeholder="Message..."
							className="min-h-[100px]"
						/>
					</div>
					<Button type="submit" className="w-1/2">
						Report
					</Button>
				</form>
			</div>
			<Button
				className="absolute z-10003 top-0 -right-13 w-10 h-10 bg-white rounded-[50%] hover:bg-white hover:shadow-[0_0_9px_-3px_var(--black)]/50"
				onClick={() => {
					useUIStore.getState().updateOverlay({ open: false });
					useUIStore.getState().changeModalType(null);
				}}
			>
				<X className="size-4 stroke-[1.5px] stroke-black" />
			</Button>
		</div>
	);
}
