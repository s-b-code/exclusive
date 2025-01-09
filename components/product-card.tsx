"use client";

import { HexColor, Product } from "@/types";
import React from "react";
import { AspectRatio } from "./ui/aspect-ratio";
import Image from "next/image";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";
import { StarIcon } from "@/icons";
import { ClassNameValue } from "tailwind-merge";
import { cn } from "@/lib/utils";

interface ProductCardProps extends Product {
  discountedPrice?: number;
  showDiscountPercentage?: boolean;
  isNew?: boolean;
  selectedColor?: HexColor;
  className?: ClassNameValue;
  onAddToCart?: () => void;
  enableView?: boolean;
  onView?: () => void;
  enableDelete?: boolean;
  onDelete?: () => void;
  enableAddToWhishList?: boolean;
  onAddToWhishList?: () => void;
}
const ProductCard = ({
  image,
  name,
  price,
  rating,
  className,
  reviewsCount,
  discountedPrice,
  showDiscountPercentage,
  onAddToCart,
  enableView,
  onView,
  enableDelete,
  onDelete,
  enableAddToWhishList,
  onAddToWhishList,
}: ProductCardProps) => {
  const discountPercent = Math.round(
    ((price - (discountedPrice || 1)) / price) * 100
  );

  const StarRating = ({ rating }: { rating: number }) => {
    const maxStars = 5;
    const starArray = Array.from({ length: maxStars }, (_, i) => i + 1);

    return (
      <>
        {starArray.map((_, index) => {
          const fillPercentage = Math.max(0, Math.min(1, rating - index)) * 100;

          return <StarIcon key={index} percentage={fillPercentage} />;
        })}
      </>
    );
  };

  return (
    <div className={cn("flex flex-col group", className)}>
      <div className="relative rounded-md overflow-hidden">
        <div className="absolute flex flex-col z-10 h-full w-full ">
          <div className="w-full flex-1 flex flex-row justify-between p-1 lg:p-3">
            <div>
              {discountedPrice && showDiscountPercentage && (
                <div className="bg-secondary2 text-text text-xs px-3 py-1 rounded-[4px]">
                  -{discountPercent}%
                </div>
              )}
            </div>
            <div className="flex flex-col space-y-2">
              {enableAddToWhishList && (
                <Button
                  variant={"outline"}
                  size={"icon"}
                  className="border-none rounded-full"
                  onClick={() => onAddToWhishList?.()}
                >
                  <Image
                    src={"/icons/heart-black.svg"}
                    height={24}
                    width={24}
                    alt="favorite icon"
                  />
                </Button>
              )}
              {enableView && (
                <Button
                  variant={"outline"}
                  size={"icon"}
                  className="border-none rounded-full"
                  onClick={() => onView?.()}
                >
                  <Image
                    src={"/icons/eye-black.svg"}
                    height={24}
                    width={24}
                    alt="view icon"
                  />
                </Button>
              )}
              {enableDelete && (
                <Button
                  variant={"outline"}
                  size={"icon"}
                  className="border-none rounded-full"
                  onClick={() => onDelete?.()}
                >
                  <Image
                    src={"/icons/delete-black.svg"}
                    height={24}
                    width={24}
                    alt="delete icon"
                  />
                </Button>
              )}
            </div>
          </div>
          <button
            className="bg-button w-full text-white font-medium text-xs lg:text-lg transition-all ease-in-out duration-500 h-8 translate-y-10 group-hover:translate-y-0 flex items-center justify-center overflow-hidden"
            onClick={() => onAddToCart?.()}
          >
            Cart
          </button>
        </div>
        <AspectRatio ratio={4 / 4} className="absolute">
          <Image
            src={image}
            alt={`${name} image`}
            fill
            className="h-full w-full object-cover rounded-md"
          />
        </AspectRatio>
      </div>
      <div className="flex flex-col space-y-2 mt-4 lg:mt-4">
        <p className="font-medium">{name}</p>
        <div className="flex space-x-3">
          <p className="text-secondary2 font-medium">
            <span className="font-serif">₹</span>
            {discountedPrice || price}
          </p>
          {discountedPrice && (
            <div className="text-text1 font-medium relative flex">
              <div className="flex absolute h-6 lg:h-5 w-full items-center justify-center">
                <Separator className="bg-text1" />
              </div>
              <span className="font-serif">₹</span>
              <p>{price}</p>
            </div>
          )}
        </div>
        <div className="flex items-center">
          <StarRating rating={rating} />
          <p className="text-text1 text-[0.9rem] font-semibold">
            ({reviewsCount})
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
