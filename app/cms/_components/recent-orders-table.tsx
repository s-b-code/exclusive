import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { CurrencySymbol } from "@/components/ui/currency-symbol";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Image from "next/image";
import React from "react";

type RecentOrder = {
  productName: string;
  orderId: string;
  date: number;
  customer: {
    name: string;
    image: string;
  };
  status: "delivered" | "cancelled" | "pending";
  amount: number;
};

const recentOrders: RecentOrder[] = [
  {
    productName: "Product 1",
    orderId: "1234",
    date: 0,
    customer: {
      name: "John Doe",
      image: "https://placehold.co/270x250/png",
    },
    status: "delivered",
    amount: 100,
  },
  {
    productName: "New product",
    orderId: "4321",
    date: 0,
    customer: {
      name: "John Doe",
      image: "https://placehold.co/270x250/png",
    },
    status: "cancelled",
    amount: 100,
  },
];

const RecentOrdersTable = () => {
  function renderStatusIndicator(
    status: "delivered" | "cancelled" | "pending"
  ) {
    if (status === "delivered") {
      return <span className="w-2 h-2 bg-green-500 rounded-full"></span>;
    } else if (status === "cancelled") {
      return <span className="w-2 h-2 bg-red-500 rounded-full"></span>;
    } else {
      return <span className="w-2 h-2 bg-yellow-500 rounded-full"></span>;
    }
  }
  return (
    <div className="cms-card">
      <div className="flex justify-between">
        <h2 className="text-xl font-semibold">Recent orders</h2>
        <Button variant={"ghost"} size={"icon"}>
          <Image
            src={"/icons/more-black.svg"}
            width={24}
            height={24}
            alt="more icon"
          />
        </Button>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="text-left text-neutral-400/80">
              Product
            </TableHead>
            <TableHead className=" text-neutral-400/80">Order Id</TableHead>
            <TableHead className=" text-neutral-400/80">Date</TableHead>
            <TableHead className=" text-neutral-400/80">
              Customer Name
            </TableHead>
            <TableHead className=" text-neutral-400/80">Status</TableHead>
            <TableHead className=" text-neutral-400/80">Amount</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody className="w-full">
          {recentOrders.map((item) => (
            <TableRow key={item.orderId} className=" text-sm font-semibold">
              <TableCell>{item.productName}</TableCell>
              <TableCell>{item.orderId}</TableCell>
              <TableCell>{item.date}</TableCell>
              <TableCell>
                <div className="flex space-x-2 items-center">
                  <Avatar>
                    <AvatarImage
                      src={item.customer.image}
                      alt={item.customer.name + "image"}
                    />
                    <AvatarFallback>{item.customer.name} image</AvatarFallback>
                  </Avatar>
                  <p>{item.customer.name}</p>
                </div>
              </TableCell>
              <TableCell>
                <div className="flex space-x-2 items-center">
                  {renderStatusIndicator(item.status)}
                  <p>{item.status}</p>
                </div>
              </TableCell>
              <TableCell>
                <CurrencySymbol /> {item.amount}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default RecentOrdersTable;
