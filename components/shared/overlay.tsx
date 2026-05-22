"use client";

import { useUIStore } from "@/lib/store/ui.store";
import { useEffect } from "react";
import FastWatch from "../widgets/modal/fast-watch";
import CancelReason from "../widgets/modal/cancel-reason";

interface IProps {
	children: React.ReactNode;
}

export default function Overlay() {
	const overlay = useUIStore((s) => s.overlay.open);
	const modalContentType = useUIStore((s) => s.modal.contentType);

	const Content =
		modalContentType === "FastWatch" && modalContentType !== null
			? FastWatch
			: CancelReason;
	console.log(Content);

	useEffect(() => {
		if (overlay) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "";
		}
	}, [overlay]);

	if (!overlay) return null;

	return (
		<div
			className="fixed bottom-0 flex items-center justify-center w-full h-[calc(100dvh-134px)] bg-black/25"
			onClick={() => {
				useUIStore.getState().updateOverlay({ open: false });
				useUIStore.getState().updateModal({ contentType: null });
			}}
		>
			{modalContentType !== null && <Content />}
			{/* {children} */}
		</div>
	);
}
