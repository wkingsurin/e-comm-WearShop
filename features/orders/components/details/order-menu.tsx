import DashboardWrapperTitle from "@/components/shared/dashboard-wrapper-title";
import { IOrder } from "@/types/account/orders/orders.types";

export default function OrderMenu({ order }: { order: IOrder }) {
    return (
        <div>
            <DashboardWrapperTitle title={`Order ${order.orderNumber}`} />
        </div>
    );
}
