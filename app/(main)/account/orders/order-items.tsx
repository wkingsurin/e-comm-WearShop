import { IOrder } from "@/types/store/orders.types";
import OrderItem from "./order-item";
import { useFavorites } from "@/features/favorites/hooks/use-favorites";

export default function OrderItems({
	data,
	currency,
}: {
	data: IOrder["items"];
	currency: string;
}) {
	const { data: favorites = {} } = useFavorites();

	console.log(`[OrderItems]:`, data);

	return (
		<div className="flex gap-3">
			{data.map((item) => {
				return (
					<OrderItem
						key={item.id}
						data={item}
						isFavorite={!!favorites[item.id]}
						currency={currency}
					/>
				);
			})}
		</div>
	);
}
