import { Button } from "@/components/ui/button";
import { CurrencySymbol } from "@/components/ui/currency-symbol";
import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";
import { ClassNameValue } from "tailwind-merge";

export interface ShortStatCardProps {
  title: string;
  icon: string;
  totalAmount: number;
  changePercent: number;
  comparedToDate: Date;
  className?: ClassNameValue;
}
const ShortStatCard = ({
  title,
  icon,
  totalAmount,
  changePercent,
  comparedToDate,
  className,
}: ShortStatCardProps) => {
  return (
    <div className={cn("cms-card flex flex-col space-y-2", className)}>
      <div className="flex justify-between">
        <h3 className="text-sm font-semibold">{title}</h3>
        <Button variant={"ghost"} size={"icon"}>
          <Image
            src={"/icons/more-black.svg"}
            width={24}
            height={24}
            alt="more icon"
          />
        </Button>
      </div>
      <div className="flex justify-between">
        <div className="flex space-x-4 items-center">
          <div className="flex items-center justify-center w-10 h-10 bg-secondary2 rounded-md">
            <Image src={icon} width={24} height={24} alt={title + "icon"} />
          </div>
          <p className="font-semibold">
            <CurrencySymbol />
            {totalAmount}
          </p>
        </div>
        <div className="flex items-center space-x-1">
          <Image
            src={"/icons/arrow-right-black.svg"}
            width={24}
            height={24}
            alt="arrow icon"
            className={cn(changePercent > 0 ? "-rotate-90" : "rotate-90")}
          />
          <p>{changePercent}%</p>
        </div>
      </div>
      <p className="text-end font-semibold text-neutral-400 text-xs">
        Compared to{" "}
        {comparedToDate.toLocaleDateString("en-US", {
          month: "short",
          year: "numeric",
        })}
      </p>
    </div>
  );
};

export default ShortStatCard;
