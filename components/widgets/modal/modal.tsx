import { Button } from "@/components/ui/button";
import { useUIStore } from "@/lib/store/ui.store";
import { IModalProps } from "@/types/components/widgets/modal.types";
import { X } from "lucide-react";

export default function Modal({ className, children }: IModalProps) {
	const closeModal = () => {
		useUIStore.getState().updateOverlay({ open: false });
		useUIStore.getState().changeModalType(null);
	};

	const style = className ? className : "default";

	return (
		<div className={`relative max-w-[720px] ${style}`}>
			<div
				className="w-full p-6 bg-white rounded-xl border-[1px] border-[#E5E7EB] shadow-[0_0_12px_-3px_rgba(0,0,0,0.1)]"
				onClick={(e) => e.stopPropagation()}
			>
				{children}
			</div>
			<Button
				className="absolute top-0 -right-[52px] w-[40px] h-[40px] p-0 bg-white rounded-[50%] shadow-[0_0_9px_-3px_var(--black)/50] hover:bg-white"
				onClick={closeModal}
			>
				<X className="size-4 stroke-[1.5px] stroke-black" />
			</Button>
		</div>
	);
}
