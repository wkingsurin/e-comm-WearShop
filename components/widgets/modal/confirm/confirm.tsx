import Modal from "../modal";
import { useUIStore } from "@/lib/store/ui.store";
import ConfirmModalButton from "./button";

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
			<div className="flex flex-col items-end justify-between gap-6 w-full md:w-[480px] min-h-[160px]">
				<div className="flex flex-col gap-4 w-full">
					<div className="flex items-center justify-between">
						<span className="font-sans font-medium text-xl tracking-wider leading-lg">
							{confirmData.title}
						</span>
					</div>
					<div className="flex flex-col gap-4">{confirmData.content}</div>
				</div>
				<div className="flex gap-3 w-full">
					<ConfirmModalButton
						text={confirmData.confirmText || "Yes"}
						onClick={onConfirm}
					/>
					<ConfirmModalButton
						text={confirmData.cancelText || "Back"}
						onClick={onCancel}
					/>
				</div>
			</div>
		</Modal>
	);
}
