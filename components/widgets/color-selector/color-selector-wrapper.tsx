import { IColorsWrapperProps } from "@/types/components/widgets/colors.types";
import ColorsOption from "./option";
import ColorsLink from "./link";
import { useSearchParams } from "next/navigation";

export default function ColorSelectorWrapper({
    colors,
    activeColorId,
    changeActiveColorId,
    defaultSize,
    type,
}: IColorsWrapperProps) {
    const searchParams = useSearchParams();
    const urlSlug = searchParams.get("color");

    return (
        <div className="flex flex-col gap-2 w-full overflow-hidden">
            <span className="font-medium tracking-wider leading-lg">
                Colors
            </span>
            <div
                className={`grid ${type === "Page" ? "grid-cols-5" : "grid-cols-4"} gap-2 md:gap-[6px]`}
            >
                {colors.map((color) => {
                    if (type === "Modal" && changeActiveColorId !== undefined) {
                        return (
                            <ColorsOption
                                key={color.id}
                                id={color.id}
                                name={color.name}
                                slug={color.slug}
                                previewImage={color.images[0].src}
                                changeActiveColorId={changeActiveColorId}
                                isActive={color.id === activeColorId}
                            />
                        );
                    } else {
                        if (!defaultSize) return;

                        return (
                            <ColorsLink
                                key={color.id}
                                id={color.id}
                                name={color.name}
                                slug={color.slug}
                                previewImage={color.images[0].src}
                                defaultSize={defaultSize}
                                isActive={urlSlug === color.slug}
                            />
                        );
                    }
                })}
            </div>
        </div>
    );
}
