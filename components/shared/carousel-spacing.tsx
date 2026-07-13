"use client";

import {
    Carousel,
    CarouselApi,
    CarouselContent,
    CarouselItem,
} from "../ui/carousel";
import { Button } from "../ui/button";
import { ArrowDown, ArrowLeft, ArrowRight, ArrowUp } from "lucide-react";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { ICarouselProps } from "@/types/components/shared/shared.types";

export default function CarouselSpacing({
    images,
    activeIndex,
    onSelect,
}: ICarouselProps) {
    const [api, setApi] = useState<CarouselApi>();

    const [canScrollPrev, setCanScrollPrev] = useState<boolean>(false);
    const [canScrollNext, setCanScrollNext] = useState<boolean>(true);

    const updateScollStatus = useCallback((emblaApi: CarouselApi) => {
        if (!emblaApi) return;
        setCanScrollPrev(emblaApi.canScrollPrev());
        setCanScrollNext(emblaApi.canScrollNext());
    }, []);

    useEffect(() => {
        if (!api) return;

        api.on("select", () => updateScollStatus(api));
        api.on("reInit", () => updateScollStatus(api));

        return () => {
            console.log(`remove listeners`);

            api.off("select", () => updateScollStatus(api));
            api.off("reInit", () => updateScollStatus(api));
        };
    }, [api, updateScollStatus]);

    return (
        <Carousel
            onClick={(e) => e.stopPropagation()}
            setApi={setApi}
            opts={{
                align: "start",
                containScroll: "trimSnaps",
                watchDrag: (emblaApi) => emblaApi.scrollSnapList().length > 1,
            }}
            orientation="vertical"
            className="flex flex-col w-[74px] h-[calc((99px+8px)*4)]"
        >
            <CarouselContent className="flex flex-col -mt-2 w-full h-full">
                {images.map((image, index) => {
                    return (
                        <CarouselItem
                            key={image.id}
                            className="w-full basis-auto pt-2"
                            onClick={() => onSelect(index)}
                        >
                            <div
                                key={image.id}
                                className={`flex h-[99px] bg-[#F4F4F6] rounded-sm border border-transparent transition-brand ${
                                    activeIndex === index
                                        ? "border-black!"
                                        : "hover:border-black/50"
                                }`}
                            >
                                <Image
                                    src={`${image.src}`}
                                    alt={image.id}
                                    width={332}
                                    height={480}
                                    className="rounded-sm object-contain"
                                />
                            </div>
                        </CarouselItem>
                    );
                })}
            </CarouselContent>
            <Button
                className={`absolute z-10 left-[calc(50%-16px)] -top-3 flex w-8 h-8 rounded-[50%] bg-white hover:bg-white shadow-[0_0_9px_-3px_var(--black)]/50 ${
                    canScrollPrev && images.length > 4
                        ? "group-hover/product:opacity-100 scale-100"
                        : "opacity-0 pointer-events-none scale-90"
                }`}
                onClick={() => api?.scrollPrev()}
            >
                <ArrowUp className="size-4 stroke-[1.5px] stroke-black" />
            </Button>
            <Button
                className={`absolute z-10 -bottom-3 left-[calc(50%-16px)] flex w-8 h-8 rounded-[50%] bg-white hover:bg-white shadow-[0_0_9px_-3px_var(--black)]/50
					${
                        canScrollNext && images.length > 4
                            ? "group-hover/product:opacity-100 scale-100"
                            : "opacity-0 pointer-events-none scale-90"
                    }`}
                onClick={() => {
                    api?.scrollNext();
                    console.log(`next`);
                    console.log(`api.canScrollPrev():`, api?.canScrollPrev());
                    console.log(`api.canScrollNext():`, api?.canScrollNext());
                    console.log(`[api]:`, api);
                }}
            >
                <ArrowDown className="size-4 stroke-[1.5px] stroke-black" />
            </Button>
        </Carousel>
    );
}
