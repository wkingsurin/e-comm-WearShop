"use client";

import useLastSeen from "@/components/hooks/useLastSeen";
import { Button } from "@/components/ui/button";
import { IProduct, useUIStore } from "@/lib/store/ui.store";

interface IProps {
	data: IProduct;
}

export default function FastViewButton({ data }: IProps) {
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
