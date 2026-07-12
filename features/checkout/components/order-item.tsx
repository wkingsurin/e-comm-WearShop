import { ICartItem } from "@/features/cart/types";
import Image from "next/image";

export default function OrderItem({ item }: { item: ICartItem }) {
    return (
        <div
            key={item.id}
            className="flex flex-col gap-3 flex-1 w-1/5 p-3 rounded-xl bg-[#E5E7EB]/50 overflow-hidden"
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
            <div className="text-center">
                <p className="leading-xl tracking-wider text-black/50">
                    {item.selectedColor.value}
                    {item.categoryName !== "Caps" && ` · ${item.selectedSize}`}
                </p>
                <p className="leading-xl tracking-wider text-black/50">
                    Qty: {item.quantity}
                </p>
                <p>
                    {item.currency} {item.price / 100 + "0"}
                </p>
            </div>
        </div>
    );
}
