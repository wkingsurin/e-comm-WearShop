import PriceList from "./price-list";
import SummaryHeading from "./summary-heading";
import TotalPrice from "./total-price";
import { IPriceLabel } from "@/types/components/widgets/summary.types";

interface ISummary {
    title: string;
    prices: IPriceLabel[];
    currency: string;
    totalPrice: number;
    isEmpty?: boolean;
    children: React.ReactNode;
}

export default function Summary({
    title,
    prices,
    currency,
    totalPrice,
    isEmpty,
    children,
}: ISummary) {
    return (
        <div className="flex flex-col gap-5 w-full">
            <div className={`flex flex-col ${isEmpty ? 'gap-3' : 'gap-4'} min-h-[122px] bg-white rounded-xl px-3 py-6 md:p-6 hover:shadow-[0_0_12px_-3px_rgba(0,0,0,.1)] transition-brand`}>
                {isEmpty ? (
                    <span className="w-full py-2 rounded-md bg-black/5 tracking-wide text-black/75 text-center">Select items to procced to checkout</span>
                ) : (
                    <>
                        <SummaryHeading title={title} />
                        <PriceList prices={prices} currency={currency} />
                        <TotalPrice label="Total price" value={totalPrice} />
                    </>
                )}
                {children}
            </div>
        </div>
    );
}
