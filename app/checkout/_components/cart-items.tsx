import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";
import { ClassNameValue } from "tailwind-merge";

interface CartItemsProps {
  items: {
    image: string;
    name: string;
    amount: number;
  }[];
  className?: ClassNameValue;
}
const CartItems = ({ items, className }: CartItemsProps) => {
  return (
    <ul className={cn("flex flex-col w-full space-y-8", className)}>
      {items.map((item) => (
        <li
          key={item.image + item.name + item.amount}
          className="flex justify-between w-full items-center"
        >
          <div className="flex space-x-6 items-center">
            <Image
              src={item.image}
              width={54}
              height={54}
              alt={item.name + "image"}
            />
            <p className="text-base">{item.name}</p>
          </div>
          <p className="flex">
            <span className="font-serif">₹</span> {item.amount}
          </p>
        </li>
      ))}
    </ul>
  );
};

export default CartItems;
