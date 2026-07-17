import { Button } from "@/components/ui/button";
import { useCreateOrder } from "@/features/orders/hooks/use-create-order";

interface ISummary {
    options: {
        totalItems: number;
        subtotal: number;
        total: number;
        currency: string;
    };
}

export default function Summary({ options }: ISummary) {
    const { totalItems, subtotal, total, currency } = options;

    const { mutate, isPending } = useCreateOrder();

    return (
        <div className="flex flex-col gap-5 w-full">
            <div className="flex flex-col gap-4 min-h-[188px] bg-white rounded-xl p-6 hover:shadow-[0_0_12px_-3px_rgba(0,0,0,.1)] transition-brand">
                <div className="flex justify-between font-medium tracking-wide leading-lg font-medium text-black/75">
                    <span className="uppercase font-medium tracking-wide text-black/75">
                        Total summary
                    </span>
                </div>
                <div className="flex flex-col gap-3">
                    <div className="flex justify-between tracking-wider leading-lg font-medium">
                        <span>Items ({totalItems})</span>
                        <p className="font-bold">${subtotal / 100 + "0"}</p>
                    </div>
                    <div className="flex justify-between tracking-wider leading-lg font-medium">
                        <span>Shipping & Service</span>
                        <p className="font-bold">$12.00</p>
                    </div>
                    <div className="flex justify-between tracking-wider leading-lg font-medium">
                        <span>Discount</span>
                        <p className="font-bold">-$5.10</p>
                    </div>
                    <div className="flex justify-between tracking-wider leading-lg font-medium">
                        <span>Tax</span>
                        <p className="font-bold">$0.00</p>
                    </div>
                </div>
                <div className="flex justify-between font-medium tracking-wider leading-lg border-t-[1px] border-[#E5E7EB] pt-4 ">
                    <span>Total price</span>
                    <p className="font-bold">${total / 100 + 12 - 5.1 + "0"}</p>
                </div>
                <div className="flex flex-col gap-2">
                    <Button
                        onClick={() => mutate()}
                        disabled={isPending}
                        className="h-[50px] bg-black"
                    >
                        Place order
                    </Button>
                    <p className="text-center font-mono text-sm leading-md text-black/50">
                        By clicking you agree to our Terms of Sale and Privacy
                        Policy.
                    </p>
                </div>
            </div>
        </div>
    );
}
