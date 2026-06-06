import { Button } from "@/components/ui/button";
import Modal from "./modal";
import { useUIStore } from "@/lib/store/ui.store";

export default function ConfirmModal() {
	const confirmData = useUIStore((s) => s.confirmData);
	const clearConfirm = useUIStore((s) => s.clearConfirm);

	if (!confirmData) return;

	const onConfirm = () => {
		confirmData.onConfirm();
		clearConfirm();
	};
	const onCancel = () => {
		clearConfirm();
	};

	return (
		<Modal>
			<div className="flex flex-col items-end justify-between gap-6 w-[480px] min-h-[160px]">
				<div className="flex flex-col gap-4 w-full">
					<div className="flex items-center justify-between">
						<span className="font-sans font-medium text-xl tracking-wider leading-lg">
							{confirmData.title}
						</span>
					</div>
					<div className="flex flex-col gap-4">{confirmData.content}</div>
				</div>
				<div className="flex gap-3 w-full">
					<Button className="flex-1" onClick={onConfirm}>
						{confirmData.cancelText || "Yes"}
					</Button>
					<Button className="flex-1" onClick={onCancel}>
						{confirmData.cancelText || "Back"}
					</Button>
				</div>
			</div>
		</Modal>
	);
}
