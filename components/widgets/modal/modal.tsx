import { IModalProps } from "@/app/types/components/widgets/modal.types";
import { Button } from "@/components/ui/button";
import { useUIStore } from "@/lib/store/ui.store";
import { X } from "lucide-react";

export default function Modal({ children }: IModalProps) {
	const closeModal = () => {
		useUIStore.getState().updateOverlay({ open: false });
		useUIStore.getState().changeModalType(null);
	};

	return (
		<div className="relative max-w-[720px]">
			<div
				className="w-full p-4 bg-white rounded-xl"
				onClick={(e) => e.stopPropagation()}
			>
				{children}
			</div>
			<Button
				className="absolute top-0 -right-[52px] w-[40px] h-[40px] p-0 bg-white rounded-[50%] shadow-[0_0_9px_-3px_var(--black)]/50 hover:bg-white"
				onClick={closeModal}
			>
				<X className="size-4 stroke-[1.5px] stroke-black" />
			</Button>
		</div>
	);
}
