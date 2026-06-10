"use client";

import { mapCartItemsToOrder } from "@/app/mappers/mapper";

import { useCartStore } from "@/lib/store/cart.store";
import useCart from "@/hooks/useCart";
import useOrders from "@/hooks/useOrders";

import Main from "@/components/main";
import Container from "@/components/shared/container";
import Section from "@/components/shared/section";
import SectionTitle from "@/components/shared/section-title";
import LastSeenSection from "@/components/widgets/last-seen-section";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { IOrder } from "@/app/types/store/orders.types";
import Content from "./content";

export default function Cart() {
	const hasHydrated = useCartStore((s) => s._hasHydrated);
	const { cartItemsList, removeItem, cartTotal } = useCart();
	const { createOrder } = useOrders();

	const payments: { id: string; label: string; image: string }[] = [
		{ id: "1", label: "PayPal", image: "image-pay-1.png" },
		{ id: "2", label: "Visa", image: "image-pay-2.png" },
		{ id: "3", label: "Mastercard", image: "image-pay-3.png" },
	];

	const onPurchase = () => {
		const order = mapCartItemsToOrder(cartItemsList) as IOrder;
		createOrder(order);

		cartItemsList.map((item) => {
			removeItem(item);
		});
	};

	return (
		<Main>
			<Section>
				<Container>
					<div className="flex flex-col gap-5">
						<SectionTitle>Cart</SectionTitle>
						<div className="relative flex items-start gap-5">
							<Content
								isHydrated={hasHydrated}
								isEmpty={cartItemsList.length === 0}
							/>
							<div className="sticky top-[154px] flex flex-col gap-5 min-w-[320px]">
								<div className="flex flex-col gap-4 min-h-[188px] rounded-xl border-[0.5px] border-[#E5E7EB] p-6 hover:shadow-[0_0_12px_-3px_rgba(0,0,0,.1)] transition-brand">
									<div className="flex justify-between font-medium tracking-wider leading-lg text-xl font-medium text-wider pb-4 border-b-[1px] border-[#E5E7EB]">
										<span>Total</span>
										<p>$ {cartTotal / 100 + "0"}</p>
									</div>
									<div className="flex flex-col gap-3">
										<div className="flex justify-between font-medium tracking-wider leading-lg">
											<span>Total</span>
											{/* <p>$ {(cartItemsList.length * data[0].price) / 100 + "0"}</p> */}
										</div>
										<div className="flex justify-between font-medium tracking-wider leading-lg">
											<span>Shipping & Service</span>
											<p>$ 0.00</p>
										</div>
									</div>
									<Button
										onClick={onPurchase}
										disabled={
											!hasHydrated ||
											(hasHydrated && cartItemsList.length === 0)
										}
									>
										Proceed to checkout
									</Button>
								</div>
								<div className="flex flex-col gap-3 min-h-[94px] rounded-xl border-[0.5px] border-[#E5E7EB] p-6 hover:shadow-[0_0_12px_-3px_rgba(0,0,0,.1)] transition-brand">
									<span>Available payments</span>
									<div className="flex gap-[6px]">
										{payments.map((item) => (
											<div
												key={item.id}
												className="flex items-center justify-center rounded-md bg-black/5 border-[0.5px] border-black/10 w-1/3 h-7"
											>
												<Image
													src={`/${item.image}`}
													alt={item.label}
													width={62}
													height={16}
													className="h-4 object-contain"
												/>
											</div>
										))}
									</div>
								</div>
							</div>
						</div>
					</div>
				</Container>
			</Section>
			<LastSeenSection />
		</Main>
	);
}
