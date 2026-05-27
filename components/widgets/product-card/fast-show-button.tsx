"use client";

import useLastSeen from "@/components/hooks/useLastSeen";
import { Button } from "@/components/ui/button";
import { IProduct, useUIStore } from "@/lib/store/ui.store";
import { ShoppingBag } from "lucide-react";

interface IProps {
	data: IProduct;
}

export default function FastShowButton({ data }: IProps) {
	const updateOverlay = useUIStore((s) => s.updateOverlay);
	const updateModal = useUIStore((s) => s.updateModal);
	const { addLastSeen } = useLastSeen();

	const contentType = "FastWatch";

	return (
		<Button
			className="gap-3"
			onClick={() => {
				updateOverlay({ open: true });
				updateModal({ target: { ...data, amount: 1 }, contentType });
				addLastSeen(data);
			}}
		>
			<ShoppingBag className="size-4 stroke-[1.5px] stroke-white" />
			Pack
		</Button>
	);
}
