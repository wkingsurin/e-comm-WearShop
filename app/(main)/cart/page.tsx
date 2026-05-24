"use client";

import useCart from "@/components/hooks/useCart";
import useOrders from "@/components/hooks/useOrders";
import Main from "@/components/main";
import Container from "@/components/shared/container";
import Section from "@/components/shared/section";
import SectionTitle from "@/components/shared/section-title";
import SortSelect from "@/components/shared/sort-select";
import { Button } from "@/components/ui/button";
import CartItem from "@/components/widgets/cart-item";
import ProductCard from "@/components/widgets/product-card/product-card";
import { ICartItem } from "@/lib/store/cart.store";
import Image from "next/image";

export const DTOOrder = (data: ICartItem) => {
	return { ...data, totalPrice: data.amount * data.price };
};

export default function Cart() {
	const { cartItemsList, cartTotal } = useCart();
	const { createOrder } = useOrders();

	const payments: { id: string; label: string; image: string }[] = [
		{ id: "1", label: "PayPal", image: "image-pay-1.png" },
		{ id: "2", label: "Visa", image: "image-pay-2.png" },
		{ id: "3", label: "Mastercard", image: "image-pay-3.png" },
	];

	const onPurchase = () => {
		cartItemsList.map((item) => {
			createOrder(DTOOrder({ ...item }));
		});
	};

	return (
		<Main>
			<Section>
				<Container>
					<div className="flex flex-col gap-5">
						<SectionTitle>Cart</SectionTitle>
						<div className="flex gap-5">
							<div className="flex flex-col gap-3 w-3/4 p-4 rounded-lg border border-black/10 bg-[#D9D9D9]/10">
								<div className="flex items-center justify-between">
									<span className="text-xl font-medium tracking-wider">
										Delivery
									</span>
									<div className="h-7 rounded-md font-medium px-3 py-[3px] bg-black/5 leading-lg">
										Tue, 5/26 - Sat, 5/30
									</div>
								</div>
								<div className="flex flex-col gap-3">
									{cartItemsList.map((item) => (
										<CartItem key={item.id} data={item} />
									))}
								</div>
							</div>
							<div className="flex flex-col gap-5 w-1/4">
								<div className="flex flex-col gap-4 min-h-[188px] bg-[#D9D9D9]/10 rounded-xl border-[0.5px] border-black/10 p-4">
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
									<div className="flex justify-between font-medium tracking-wider leading-lg text-xl font-medium text-wider">
										<span>Total</span>
										<p>$ {cartTotal / 100 + "0"}</p>
									</div>
									<Button onClick={onPurchase}>Proceed to checkout</Button>
								</div>
								<div className="flex flex-col gap-3 min-h-[94px] bg-[#D9D9D9]/10 rounded-xl border-[0.5px] border-black/10 p-4">
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
			<Section>
				<Container>
					<div className="flex flex-col gap-5">
						<div className="flex flex-col gap-[6px]">
							<span className="uppercase font-medium text-black/50 tracking-wider">
								You See
							</span>
							<div className="flex items-center justify-between">
								<SectionTitle>Last seen products</SectionTitle>
								<SortSelect />
							</div>
						</div>
						<div className="flex flex-wrap gap-5">
							{cartItemsList.map((item) => (
								<ProductCard key={item.id} data={item} />
							))}
						</div>
					</div>
				</Container>
			</Section>
		</Main>
	);
}
