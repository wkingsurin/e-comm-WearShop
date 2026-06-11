"use client";

import { useUIStore } from "@/lib/store/ui.store";
import { Button } from "@base-ui/react/button";
import { X } from "lucide-react";

export default function CloseButton() {
	const closeModal = () => {
		useUIStore.getState().updateOverlay({ open: false });
		useUIStore.getState().changeModalType(null);
	};

	return (
		<Button
			className="absolute top-0 -right-[52px] flex items-center justify-center w-[40px] h-[40px] p-0 bg-white rounded-[50%] shadow-[0_0_9px_-3px_rgba(0,0,0,.10)] hover:bg-white hover:shadow-[0_0_12px_-3px_rgba(0,0,0,.25)] transition-brand"
			onClick={closeModal}
		>
			<X className="size-4 stroke-[1.5px] stroke-black" />
		</Button>
	);
}
