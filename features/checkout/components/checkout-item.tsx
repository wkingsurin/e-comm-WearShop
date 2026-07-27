import { ICartItem } from "@/features/cart/types";
import { getItemPrices } from "@/lib/money/get-item-price";
import Image from "next/image";

export default function CheckoutItem({ item }: { item: ICartItem }) {
    const { formattedPrice } = getItemPrices(item.price, item.oldPrice!);

    return (
        <div
            key={item.id}
            className="basis-[calc(33.333%-5px)] md:basis-[calc(20%-6px)] flex flex-col items-center gap-3 p-3 rounded-md bg-[#E5E7EB]/50 overflow-hidden"
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
                <p className="tracking-wider text-black/50 leading-5 text-md">
                    {item.selectedColor.value}
                    {item.categoryName !== "Caps" && ` · ${item.selectedSize}`}
                </p>
                <span className="flex gap-1 leading-5 font-bold tracking-wider">
                    {formattedPrice}
                    <p className="font-normal text-black/50">
                        x{item.quantity}
                    </p>
                </span>
            </div>
        </div>
    );
}
