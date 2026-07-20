import { IDetails } from "./product-client";
import { IProduct, IVariant } from "@/types/store/ui.types";
import { useMemo } from "react";
import ColorSelector from "@/components/widgets/color-selector/color-selector";
import SizeSelector from "@/components/widgets/size-selector/size-selector";
import { Button } from "@/components/ui/button";
import { Minus, Plus } from "lucide-react";

interface IProps {
    product: IProduct;
    currentVariant: IVariant;
    detailsData: IDetails[];
    activeColorId: string;
    quantity: number;
    incrementItem: () => void;
    decrementItem: () => void;
}

export default function Description({
    product,
    currentVariant,
    detailsData,
    activeColorId,
    quantity,
    incrementItem,
    decrementItem,
}: IProps) {
    const colors = product.options.color;

    const availableSizes = useMemo(() => {
        return product.options.size.map((size) => ({
            value: size.value,
            isAvailable: product.variants.some(
                (variant) =>
                    variant.attributes.colorId === activeColorId &&
                    variant.attributes.size === size.value &&
                    variant.stock > 0,
            ),
        }));
    }, [product, activeColorId]);
    const defaultSize = currentVariant.attributes.size;

    return (
        <div className="flex flex-col py-4 gap-6 w-full md:w-auto min-w-[332px]">
            <div className="flex flex-col gap-2 justify-between">
                <span className="lg:hidden text-lg font-bold leading-base tracking-wider">
                    {product.currency === "USD" ? "$" : product.currency}
                    {currentVariant.price / 100 + "0"}
                </span>
                <h3 className="text-lg font-medium uppercase tracking-wider leading-md">
                    {product.title}
                </h3>
                <span className="text-md text-black/50 uppercase font-medium tracking-wider">
                    {product.brand.name}
                </span>
            </div>

            <ColorSelector
                colors={colors}
                type="Page"
                defaultSize={defaultSize}
            />

            {currentVariant.attributes.size.toLowerCase() !== "one-size" && (
                <SizeSelector
                    sizes={availableSizes}
                    initialSize={currentVariant.attributes.size}
                />
            )}

            <div className="flex flex-col gap-2 md:flex-row md:gap-0 md:hidden items-start md:items-center justify-between">
                <span className="font-medium tracking-wider leading-lg">
                    Quantity
                </span>
                <div className="group/counter flex rounded-xl bg-white border-[0.5px] border-black/10 hover:border-black/15 hover:shadow-[0_0_9px_-3px_var(--black)]/25 transition-brand">
                    <Button
                        className="flex gap-3 w-[50px] h-[50px] md:w-10 md:h-10 bg-white hover:bg-white"
                        onClick={decrementItem}
                        disabled={quantity === 1}
                    >
                        <Minus className="size-4 stroke-[1.5px] stroke-black" />
                    </Button>
                    <span className="flex items-center justify-center w-[50px] h-[50px] md:w-10 md:h-10 font-mono tracking-wider leading-lg">
                        {quantity}
                    </span>
                    <Button
                        className="flex gap-3 w-[50px] h-[50px] md:w-10 md:h-10 bg-white hover:bg-white"
                        onClick={incrementItem}
                        disabled={quantity === currentVariant.stock}
                    >
                        <Plus className="size-4 stroke-[1.5px] stroke-black" />
                    </Button>
                </div>
            </div>

            <div className="flex flex-col gap-[6px]">
                <span className="font-medium leading-lg tracking-wider">
                    Details
                </span>
                <div className="flex flex-col [&>*:not(:last-child)]:border-b-[0.5px] [&>*:not(:last-child)]:border-[#E5E7EB]">
                    {detailsData.map((item) => {
                        return (
                            <div
                                key={item.id}
                                className="flex items-start gap-3 py-2 leading-md"
                            >
                                <span className="text-sans min-w-[160px] text-md text-black/50 uppercase font-medium">
                                    {item.label}
                                </span>
                                <p className="text-sans tracking-wide max-w-[180px]">
                                    {item.description}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
