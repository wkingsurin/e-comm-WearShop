import { IDetails } from "./product-client";
import { IProduct, IVariant } from "@/types/store/ui.types";
import { useMemo } from "react";
import ColorSelector from "@/components/widgets/color-selector/color-selector";
import SizeSelector from "@/components/widgets/size-selector/size-selector";

interface IProps {
    product: IProduct;
    currentVariant: IVariant;
    detailsData: IDetails[];
    activeColorId: string;
}

export default function Description({
    product,
    currentVariant,
    detailsData,
    activeColorId,
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
        <div className="flex flex-col py-4 gap-6 min-w-[332px]">
            <div className="flex flex-col gap-2 justify-between">
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
            <div className="flex flex-col gap-[6px]">
                <span className="font-medium leading-lg tracking-wider">
                    Details
                </span>
                <div className="flex flex-col [&>*:not(:last-child)]:border-b-[0.5px] [&>*:not(:last-child)]:border-[#E5E7EB]">
                    {detailsData.map((item) => {
                        return (
                            <div key={item.id} className="flex items-start gap-3 py-2 leading-md">
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
