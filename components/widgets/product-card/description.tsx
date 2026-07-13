import Link from "next/link";
import { IProductDescriptionProps } from "@/types/components/widgets/product-card.types";
import { getColorById } from "@/lib/selectors/product.selectors";
import Discount from "./discount";

export default function Description({
    data,
    defaultVariant,
}: IProductDescriptionProps) {
    const defaultColorId = defaultVariant.attributes.colorId;
    const defaultColor = getColorById(data, defaultColorId)?.slug;
    const defaultSize = defaultVariant.attributes.size;

    return (
        <div className="flex flex-col justify-between gap-3 px-3 pb-3">
            <div className="flex justify-between items-end gap-10">
                <div className="flex items-end gap-1">
                    <span className="font-bold tracking-wide leading-md">
                        {data.currency === "USD" ? "$" : data.currency}
                        {defaultVariant.price / 100 + "0"}
                    </span>
                    <span className="font-medium text-sm text-black/35 line-through tracking-wide leading-md">
                        {data.currency === "USD" ? "$" : data.currency}
                        {defaultVariant.oldPrice! / 100 + "0"}
                    </span>
                </div>
                <Discount value="-35%" />
            </div>
            <div className="flex flex-col gap-[6px] items-start leading-base text-sans uppercase tracking-wider">
                <Link
                    href={`/products/${data.slug}?color=${defaultColor}&size=${defaultSize}`}
                    className="font-medium text-md tracking-wider leading-md hover:underline"
                >
                    {data.title}
                </Link>
                <span className="text-sm text-black/50">{data.brand.name}</span>
            </div>
        </div>
    );
}
