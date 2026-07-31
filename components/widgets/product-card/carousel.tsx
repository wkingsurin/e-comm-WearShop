import { Button } from "@/components/ui/button";
import {
    Carousel,
    CarouselApi,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel";
import { IColorOption } from "@/types/store/ui.types";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

interface IProps {
    images: IColorOption["images"];
}

export default function ProductCarousel({ images }: IProps) {
    const [api, setApi] = useState<CarouselApi>();

    const scrollSnaps = api?.scrollSnapList() ?? [];

    const [selectedIndex, setSelectedIndex] = useState<number>(0);

    const selectImage = (index: number) => {
        setSelectedIndex(index);
    };

    const [canScrollPrev, setCanScrollPrev] = useState<boolean>(false);
    const [canScrollNext, setCanScrollNext] = useState<boolean>(true);

    const updateScollStatus = useCallback((emblaApi: CarouselApi) => {
        if (!emblaApi) return;
        setCanScrollPrev(emblaApi.canScrollPrev());
        setCanScrollNext(emblaApi.canScrollNext());
    }, []);

    useEffect(() => {
        if (!api) return;

        const onSelect = () => {
            setSelectedIndex(api.selectedScrollSnap());
            updateScollStatus(api);
        };

        onSelect();

        api.on("select", onSelect);
        api.on("reInit", onSelect);

        return () => {
            api.off("select", onSelect);
            api.off("reInit", onSelect);
        };
    }, [api, updateScollStatus]);

    return (
        <div className="relative w-full h-full">
            <Carousel
                onClick={(e) => e.stopPropagation()}
                setApi={setApi}
                opts={{ align: "start", containScroll: "trimSnaps" }}
                orientation="horizontal"
                className="h-full flex"
            >
                <CarouselContent className="w-full h-full -ml-0">
                    {images.map((image, index) => (
                        <CarouselItem
                            key={image.id}
                            onClick={() => selectImage(index)}
                            className="basis-full flex items-center justify-center pl-0"
                        >
                            <Image
                                src={image.src}
                                alt={image.id}
                                width={332}
                                height={480}
                                className="w-full h-full max-w-full max-h-full object-contain"
                            />
                        </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>
            <div className="absolute left-1/2 bottom-2 -translate-x-1/2 flex justify-center items-center gap-1 w-full">
                {scrollSnaps.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => api?.scrollTo(index)}
                        className={`w-1 h-1 rounded-full transition-all ${index === selectedIndex ? "bg-black scale-125" : "bg-black/25"}`}
                    ></button>
                ))}
            </div>
        </div>
    );
}
