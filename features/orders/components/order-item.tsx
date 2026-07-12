import { IOrderItem } from "@/types/store/orders.types";
import Image from "next/image";

export default function OrderItem({
    data,
    currency,
}: {
    data: IOrderItem;
    isFavorite: boolean;
    currency: string;
}) {
    return (
        <div
            key={data.id}
            className="flex flex-col gap-3 md:w-1/5 p-3 rounded-xl bg-[#E5E7EB]/50 overflow-hidden"
        >
            <div className="flex flex-col gap-3 items-center justify-center h-[100px]">
                <Image
                    src={data.image}
                    alt={data.title}
                    width={170}
                    height={240}
                    className="w-[70px] h-[80px] object-contain"
                />
            </div>
            <div className="flex flex-col gap-[6px] text-center leading-lg tracking-wider text-black/50">
                <p>{`${data.selectedColor} · ${data.selectedSize}`}</p>
                <p>Qty: {data.quantity}</p>
                <p className="text-black">
                    {currency} {data.price / 100 + "0"}
                </p>
            </div>
        </div>
    );
}
