"use client";

import { useUIStore } from "@/lib/store/ui.store";
import { useEffect } from "react";
import FastWatch from "../widgets/modal/fast-watch";
import CancelOrder from "../widgets/modal/cancel-order";

const MODAL_COMPONENTS = {
	FastWatch: FastWatch,
	CancelOrder: CancelOrder,
} as const;

type ModalType = keyof typeof MODAL_COMPONENTS;

export default function Overlay() {
	const open = useUIStore((s) => s.overlay.open);
	const modalContentType = useUIStore(
		(s) => s.modal.contentType
	) as ModalType | null;

	const Content = modalContentType ? MODAL_COMPONENTS[modalContentType] : null;

	useEffect(() => {
		if (open) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "";
		}
	}, [open]);

	if (!open) return null;

	return (
		<div
			className="fixed bottom-0 z-10005 flex items-center justify-center w-full h-[100dvh] bg-black/25"
			onClick={() => {
				useUIStore.getState().updateOverlay({ open: false });
				useUIStore.getState().changeModalType(null);
			}}
		>
			{Content && <Content />}
		</div>
	);
}
