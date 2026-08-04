"use client";

import { Trash2 } from "lucide-react";
import Image from "next/image";
import { useUIStore } from "@/lib/store/ui.store";
import { ICartItemProps } from "@/types/components/widgets/cart-item.types";
import useRemoveItem from "@/features/cart/hooks/use-remove-item";
import { useUpdateQunatity } from "@/features/cart/hooks/use-update-quantity";
import { Button } from "@/components/ui/button";
import { formatMoney } from "@/lib/money";
import Counter from "@/components/shared/counter";

export default function CartItem({ data }: ICartItemProps) {
    const formattedPrice = formatMoney(data.quantity * data.price);

    const openConfirm = useUIStore((s) => s.openConfirm);

    const { mutate: updateQuantity } = useUpdateQunatity();
    const { mutate: removeItem } = useRemoveItem();

    const handleDelete = () => {
        openConfirm({
            title: "Remove this item?",
            content: "You`re sure? Undo this isn`t possible!",
            confirmText: "Confirm",
            cancelText: "Cancel",
            onConfirm: () => removeItem(data.cartItemId),
        });
    };

    return (
        <div className="flex gap-5 overflow-hidden transition-brand">
            <div className="relative flex items-center justify-center w-[133px] h-[160px] bg-[#F4F4F6] rounded-md">
                <Image
                    src={data.image}
                    alt={data.title}
                    width={169}
                    height={240}
                    className="rounded-md w-[100px] h-full object-contain"
                />
            </div>
            <div className="flex gap-[60px] justify-between flex-1 py-2">
                <div className="flex flex-col items-start justify-between">
                    <div className="flex flex-col gap-[6px] font-mono">
                        <span className="font-medium leading-lg tracking-wider">
                            {data.title}
                        </span>
                        <p className="text-md text-black/50 tracking-wider leading-lg">
                            {`${data.selectedColor.value}`}
                            {data.selectedSize.toLowerCase() !== "one-size" &&
                                ` · ${data.selectedSize}`}
                        </p>
                    </div>

                    <Counter
                        quantity={data.quantity}
                        stock={data.maxStock}
                        decrement={() =>
                            updateQuantity({
                                cartItemId: data.cartItemId,
                                quantity: data.quantity - 1,
                            })
                        }
                        increment={() =>
                            updateQuantity({
                                cartItemId: data.cartItemId,
                                quantity: data.quantity + 1,
                            })
                        }
                    />

                    <span className="font-bold tracking-wider leading-md">
                        {formattedPrice}
                    </span>
                </div>
                <Button
                    className="group/cancel flex gap-3 w-10 h-10 bg-black/10 hover:bg-[#EC0404]/10 text-black hover:text-[#EC0404]/75"
                    onClick={() => {
                        handleDelete();
                    }}
                >
                    <Trash2 className="size-4 stroke-[1.5px] stroke-black group-hover/cancel:stroke-[#EC0404]/75 transition-brand" />
                </Button>
            </div>
        </div>
    );
}
