import DescriptionSkeleton from "./description-skeleton";
import FaceSkeleton from "./face-skeleton";

export default function ProductCardSkeleton() {
    return (
        <div
            className={`group/card relative rounded-xl w-full`}
        >
            <div className="flex flex-col gap-3 h-full bg-white rounded-xl transition-brand">
                <FaceSkeleton />
                <DescriptionSkeleton />
            </div>
        </div>
    );
}
