"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface PurchaseFormProps {
  colors: string[];
  selectedColor: number;
  sizes: string[];
  selectedSize: number;
  count?: number;
  inWhishList?: boolean;
}
const PurchaseForm = ({
  colors,
  selectedColor,
  sizes,
  selectedSize,
  count,
  inWhishList,
}: PurchaseFormProps) => {
  const [itemCount, setItemCount] = React.useState(count || 1);
  return (
    <>
      <div className="flex items-center space-x-6">
        <p className="text-xl">Color:</p>
        <div className="flex space-x-2 items-center">
          {colors.map((color, index) => (
            <Link
              href={"#"}
              key={color}
              className={cn(
                `w-5 h-5 rounded-full`,
                index === selectedColor && "p-[2px] ring-2 ring-button"
              )}
            >
              <div
                className="w-full h-full rounded-full"
                style={{
                  backgroundColor: color,
                }}
              />
            </Link>
          ))}
        </div>
      </div>
      <div className="flex items-center space-x-6">
        <p className="text-xl">Size:</p>
        <div className="flex space-x-4 items-center">
          {sizes.map((size, index) => (
            <Link
              href={"#"}
              key={size}
              className={cn(
                `min-w-8 h-8 px-2 rounded-lg border text-sm border-neutral-400 flex items-center justify-center`,
                index === selectedSize &&
                  "bg-secondary2 text-white border-secondary2"
              )}
            >
              {size}
            </Link>
          ))}
        </div>
      </div>
      <div className="flex space-x-4 ">
        <div className="flex justify-between border border-neutral-400 rounded-lg overflow-hidden h-11">
          <Button
            variant={"ghost"}
            className="rounded-none border-r border-neutral-400 px-2 py-2"
            size={"icon"}
            onClick={() => {
              if (itemCount > 1) setItemCount((prev) => prev - 1);
            }}
          >
            <Image
              src={"/icons/minus-black.svg"}
              alt="minus icon"
              width={24}
              height={24}
            />
          </Button>
          <div className="w-20 px-2 flex items-center justify-center">
            {itemCount}
          </div>
          <Button
            className="rounded-none px-2 py-2"
            size={"icon"}
            onClick={() => {
              setItemCount((prev) => prev + 1);
            }}
          >
            <Image
              src={"/icons/plus-white.svg"}
              alt="plus icon"
              width={24}
              height={24}
            />
          </Button>
        </div>
        <Button className="h-11">Buy Now</Button>
        <Button size={"icon"} className="h-11 w-11" variant={"outline"}>
          <Image
            src={"/icons/heart-black.svg"}
            alt="heart icon"
            width={32}
            height={32}
          />
        </Button>
      </div>
    </>
  );
};

export default PurchaseForm;
