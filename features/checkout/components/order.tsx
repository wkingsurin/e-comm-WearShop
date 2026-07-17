import DashboardWrapper from "@/components/shared/dashboard-wrapper";
import OrderItems from "./order-items";
import Shipping from "../../../features/checkout/components/shipping";
import { ICartItem } from "@/features/cart/types";
import PaymentSelector from "./payment/payment-selector";
import { useCheckout } from "@/features/checkout/hooks/use-checkout";
import { EMPTY_CHECKOUT } from "@/features/checkout/constants";
import DeliverySelector from "./delivery/delivery-selector";
import Link from "next/link";
import { MoveLeft } from "lucide-react";

export default function Order({
    items,
    totalItems,
}: {
    items: ICartItem[];
    totalItems: number;
}) {
    const { data: checkout = EMPTY_CHECKOUT } = useCheckout();

    console.log(`[CHECKOUT] items:`, items);

    return (
        <div className="flex flex-col gap-5 w-full">
            <DashboardWrapper
                pageTitle={
                    <div className="flex items-center gap-3">
                        <Link
                            href="/cart"
                            className="group/page-back flex items-center gap-3 font-bold text-md leading-base tracking-wider text-black/50 hover:no-underline cursor-pointer h-auto px-0 hover:text-black transition-brand"
                        >
                            <MoveLeft className="size-4 stroke-black/50 group-hover/page-back:stroke-black transition-brand" />{" "}
                            Back to Cart
                        </Link>
                        <p>x{items.length} Items </p>
                    </div>
                }
                className="min-h-[auto]"
            >
                <OrderItems items={items} isEmpty={totalItems === 0} />
            </DashboardWrapper>
            <div className="flex gap-3 w-full">
                <PaymentSelector method={checkout.paymentMethod} />
                <DeliverySelector method={checkout.deliveryMethod} />
            </div>
            <Shipping
                shippingData={checkout}
                customerName={checkout.customerName}
            />
        </div>
    );
}
