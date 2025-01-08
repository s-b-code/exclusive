"use client";

import { carouselCategories } from "@/static-data";
import SectionIntroHeader from "./section-intro-header";
import { Button } from "@/components/ui/button";
import { ArrowIcon } from "@/icons";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { useState } from "react";

const BrowseCategorySection = () => {
  const [carouselApi, setCarouselApi] = useState<CarouselApi>();
  return (
    <section
      id="categories-section"
      className="container mt-4 lg:mt-20 flex flex-col space-y-16"
    >
      <SectionIntroHeader title="Categories" />
      <div className="mt-3 lg:mt-6 flex w-full justify-between items-center mb-5">
        <div className="flex space-x-20 items-center">
          <h1 className="section-heading">Browse by category</h1>
        </div>
        <div className="flex space-x-2">
          <Button
            variant={"ghost"}
            className="rounded-full bg-neutral-50"
            size={"icon"}
            onClick={() => {
              carouselApi?.scrollPrev();
            }}
          >
            <ArrowIcon className="rotate-180" />
          </Button>
          <Button
            variant={"ghost"}
            className="rounded-full bg-neutral-50"
            size={"icon"}
            onClick={() => {
              carouselApi?.scrollNext();
            }}
          >
            <ArrowIcon />
          </Button>
        </div>
      </div>
      <Carousel className="w-full" setApi={setCarouselApi}>
        <CarouselContent>
          {carouselCategories.map(({ id, name, icon }) => (
            <CarouselItem key={id} className={"basis-1/3 lg:basis-1/6"}>
              <button className="transition-all duration-300 w-44 h-36 cursor-pointer rounded-md hover:bg-secondary2 hover:text-text border border-neutral-300/50 flex flex-col items-center justify-center">
                {/* TODO: add a variation in the image for white image on hover */}
                <Image src={icon} height={56} width={56} alt={name + "icon"} />
                <span>{name}</span>
              </button>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      <Separator className="bg-neutral-100" />
    </section>
  );
};

export default BrowseCategorySection;
