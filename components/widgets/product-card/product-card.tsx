import Description from "./description";
import { IProductCardProps } from "@/types/components/widgets/product-card.types";
import { getDefaultVariant } from "@/lib/selectors/product.selectors";
import ProductCardSkeleton from "./skeleton/product-card-skeleton";
import GalleryDesktop from "./gallery-desktop";
import GalleryMobile from "./gallery-mobile";

export default function ProductCard({
    data,
    isFavorite,
    isPendingFavorite,
    type = "Default",
}: IProductCardProps) {
    const defaultVariant = getDefaultVariant(data);

    if (isPendingFavorite) {
        return <ProductCardSkeleton />;
    }

    return (
        <div
            className={`group/card relative rounded-xl w-full ${
                type === "Favorite" ? "" : "md:w-full"
            } transition-brand hover:shadow-[0_4px_12px_-3px_rgba(0,0,0,.10)] transition-brand`}
        >
            <div className="flex flex-col gap-3 h-full bg-white rounded-xl transition-brand">
                <div className="hidden md:block">
                    <GalleryDesktop
                        data={data}
                        defaultVariant={defaultVariant}
                        isFavorite={isFavorite}
                    />
                </div>
                <div className="block md:hidden">
                    <GalleryMobile
                        data={data}
                        defaultVariant={defaultVariant}
                        isFavorite={isFavorite}
                    />
                </div>
                <Description data={data} defaultVariant={defaultVariant} />
            </div>
        </div>
    );
}
