"use client";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import Fade from "embla-carousel-fade";
import Image from "next/image";
import React, { useState } from "react";

const ProductViewCarousel = ({
  images,
  productName,
}: {
  images: string[];
  productName: string;
}) => {
  const [api, setApi] = useState<CarouselApi>();
  const [currentViewIndex, setCurrentViewIndex] = useState(0);

  return (
    <div className="flex space-x-8 ">
      <div className="flex flex-col items-center justify-between cursor-pointer">
        {images.map((image, index) => (
          <Image
            key={index}
            src={image}
            alt={productName + "image"}
            width={700}
            height={138}
            className={cn(
              "enable-animation border-2 border-transparent",
              "rounded-md",
              index === currentViewIndex && " border-secondary2"
            )}
            onClick={() => {
              if (api) {
                setCurrentViewIndex(index);
                api.scrollTo(index);
              }
            }}
          />
        ))}
      </div>
      <Carousel
        className="flex-grow"
        setApi={setApi}
        plugins={[Fade()]}
        opts={{
          watchDrag: false,
        }}
      >
        <CarouselContent>
          {images.map((image, index) => (
            <CarouselItem key={index}>
              <Image
                src={image}
                alt={productName + "image"}
                height={900}
                width={800}
                className="rounded-md"
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default ProductViewCarousel;
