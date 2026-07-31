import CarouselSpacing from "@/components/shared/carousel-spacing";
import ProductCarousel from "@/components/widgets/product-card/carousel";
import { IColorOption } from "@/types/store/ui.types";
import Image from "next/image";
import { useState } from "react";

interface IProps {
    images: IColorOption["images"];
}

export default function GalleryMobile({ images }: IProps) {
    const [activeImageIdx, setActiveImageIdx] = useState<number>(0);

    const selectImage = (index: number) => {
        setActiveImageIdx((prevIdx) => (prevIdx === index ? prevIdx : index));
    };
    const selectedImage = images[activeImageIdx] ?? images[images.length - 1];

    if (!selectedImage) return null;

    return (
        <div
            className="relative lg:sticky lg:top-[154px] flex gap-3 w-full h-full"
            draggable={false}
        >
            <ProductCarousel images={images} />
        </div>
    );
}
