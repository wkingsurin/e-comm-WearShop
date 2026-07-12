import { useState } from "react";
import OrderContent from "./order-content";
import OrderMenu from "./order-menu";
import { IOrderProps } from "@/types/account/orders/orders.types";

export default function Order({ data }: IOrderProps) {
	const [open, setOpen] = useState<boolean>(false);

	const toggleOrder = () => setOpen((prev) => !prev);

	return (
		<div
			className={`flex flex-col gap-3 w-full ${
				open ? "min-h-[363px]" : "min-h-[72px]"
			} p-4 rounded-lg border border-black/10 bg-[#D9D9D9]/10 transition-brand`}
		>
			<OrderMenu data={data} toggleOrder={toggleOrder} />
			{open && <OrderContent data={data} />}
		</div>
	);
}
