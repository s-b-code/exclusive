"use client";
import DotButton from "@/components/dot-button";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  EmblaCarouselType,
} from "@/components/ui/carousel";
import { flashDeals } from "@/static-data";
import Autoplay from "embla-carousel-autoplay";
import Fade from "embla-carousel-fade";
import Image from "next/image";
import { useEffect, useState } from "react";

const FlashDealsCarousel = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [isAutoPlayActive, setIsAutoPlayActive] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  function handleOnSlideSelect(e: EmblaCarouselType) {
    setActiveIndex(e.selectedScrollSnap());
  }
  function handleSlideScroll(index: number) {
    if (api) {
      api.scrollTo(index);
    } else {
      console.error(
        "Action to scroll initiated before the carousel api got initialized"
      );
    }
  }

  useEffect(() => {
    if (api) {
      setScrollSnaps(api.scrollSnapList().map((_, index) => index));
      api.on("select", handleOnSlideSelect);
    }

    return () => {
      if (api) {
        api.off("select", handleOnSlideSelect);
      }
    };
  }, [api]);

  return (
    <div className="relative h-full">
      <Carousel
        onMouseEnter={() => setIsAutoPlayActive(false)}
        onMouseLeave={() => setIsAutoPlayActive(true)}
        className="w-full absolute"
        setApi={setApi}
        opts={{ loop: true, duration: 1000 }}
        plugins={[
          Fade({ active: isAutoPlayActive }),
          Autoplay({ playOnInit: true, active: isAutoPlayActive }),
        ]}
      >
        <CarouselContent>
          {flashDeals.map((deal, index) => (
            <CarouselItem key={index} className="overflow-hidden">
              <AspectRatio ratio={16 / 4.6} className="bg-muted">
                <Image
                  src={deal}
                  alt="Photo by Drew Beamer"
                  fill
                  className="h-full w-full object-cover"
                />
              </AspectRatio>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      <div className="absolute bottom-4 w-full flex items-center justify-center space-x-3">
        {scrollSnaps.map((_, index) => (
          <DotButton
            key={index}
            active={activeIndex === index}
            onClick={() => handleSlideScroll(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default FlashDealsCarousel;
