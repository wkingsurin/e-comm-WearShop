import { IOrder, IOrderItem } from "@/types/account/orders/orders.types";
import Image from "next/image";

interface IProps {
    items: IOrderItem[];
    currency: IOrder["currency"];
}

export default function OrderProducts({ items, currency }: IProps) {
    return (
        <div className="flex flex-col gap-3 w-2/3 rounded-xl bg-[#D9D9D9]/25 p-4">
            <span className="uppercase">Products</span>
            <div className="flex gap-3">
                {items.map((item) => (
                    <div
                        key={item.id}
                        className="flex flex-col gap-3 md:w-1/4 p-3 rounded-xl bg-[#E5E7EB]/50 overflow-hidden"
                    >
                        <div className="flex flex-col gap-3 items-center justify-center h-[100px]">
                            <Image
                                src={item.image}
                                alt={item.title}
                                width={170}
                                height={240}
                                className="w-[70px] h-[80px] object-contain"
                            />
                        </div>
                        <div className="flex flex-col gap-[6px] text-center leading-lg tracking-wider text-black/50">
                            <p>{`${item.selectedColor} · ${item.selectedSize}`}</p>
                            <p>Qty: {item.quantity}</p>
                            <p className="text-black">
                                {currency} {item.price / 100 + "0"}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
