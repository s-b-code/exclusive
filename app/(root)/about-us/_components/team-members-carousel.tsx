"use client";

import DotButton from "@/components/dot-button";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  EmblaCarouselType,
} from "@/components/ui/carousel";
import { teamMembers } from "@/static-data";
import React, { useEffect, useState } from "react";
import TeamMemberCard from "./team-member-card";

const TeamMembersCarousel = () => {
  const [api, setApi] = useState<CarouselApi>();
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
    <div className="h-full w-1/2">
      <Carousel
        className="w-full"
        setApi={setApi}
        opts={{
          slidesToScroll: "auto",
        }}
      >
        <CarouselContent>
          {teamMembers.map((member) => (
            <CarouselItem key={member.id} className="basis-1/3">
              <TeamMemberCard {...member} />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      <div className="w-full flex items-center justify-center space-x-3 mt-10">
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

export default TeamMembersCarousel;
