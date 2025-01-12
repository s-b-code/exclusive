import { Button } from "@/components/ui/button";
import { CurrencySymbol } from "@/components/ui/currency-symbol";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { flashDeals, flashSalesProducts } from "@/static-data";
import Image from "next/image";
import React from "react";
import { ClassNameValue } from "tailwind-merge";

interface BestSellersProps {
  className?: ClassNameValue;
}
const BestSellers = ({ className }: BestSellersProps) => {
  const bestSoldProducts: {
    id: number;
    image: string;
    name: string;
    price: number;
    sells: number;
    revenue: number;
  }[] = [
    ...flashSalesProducts.map((product, index) => ({
      id: product.id,
      image: product.image,
      name: product.name,
      price: product.price,
      sells: index,
      revenue: product.price * index,
    })),
  ];
  return (
    <div className={cn("cms-card", className)}>
      <div className="flex justify-between">
        <h2 className="text-xl font-semibold">Best sellers</h2>
        <Button variant={"ghost"} size={"icon"}>
          <Image
            src={"/icons/more-black.svg"}
            width={24}
            height={24}
            alt="more icon"
          />
        </Button>
      </div>
      <Separator className="mt-4 bg-neutral-400/50" />
      <div className="flex flex-col py-4 space-y-4">
        {bestSoldProducts.map((product) => (
          <div key={product.id} className="flex justify-between">
            <div className="flex items-center space-x-4">
              <Image
                src={product.image}
                width={64}
                height={64}
                alt={product.name + "image"}
                className="rounded-md"
              />
              <div className="flex flex-col space-y-1">
                <h3 className="font-semibold">{product.name}</h3>
                <p className="text-sm font-semibold text-neutral-400/70">
                  <CurrencySymbol />
                  {product.price}
                </p>
              </div>
            </div>
            <div className="flex flex-col items-end">
              <p className="font-semibold">
                <CurrencySymbol />
                {product.revenue}
              </p>
              <p className="text-sm font-semibold text-neutral-400/70">
                {product.sells}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-end">
        <Button size={"sm"} className="uppercase">
          Report
        </Button>
      </div>
    </div>
  );
};

export default BestSellers;
