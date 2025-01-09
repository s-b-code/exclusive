"use client";

import SectionIntroHeader from "./section-intro-header";

import { Button } from "@/components/ui/button";
import ProductCard from "@/components/product-card";
import { flashSalesProducts } from "@/static-data";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import { ArrowIcon } from "@/icons";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { useState } from "react";

const Timer = ({ targetTimeEpoch }: { targetTimeEpoch: number }) => {
  return <div>Timer</div>;
};

const FlashSalesSection = () => {
  const [carouselApi, setCarouselApi] = useState<CarouselApi>();

  return (
    <section
      id="flash-sales"
      className="container mt-4 lg:mt-36 flex flex-col space-y-14"
    >
      <SectionIntroHeader title="Today's" />
      <div className="mt-3 lg:mt-6 flex w-full justify-between items-center mb-5">
        <div className="flex space-x-20 items-center">
          <h1 className="section-heading">Flash Sales</h1>
          <Timer targetTimeEpoch={1234} />
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
          {flashSalesProducts.map(
            ({ id, discountPrice, ...otherProperties }) => (
              <CarouselItem key={id} className={"basis-1/4 lg:basis-1/4"}>
                <ProductCard
                  showDiscountPercentage
                  discountedPrice={discountPrice}
                  id={id}
                  {...otherProperties}
                  onAddToCart={() => {
                    console.log("Add to cart", id);
                  }}
                  enableAddToWhishList
                  onAddToWhishList={() => {
                    console.log("Add to favorite", id);
                  }}
                  enableView
                  onView={() => {
                    console.log("View product", id);
                  }}
                />
              </CarouselItem>
            )
          )}
        </CarouselContent>
      </Carousel>

      <div className="flex items-center justify-center">
        <Link
          href={"/products/flash-sales"}
          className="bg-secondary2 text-text py-4 px-12 rounded-md"
        >
          View all products
        </Link>
      </div>
      <Separator className="bg-neutral-100" />
    </section>
  );
};

export default FlashSalesSection;
