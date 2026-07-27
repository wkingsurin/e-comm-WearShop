import OrderPageClient from "./client";

interface IProps {
    params: Promise<{ id: string }>;
}

export default async function OrderPage({ params }: IProps) {
    const { id } = await params;

    return <OrderPageClient orderId={id} />;
}
