import Face from "./face";
import Description from "./description";
import { IProductCardProps } from "@/types/components/widgets/product-card.types";
import { getDefaultVariant } from "@/lib/selectors/product.selectors";

export default function ProductCard({
    data,
    isFavorite,
    type = "Default",
}: IProductCardProps) {
    const defaultVariant = getDefaultVariant(data);

    return (
        <div
            className={`group/card relative rounded-xl w-full ${
                type === "Favorite" ? "md:w-1/4" : "md:w-1/5"
            } md:max-w-[240px] transition-brand hover:shadow-[0_4px_12px_-3px_rgba(0,0,0,.10)] transition-brand`}
        >
            <div className="flex flex-col gap-3 rounded-xl transition-brand">
                {/* <span className="absolute top-3 left-3 z-10002 flex items-center justify-center w-[30px] h-[30px] rounded-[50%] bg-white text-base">
				{data.id}
			</span> */}
                <Face
                    data={data}
                    defaultVariant={defaultVariant}
                    isFavorite={isFavorite}
                    type={type}
                />
                <Description data={data} defaultVariant={defaultVariant} />
            </div>
        </div>
    );
}
