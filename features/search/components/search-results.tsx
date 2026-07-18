import { getDefaultVariant } from "@/lib/selectors/product.selectors";
import { IProduct } from "@/types/store/ui.types";
import Link from "next/link";

interface IProps {
    products: IProduct[];
    onClose: () => void;
}

export default function SearchResults({ products, onClose }: IProps) {
    return (
        <div className="absolute left-0 right-0 top-full mt-4 flex flex-col w-full min-h-[calc(20px*8)] bg-white p-1 rounded-md border border-[#F8F9FA]">
            {products.map((product) => {
                const defaultVariant = getDefaultVariant(product);
                const defaultColorId = defaultVariant.attributes.colorId;
                const defaultColor = product.options.color.find(
                    (c) => c.id === defaultColorId,
                );
                const defaultSize = defaultVariant.attributes.size;

                return (
                    <Link
                        key={product.id}
                        href={`/products/${product.slug}?color=${defaultColor?.slug}&size=${defaultSize}`}
                        className="flex flex-col rounded-md hover:bg-[#F8F9FA] px-2 py-1"
                        onClick={onClose}
                    >
                        <span>{product.title}</span>
                    </Link>
                );
            })}
        </div>
    );
}

// href={`/products/${data.slug}?color=${defaultColor.slug}&size=${defaultSize}`}
