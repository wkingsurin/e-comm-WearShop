"use client";

import { useUIStore } from "@/lib/store/ui.store";
import Modal from "../modal";

export default function DialogModal() {
	const dialogData = useUIStore((s) => s.dialogData);

	if (!dialogData) return;

	return (
		<Modal>
			<div className="flex flex-col items-end justify-between gap-6 w-full md:w-[480px] min-h-[160px]">
				<div className="flex flex-col gap-4 w-full">
					<div className="flex items-center justify-between">
						<span className="font-sans font-medium text-xl tracking-wider leading-lg">
							{dialogData.title}
						</span>
					</div>
					<div className="flex flex-col gap-4">{dialogData.content}</div>
				</div>
			</div>
		</Modal>
	);
}
