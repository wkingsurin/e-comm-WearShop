import { IModalProps } from "@/types/components/widgets/modal.types";
import CloseButton from "./close-button";

export default function Modal({ className, children }: IModalProps) {
	const style = className ? className : "default";

	return (
		<div className={`relative max-w-[720px] ${style}`}>
			<div
				className="w-full p-6 bg-white rounded-xl border-[1px] border-[#E5E7EB] shadow-[0_0_12px_-3px_rgba(0,0,0,0.1)]"
				onClick={(e) => e.stopPropagation()}
			>
				{children}
			</div>
			<CloseButton />
		</div>
	);
}
