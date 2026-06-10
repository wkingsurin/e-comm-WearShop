"use client";

import { useUIStore } from "@/lib/store/ui.store";
import { useEffect, useRef } from "react";
import FastView from "../widgets/modal/fast-view";
import ConfirmModal from "../widgets/modal/confirm";

const MODAL_COMPONENTS = {
	FastWatch: FastView,
	ConfirmModal: ConfirmModal,
} as const;

type ModalType = keyof typeof MODAL_COMPONENTS;

export default function Overlay() {
	const open = useUIStore((s) => s.overlay.open);
	const modalContentType = useUIStore(
		(s) => s.modal.contentType
	) as ModalType | null;

	const Content = modalContentType ? MODAL_COMPONENTS[modalContentType] : null;

	const overlayRef = useRef<HTMLDivElement>(null);
	const mouseDownTarget = useRef<EventTarget | null>(null);

	const closeModal = () => {
		useUIStore.getState().updateOverlay({ open: false });
		useUIStore.getState().changeModalType(null);
	};

	const handleMouseDown = (e: React.MouseEvent) => {
		mouseDownTarget.current = e.target;
	};

	const handleMouseUp = (e: React.MouseEvent) => {
		if (
			mouseDownTarget.current === overlayRef.current &&
			e.target === overlayRef.current
		) {
			closeModal();
		}

		mouseDownTarget.current = null;
	};

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
			onMouseDown={handleMouseDown}
			onMouseUp={handleMouseUp}
			ref={overlayRef}
		>
			{Content && <Content />}
		</div>
	);
}
