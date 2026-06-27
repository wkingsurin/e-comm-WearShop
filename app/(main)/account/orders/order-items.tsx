import { IOrder } from "@/types/store/orders.types";
import OrderItem from "./order-item";
import { useFavorites } from "@/features/favorites/hooks/use-favorites";

export default function OrderItems({ data }: { data: IOrder["items"] }) {
	const { data: favorites = {} } = useFavorites();

	return (
		<div className="flex flex-col gap-3">
			{data.map((item) => {
				return (
					<OrderItem
						key={item.cartItemId}
						data={item}
						isFavorite={!!favorites[item.id]}
					/>
				);
			})}
		</div>
	);
}
