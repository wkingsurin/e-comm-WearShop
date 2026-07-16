import HeartButton from "@/components/shared/heart-button";
import { IOrderItem } from "@/types/account/orders/orders.types";
import Image from "next/image";

interface IProps {
    data: {
        item: IOrderItem;
        currency: string;
        colorSize: string;
        isFavortie: boolean;
    };
}

export default function OrderItem({ data }: IProps) {
    return (
        <div
            key={data.item.id}
            className="relative flex flex-col gap-3 w-full overflow-hidden"
        >
            <div className="flex gap-3 items-center">
                <div className="flex flex-col gap-3 items-center justify-center w-[83px] h-[100px] bg-[#F5F5F5] rounded-md">
                    <Image
                        src={data.item.image}
                        alt={data.item.title}
                        width={170}
                        height={240}
                        className="w-[70px] h-[80px] object-contain"
                    />
                </div>
                <div className="flex flex-col gap-[6px] leading-lg tracking-wider text-black/50">
                    <span className="flex gap-1 text-black tracking-wider leading-md">
                        {data.item.title}{" "}
                        <p className="text-black/50 leading-md">
                            x{data.item.quantity}
                        </p>
                    </span>
                    <p>{data.colorSize}</p>
                    <p className="text-black font-bold leading-md">
                        {data.currency === "USD" ? "$" : data.currency}
                        {data.item.price / 100 + "0"}
                    </p>
                </div>
            </div>
            <HeartButton
                productId={data.item.productId}
                isFavorite={data.isFavortie}
            />
        </div>
    );
}
