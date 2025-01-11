import CartSummaryList from "@/components/cart-summary-list";
import { Button, buttonVariants } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { cartItems } from "@/static-data";
import Image from "next/image";
import Link from "next/link";

export default function CartPage() {
  return (
    <div className="page-container space-y-20">
      <div className="flex flex-col items-center space-y-6">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="text-left">Product</TableHead>
              <TableHead className="text-left">Price</TableHead>
              <TableHead className="text-left">Quantity</TableHead>
              <TableHead className="text-right">Subtotal</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {cartItems.map((item) => (
              <TableRow key={item.id}>
                <TableCell className="flex space-x-5 items-center">
                  <Image
                    src={item.image}
                    width={54}
                    height={54}
                    alt={item.name + "image"}
                  />
                  <p>{item.name}</p>
                </TableCell>
                <TableCell>
                  <span className="font-serif">₹</span> {item.price}
                </TableCell>
                <TableCell>
                  <Input
                    type="number"
                    className="w-[15%] pr-2"
                    defaultValue={item.quantity}
                  />
                </TableCell>
                <TableCell className="text-right">price * quantity</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <div className="flex justify-between w-full">
          <Link
            href={"/products"}
            className={buttonVariants({ variant: "outline" })}
          >
            Return to shop
          </Link>
          <Button variant={"outline"}>Update cart</Button>
        </div>
      </div>
      <div className="flex justify-between">
        <form className="flex space-x-4 h-full">
          <Input placeholder="Coupon Code" />
          <Button type="submit">Apply Coupon</Button>
        </form>
        <form className="w-1/3 border-2 border-neutral-400 rounded-md px-6 py-8 flex flex-col items-center">
          <h2 className="font-medium text-xl">Cart Total</h2>
          <CartSummaryList
            items={[
              { title: "Subtotal", amount: 1750 },
              { title: "Shipping", amount: 0 },
            ]}
          />
          <Button type="submit">Proceed to checkout</Button>
        </form>
      </div>
    </div>
  );
}
