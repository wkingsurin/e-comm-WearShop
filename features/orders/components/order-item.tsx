import { IOrderItem } from "@/types/account/orders/orders.types";
import Image from "next/image";

export default function OrderItem({
    data,
    currency,
}: {
    data: IOrderItem;
    isFavorite: boolean;
    currency: string;
}) {
    const colorSize = data.selectedSize.toLowerCase() === 'one-size' ? data.selectedColor : `${data.selectedColor} · ${data.selectedSize}`

    return (
        <div
            key={data.id}
            className="flex flex-col items-center gap-3 p-3 rounded-xl bg-[#E5E7EB]/50 overflow-hidden"
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
            <div className="flex flex-col items-center gap-[6px] text-center leading-lg tracking-wider text-black/50">
                <p className="text-md">{colorSize}</p>
                <div className="flex items-center gap-1">
                    <p className="text-black font-bold tracking-wide">
                        {currency === "USD" ? "$" : currency}
                        {data.price / 100 + "0"}
                    </p>
                    <p className="text-md text-black/50 font-medium tracking-wider leading-md">x{data.quantity}</p>
                </div>
            </div>
        </div>
    );
}
