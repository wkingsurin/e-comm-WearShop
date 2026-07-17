import CarouselSpacing from "@/components/shared/carousel-spacing";
import { IColorOption } from "@/types/store/ui.types";
import Image from "next/image";
import { useState } from "react";

interface IProps {
    images: IColorOption["images"];
    productName: string;
}

export default function Gallery({ images, productName }: IProps) {
    const [activeImageIdx, setActiveImageIdx] = useState<number>(0);

    const selectImage = (index: number) => {
        setActiveImageIdx((prevIdx) => (prevIdx === index ? prevIdx : index));
    };
    const selectedImage = images[activeImageIdx] ?? images[images.length - 1];

    if (!selectedImage) return null;

    return (
        <div className="sticky top-[154px] flex gap-3 w-full max-w-[572px] h-[640px]">
            <CarouselSpacing
                images={images}
                activeIndex={activeImageIdx}
                onSelect={selectImage}
                type="Page"
            />
            <div className="w-full h-full w-[480px] h-full rounded-xl overflow-hidden bg-[#F4F4F6]">
                <Image
                    src={selectedImage.src}
                    alt={productName}
                    width={480}
                    height={640}
                    className="w-full h-full object-contain cursor-zoom-in"
                />
            </div>
        </div>
    );
}
