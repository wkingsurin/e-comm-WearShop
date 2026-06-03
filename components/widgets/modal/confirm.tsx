import { Button } from "@/components/ui/button";
import Modal from "./modal";
import { useUIStore } from "@/lib/store/ui.store";

export default function ConfirmModal() {
	const onConfirm = () => {
		console.log(`confirm`);
		useUIStore.getState().updateOverlay({ open: false });
		useUIStore.getState().changeModalType(null);
		useUIStore.getState().updateModalTarget(null);
	};
	const onCancel = () => {
		useUIStore.getState().updateOverlay({ open: false });
		useUIStore.getState().changeModalType(null);
		useUIStore.getState().updateModalTarget(null);
	};

	return (
		<Modal>
			<div className="flex flex-col items-end justify-between gap-[60px] min-w-[480px] min-h-[160px]">
				<div className="flex flex-col items-start gap-4 w-full">
					<span className="font-sans font-medium text-2xl tracking-wider">
						Confirm title
					</span>
					<p className="font-sans font-medium tracking-wider">
						Confirm description
					</p>
				</div>
				<div className="flex gap-3">
					<Button onClick={onConfirm}>Confirm</Button>
					<Button onClick={onCancel}>Cancel</Button>
				</div>
			</div>
		</Modal>
	);
}
