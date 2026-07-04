import { Button } from "@/components/ui/button";
import { useCreateOrder } from "@/features/orders/hooks/use-create-order";

interface ISummary {
	options: { totalItems: number; subtotal: number; total: number };
}

export default function Summary({ options }: ISummary) {
	const { totalItems, subtotal, total } = options;

	const { mutate, isPending } = useCreateOrder();

	return (
		<div className="sticky top-[154px] flex flex-col gap-5 min-w-[35%]">
			<div className="flex flex-col gap-4 min-h-[188px] rounded-xl border-[0.5px] border-[#E5E7EB] p-6 hover:shadow-[0_0_12px_-3px_rgba(0,0,0,.1)] transition-brand">
				<div className="flex justify-between font-medium tracking-wide leading-lg font-medium text-black/75 pb-4 border-b-[1px] border-[#E5E7EB]">
					<span className="uppercase">Total summary</span>
				</div>
				<div className="flex flex-col gap-3">
					<div className="flex justify-between font-medium tracking-wider leading-lg">
						<span>Items ({totalItems})</span>
						<p>$ {subtotal / 100 + "0"}</p>
					</div>
					<div className="flex justify-between font-medium tracking-wider leading-lg">
						<span>Shipping & Service</span>
						<p>$ 12.00</p>
					</div>
					<div className="flex justify-between font-medium tracking-wider leading-lg">
						<span>Discount</span>
						<p>-$ 5.10</p>
					</div>
					<div className="flex justify-between font-medium tracking-wider leading-lg">
						<span>Tax</span>
						<p>$ 0.00</p>
					</div>
				</div>
				<div className="flex justify-between font-medium tracking-wider leading-lg border-t-[1px] border-[#E5E7EB] pt-4">
					<span>Total price</span>
					<p>$ {total / 100 + 12 - 5.1 + "0"}</p>
				</div>
				<div className="flex flex-col gap-2">
					<Button onClick={() => mutate()} disabled={isPending}>
						Place order
					</Button>
					<p className="text-center font-mono text-sm leading-md text-black/50">
						By clicking you agree to our Terms of Sale and Privacy Policy.
					</p>
				</div>
			</div>
		</div>
	);
}
