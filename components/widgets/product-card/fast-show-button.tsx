"use client";

import useLastSeen from "@/components/hooks/useLastSeen";
import useShowcase from "@/components/hooks/useShowcase";
import { Button } from "@/components/ui/button";
import { useSimilarStore } from "@/lib/store/similar.store";
import { IProduct, useUIStore } from "@/lib/store/ui.store";
import { ShoppingBag } from "lucide-react";
import { usePathname } from "next/navigation";

interface IProps {
	data: IProduct;
}

export default function FastShowButton({ data }: IProps) {
	const updateOverlay = useUIStore((s) => s.updateOverlay);
	const updateModal = useUIStore((s) => s.updateModal);
	const { addLastSeen } = useLastSeen();
	const computeSimilarProducts = useSimilarStore(
		(s) => s.computeSimilarProducts
	);
	const { products } = useShowcase();

	const pathname = usePathname();
	const isProductPage = pathname.includes("product");

	const contentType = "FastWatch";

	return (
		<Button
			className="gap-3"
			onClick={() => {
				updateOverlay({ open: true });
				updateModal({ target: { ...data, amount: 1 }, contentType });
				addLastSeen(data);

				if (!isProductPage) {
					computeSimilarProducts(data, products);
				}
			}}
		>
			<ShoppingBag className="size-4 stroke-[1.5px] stroke-white" />
			Pack
		</Button>
	);
}
