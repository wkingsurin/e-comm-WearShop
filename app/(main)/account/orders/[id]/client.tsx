"use client";

import DashboardWrapper from "@/components/shared/dashboard-wrapper";
import Menu from "./menu";
import { useOrder } from "@/features/orders/hooks/use-order";
import { EMPTY_ORDER } from "@/features/orders/constants";
import Image from "next/image";

export default function OrderPageClient({ orderId }: { orderId: string }) {
	const { data: order = EMPTY_ORDER } = useOrder(orderId);

	return (
		<DashboardWrapper pageTitle={<Menu order={order} />}>
			<div className="flex flex-col gap-5">
				<div className="flex gap-5">
					<div className="flex flex-col gap-3 w-1/3 rounded-xl bg-[#D9D9D9]/25 p-4">
						<span className="uppercase">Delivery INFORMATION</span>
						<div className="flex flex-col gap-2">
							<p>{order.customer.name}</p>
							<p>
								{order.shipping.address}, {order.shipping.city},{" "}
								{order.shipping.postalCode}
							</p>
							<div className="flex gap-4">
								<span>Method</span>
								<p>{order.delivery.method}</p>
							</div>
						</div>
					</div>
					<div className="flex flex-col gap-3 w-1/3 rounded-xl bg-[#D9D9D9]/25 p-4">
						<span className="uppercase">Payment</span>
						<div>
							<p>{order.payment.method}</p>
							<p>{order.payment.isPaid ? "Successfully paid" : "Not paid"}</p>
						</div>
					</div>
					<div className="flex flex-col justify-between w-1/3 rounded-xl bg-[#D9D9D9]/25 p-4">
						<div className="flex flex-col gap-3">
							<span className="uppercase">Timeline</span>
							<div>
								<div className="flex gap-4">
									<span>Estimated:</span>
									<p>26-30 May, 2026</p>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="flex gap-5">
					<div className="flex flex-col gap-3 w-2/3 rounded-xl bg-[#D9D9D9]/25 p-4">
						<span className="uppercase">Products</span>
						<div className="flex gap-3">
							{order.items.map((item) => (
								<div
									key={item.id}
									className="flex flex-col gap-3 md:w-1/4 p-3 rounded-xl bg-[#E5E7EB]/50 overflow-hidden"
								>
									<div className="flex flex-col gap-3 items-center justify-center h-[100px]">
										<Image
											src={item.image}
											alt={item.title}
											width={170}
											height={240}
											className="w-[70px] h-[80px] object-contain"
										/>
									</div>
									<div className="flex flex-col gap-[6px] text-center leading-lg tracking-wider text-black/50">
										<p>{`${item.selectedColor} · ${item.selectedSize}`}</p>
										<p>Qty: {item.quantity}</p>
										<p className="text-black">
											{order.currency} {item.price / 100 + "0"}
										</p>
									</div>
								</div>
							))}
						</div>
					</div>
					<div className="flex flex-col gap-3 w-1/3 rounded-xl bg-[#D9D9D9]/25 p-4">
						<span className="uppercase">Total summary</span>
						<div className="flex flex-col gap-3">
							<div className="flex flex-col gap-3 pb-4 border-b-[1px] border-[#E5E7EB]">
								<div className="flex justify-between items-center">
									<span>Subtotal</span>
									<p>
										{order.totals.items > 0
											? order.totals.items / 100 + "0"
											: order.totals.items}
									</p>
								</div>
								<div className="flex justify-between items-center">
									<span>Shipping & Service</span>
									<p>
										{order.totals.delivery > 0
											? order.totals.delivery / 100 + "0"
											: order.totals.delivery}
									</p>
								</div>
								<div className="flex justify-between items-center">
									<span>Discount</span>
									<p>
										{order.totals.discount > 0
											? order.totals.discount / 100 + "0"
											: order.totals.discount}
									</p>
								</div>
								<div className="flex justify-between items-center">
									<span>Tax</span>
									<p>0</p>
								</div>
							</div>
							<div className="flex justify-between items-center">
								<span>Total price</span>
								<p>{order.totals.total / 100 + "0"}</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</DashboardWrapper>
	);
}
