import { cn } from "@/lib/utils";
import React from "react";
import { ClassNameValue } from "tailwind-merge";

interface CartSummaryListProps {
  items: {
    title: string;
    amount: number;
  }[];
  className?: ClassNameValue;
}
const CartSummaryList = ({ items, className }: CartSummaryListProps) => {
  const calculatedTotal = items.reduce((acc, item) => acc + item.amount, 0);
  return (
    <ul
      className={cn(
        "flex flex-col [&>li]:py-4 [&_li:last-child]:border-0 w-full",
        className
      )}
    >
      {items.map((item) => {
        const displayPrice = item.amount !== 0 ? item.amount : "Free";
        return (
          <li
            key={item.title}
            className={
              "flex justify-between w-full border-b border-neutral-300/50"
            }
          >
            <p>{item.title}:</p>
            <p className="flex">
              {displayPrice !== "Free" && <span className="font-serif">₹</span>}
              {displayPrice}
            </p>
          </li>
        );
      })}
      <li className={"flex justify-between w-full "}>
        <p>Total:</p>
        <p className="flex">
          <span className="font-serif">₹</span> {calculatedTotal}
        </p>
      </li>
    </ul>
  );
};

export default CartSummaryList;
