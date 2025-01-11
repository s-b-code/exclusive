import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Separator } from "@/components/ui/separator";
import { categories } from "@/static-data";
import FlashDealsCarousel from "./flash-deals-carousel";
import Image from "next/image";
import Link from "next/link";
const IntroCategorySection = () => {
  return (
    <section
      id="intro-category"
      className="container flex max-lg:flex-col w-full"
    >
      <Carousel className="lg:hidden w-full mt-5">
        <CarouselContent className="flex space-x-3 ml-4">
          {categories.map((category, index) => (
            <CarouselItem
              key={index}
              className=" basis-1/3 bg-secondary rounded-lg py-2 flex items-center justify-center px-3"
            >
              <div key={category} className="text-nowrap text-center ">
                {category}
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      <div className="hidden lg:flex flex-col space-y-4 mt-10 w-1/4">
        {categories.map((category) => (
          <Link
            href={`/category/${category}`}
            key={category}
            className="text-nowrap flex justify-between group"
          >
            <span>{category}</span>
            <Image
              src={"/icons/drop-down-black.svg"}
              height={24}
              width={24}
              alt="view-more-icon"
              className="transition-all ease-in-out translate-x-0 opacity-0 -rotate-90 group-hover:opacity-100 group-hover:translate-x-2"
            />
          </Link>
        ))}
      </div>
      <div className="max-lg:hidden ml-4">
        <Separator orientation="vertical" className="bg-neutral-100" />
      </div>
      <div className="max-lg:hidden ml-11 mt-10 w-full">
        <FlashDealsCarousel />
      </div>
    </section>
  );
};

export default IntroCategorySection;
