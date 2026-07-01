import { ICartItem } from "@/features/cart/types";
import OrderItem from "./order-item";

export default function OrderItems({
	items,
	isEmpty,
}: {
	items: ICartItem[];
	isEmpty: boolean;
}) {
	return (
		!isEmpty && (
			<>
				<p>{items.length} Items </p>
				<div className="flex gap-3">
					{items.map((item) => (
						<OrderItem key={item.id} item={item} />
					))}
				</div>
			</>
		)
	);
}
