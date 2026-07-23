import { Button } from "@/components/ui/button";
import { Minus, Plus, ShoppingBag, Truck } from "lucide-react";
import { IProduct, IVariant } from "@/types/store/ui.types";
import HeartButton from "@/components/shared/heart-button";
import { useAddToCart } from "@/features/cart/hooks/use-add-to-cart";
import { mapProductToCartItem } from "@/app/mappers/mapper";
import { getItemPrices } from "@/lib/money/get-item-price";
import Counter from "@/components/shared/counter";

interface IProps {
    product: IProduct;
    currentVariant: IVariant;
    isFavorite: boolean;
    quantity: number;
    incrementItem: () => void;
    decrementItem: () => void;
}

export default function SellMenu({
    product,
    currentVariant,
    isFavorite,
    quantity,
    incrementItem,
    decrementItem,
}: IProps) {
    const { formattedPrice } = getItemPrices(
        currentVariant.price,
        currentVariant.oldPrice!,
    );

    const { mutate: addItem } = useAddToCart();

    const itemToCart = mapProductToCartItem(product, currentVariant, quantity);

    return (
        <div className="hidden md:flex relative lg:sticky lg:top-[154px] flex-col gap-5 w-full hover:shadow-[0_0_12px_-3px_rgba(0,0,0,.1)] transition-brand">
            <div className="flex flex-col gap-4 min-h-[188px] bg-[#D9D9D9]/10 bg-white rounded-xl p-6">
                <div className="flex flex-col gap-3">
                    <span className="text-lg font-bold tracking-wider leading-base">
                        {formattedPrice}
                    </span>
                </div>
                <div className="flex flex-col gap-[10px]">
                    <div className="flex flex-col gap-2">
                        <div className="flex items-center justify-between">
                            <span>Quantity</span>
                            <Counter
                                quantity={quantity}
                                stock={currentVariant.stock}
                                increment={incrementItem}
                                decrement={decrementItem}
                            />
                        </div>
                        <div className="flex items-center justify-between">
                            <span className="tracking-wider ">Delivery</span>
                            <p className="font-mono tracking-wide">
                                Satturday 5/30
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col gap-2">
                        <div className="relative flex gap-3">
                            <Button
                                className="flex-1 bg-black"
                                disabled={currentVariant.attributes.size === ""}
                                onClick={() => {
                                    if (!currentVariant.attributes.size)
                                        return console.log(`Select size!!!`);

                                    addItem({
                                        variantId: currentVariant.id,
                                        quantity,
                                        item: itemToCart,
                                    });
                                }}
                            >
                                <ShoppingBag className="size-4 stroke-[1px]" />
                                Pack
                            </Button>
                            <HeartButton
                                productId={product.id}
                                isFavorite={isFavorite}
                                inline
                            />
                        </div>
                        <div className="flex items-center justify-center gap-2 opacity-50">
                            <Truck className="size-4 stroke-[1.5px]" />
                            <p className="text-sm tracking-wider leading-md">
                                Free shipping
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
