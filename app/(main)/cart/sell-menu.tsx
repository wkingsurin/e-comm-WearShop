import { Button } from "@/components/ui/button";
import { ICart } from "@/features/cart/types";
import { useUpdateCheckout } from "@/features/checkout/hooks/use-update-checkout";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function SellMenu({
	cart,
	payments,
}: {
	cart: ICart;
	payments: { id: string; label: string; image: string }[];
}) {
	const { isPending } = useUpdateCheckout();

	const router = useRouter();

	return (
		<div className="sticky top-[154px] flex flex-col gap-5 min-w-[320px]">
			<div className="flex flex-col gap-4 min-h-[188px] rounded-xl border-[0.5px] border-[#E5E7EB] p-6 hover:shadow-[0_0_12px_-3px_rgba(0,0,0,.1)] transition-brand">
				<div className="flex justify-between font-medium tracking-wider leading-lg text-xl font-medium text-wider pb-4 border-b-[1px] border-[#E5E7EB]">
					<span>Total</span>
					<p>$ {cart.total / 100 + "0"}</p>
				</div>
				<div className="flex flex-col gap-3">
					<div className="flex justify-between font-medium tracking-wider leading-lg">
						<span>Total</span>
						<p>$ {cart.subtotal / 100 + "0"}</p>
					</div>
					<div className="flex justify-between font-medium tracking-wider leading-lg">
						<span>Shipping & Service</span>
						<p>$ 0.00</p>
					</div>
				</div>
				<Button
					onClick={() => {
						router.push("/checkout");
					}}
					disabled={isPending}
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
	);
}
