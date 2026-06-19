"use client";

import useLastSeen from "@/hooks/useLastSeen";
import { Button } from "@/components/ui/button";
import { useUIStore } from "@/lib/store/ui.store";
import { IFastViewButtonProps } from "@/types/components/widgets/product-card.types";

export default function FastViewButton({
	data,
	variantId,
}: IFastViewButtonProps) {
	const updateOverlay = useUIStore((s) => s.updateOverlay);
	const updateModal = useUIStore((s) => s.updateModal);
	const { addLastSeen } = useLastSeen();

	const contentType = "QuickView";

	return (
		<Button
			className="absolute z-2 bg-white text-black pointer-events-none opacity-0 bottom-0 border-[0.5px] border-transparent scale-90 gap-3 group-hover/card:pointer-events-auto group-hover/card:opacity-100 group-hover/card:bottom-3 group-hover/card:scale-100 group-hover/card:border-[#E5E7EB] hover:shadow-[0_4px_12px_-3px_rgba(0,0,0,.15)] hover:bg-white hover:text-black"
			onClick={(e) => {
				e.preventDefault();
				e.stopPropagation();
				updateOverlay({ open: true });
				updateModal({ target: { product: data, variantId }, contentType });
				addLastSeen(data);
			}}
		>
			Fast view
		</Button>
	);
}
