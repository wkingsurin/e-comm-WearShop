import { mapProductToCartItem } from "@/app/mappers/mapper";
import HeartButton from "@/components/shared/heart-button";
import { Button } from "@/components/ui/button";
import { useAddToCart } from "@/features/cart/hooks/use-add-to-cart";
import { IProduct, IVariant } from "@/types/store/ui.types";
import { ShoppingBag } from "lucide-react";

interface IProps {
    product: IProduct;
    currentVariant: IVariant;
    quantity: number;
    isFavorite: boolean;
}

export default function ProductMenu({
    product,
    currentVariant,
    quantity,
    isFavorite,
}: IProps) {
    const { mutate: addItem } = useAddToCart();

    const itemToCart = mapProductToCartItem(product, currentVariant, quantity);

    return (
        <div className="lg:hidden sticky bottom-[50px] z-100 flex gap-3 w-full p-3! bg-white">
            <Button
                className="flex-1 bg-black h-[50px]"
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
                size="lg"
            />
        </div>
    );
}
