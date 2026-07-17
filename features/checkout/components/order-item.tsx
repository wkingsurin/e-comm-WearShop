import { ICartItem } from "@/features/cart/types";
import Image from "next/image";

export default function OrderItem({ item }: { item: ICartItem }) {
    return (
        <div
            key={item.id}
            className="flex flex-col gap-3 basis-1/5 max-w-[143.2px] p-3 rounded-xl bg-[#E5E7EB]/50 overflow-hidden"
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
            <div className="flex flex-col gap-[6px] items-center text-center">
                <p className="leading-xl tracking-wider text-black/50 leading-md text-md">
                    {item.selectedColor.value}
                    {item.categoryName !== "Caps" && ` · ${item.selectedSize}`}
                </p>
                <span className="flex gap-1 leading-md font-bold tracking-wider">
                    {item.currency === "USD" ? "$" : item.currency}
                    {item.price / 100 + "0"} <p className="font-normal text-black/50">x{item.quantity}</p>
                </span>
            </div>
        </div>
    );
}
