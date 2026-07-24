import SummaryHeadingSkeleton from "./summary-heading-skeleton";
import PriceListSkeleton from "./price-list-skeleton";
import TotalPriceSkeleton from "./total-price-skeleton";

interface IProps {
    children: React.ReactNode;
}

export default function SummarySkeleton({ children }: IProps) {
    return (
        <div className="flex flex-col gap-5 w-full">
            <div
                className={`flex flex-col gap-4 min-h-[122px] bg-white rounded-xl px-3 py-6 md:p-6 hover:shadow-[0_0_12px_-3px_rgba(0,0,0,.1)] transition-brand`}
            >
                <SummaryHeadingSkeleton />
                <PriceListSkeleton />
                <TotalPriceSkeleton />
                {children}
            </div>
        </div>
    );
}
