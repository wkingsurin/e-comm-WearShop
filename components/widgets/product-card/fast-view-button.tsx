"use client";

import { IFastViewButtonProps } from "@/app/types/components/widgets/product-card.types";
import useLastSeen from "@/components/hooks/useLastSeen";
import { Button } from "@/components/ui/button";
import { useUIStore } from "@/lib/store/ui.store";

export default function FastViewButton({ data }: IFastViewButtonProps) {
	const updateOverlay = useUIStore((s) => s.updateOverlay);
	const updateModal = useUIStore((s) => s.updateModal);
	const { addLastSeen } = useLastSeen();

	const contentType = "FastWatch";

	return (
		<Button
			className="gap-3"
			onClick={() => {
				updateOverlay({ open: true });
				updateModal({ target: data, contentType });
				addLastSeen(data);
			}}
		>
			Fast view
		</Button>
	);
}
