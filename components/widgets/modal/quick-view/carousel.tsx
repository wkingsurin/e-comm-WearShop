import CarouselSpacing from "@/components/shared/carousel-spacing";
import { Button } from "@/components/ui/button";
import { IColorOption } from "@/types/store/ui.types";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export default function Carousel({
    productTitle,
    images,
}: {
    productTitle: string;
    images: IColorOption["images"];
}) {
    const [activeImageIndex, setActiveImageIndex] = useState<number>(0);

    const prevImage = () => {
        setActiveImageIndex((prev) => (prev >= 1 ? prev - 1 : prev));
    };

    const nextImage = () => {
        setActiveImageIndex((prev) =>
            prev < images.length - 1 ? prev + 1 : prev,
        );
    };

    const selectImage = (index: number) => {
        setActiveImageIndex(index);
    };

    return (
        <div className="flex gap-3 max-w-[406px] w-full">
            <CarouselSpacing
                images={images}
                activeIndex={activeImageIndex}
                onSelect={selectImage}
            />
            <div className="group/product relative flex items-center justify-center w-[320px] h-[420px] bg-[#F4F4F6] rounded-xl">
                <Image
                    src={images[activeImageIndex].src}
                    alt={productTitle}
                    width={332}
                    height={480}
                    className={`rounded-xl cursor-zoom-in w-[calc(100%-40px)] h-full object-contain`}
                />
                <Button
                    className={`absolute top-[calc(50%-16px)] left-3 flex w-8 h-8 rounded-[50%] bg-white opacity-0 hover:bg-white shadow-[0_0_9px_-3px_var(--black)]/50 ${
                        activeImageIndex > 0 && images.length > 1
                            ? "group-hover/product:opacity-100"
                            : "pointer-events-none"
                    }`}
                    onClick={prevImage}
                >
                    <ArrowLeft className="size-4 stroke-[1.5px] stroke-black" />
                </Button>
                <Button
                    className={`absolute top-[calc(50%-16px)] right-3 flex w-8 h-8 rounded-[50%] bg-white opacity-0 hover:bg-white shadow-[0_0_9px_-3px_var(--black)]/50 ${
                        activeImageIndex < images.length - 1 &&
                        images.length > 1
                            ? "group-hover/product:opacity-100"
                            : "pointer-events-none"
                    }`}
                    onClick={nextImage}
                >
                    <ArrowRight className="size-4 stroke-[1.5px] stroke-black" />
                </Button>
            </div>
        </div>
    );
}
