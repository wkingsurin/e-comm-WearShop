import { IOrderTotals } from "@/types/store/orders.types";

export default function OrderSummary({ totals }: { totals: IOrderTotals }) {
    return (
        <div className="flex flex-col gap-3 w-1/3 rounded-xl bg-[#D9D9D9]/25 p-4">
            <span className="uppercase">Total summary</span>
            <div className="flex flex-col gap-3">
                <div className="flex flex-col gap-3 pb-4 border-b-[1px] border-[#E5E7EB]">
                    <div className="flex justify-between items-center">
                        <span>Subtotal</span>
                        <p>
                            {totals.items > 0
                                ? totals.items / 100 + "0"
                                : totals.items}
                        </p>
                    </div>
                    <div className="flex justify-between items-center">
                        <span>Shipping & Service</span>
                        <p>
                            {totals.delivery > 0
                                ? totals.delivery / 100 + "0"
                                : totals.delivery}
                        </p>
                    </div>
                    <div className="flex justify-between items-center">
                        <span>Discount</span>
                        <p>
                            {totals.discount > 0
                                ? totals.discount / 100 + "0"
                                : totals.discount}
                        </p>
                    </div>
                    <div className="flex justify-between items-center">
                        <span>Tax</span>
                        <p>0</p>
                    </div>
                </div>
                <div className="flex justify-between items-center">
                    <span>Total price</span>
                    <p>{totals.total / 100 + "0"}</p>
                </div>
            </div>
        </div>
    );
}
