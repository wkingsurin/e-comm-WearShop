import { useUIStore } from "@/lib/store/ui.store";
import { MoveRight } from "lucide-react";
import Link from "next/link";

export default function PageLink({
	productSlug,
	selectedColor,
	selectedSize,
}: {
	productSlug: string;
	selectedColor: string;
	selectedSize: string;
}) {
	return (
		<Link
			href={`/products/${[
				productSlug,
			]}?color=${selectedColor}&size=${selectedSize}`}
			className="flex items-center justify-center gap-3 opacity-50"
			onClick={() => {
				useUIStore.getState().updateOverlay({ open: false });
				useUIStore.getState().changeModalType(null);
				// useSimilarStore
				// 	.getState()
				// 	.computeSimilarProducts(product, currentVariant, showcase);
			}}
		>
			<p className="tracking-wider leading-md">More details</p>
			<MoveRight className="size-4 stroke-[1.5px]" />
		</Link>
	);
}
