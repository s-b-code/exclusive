"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import CartItems from "./_components/cart-items";
import { flashSalesProducts } from "@/static-data";
import CartSummaryList from "@/components/cart-summary-list";

const formSchema = z
  .object({
    firstName: z
      .string()
      .min(2, {
        message: "Username must be at least 2 characters.",
      })
      .nonempty("First name is required"),
    lastName: z
      .string()
      .min(2, {
        message: "Last name must be at least 2 characters.",
      })
      .optional(),
    address: z
      .string()
      .min(2, {
        message: "Address must be at least 2 characters.",
      })
      .nonempty("Address is required"),
    houseNumber: z
      .string()
      .min(2, {
        message: "Address must be at least 2 characters.",
      })
      .optional(),
    city: z
      .string()
      .min(2, {
        message: "City name must be at least 2 characters.",
      })
      .nonempty("City name is required"),
    phoneNumber: z
      .string()
      .min(10, {
        message: "Phone number must be valid",
      })
      .max(10, {
        message: "Phone number must be valid",
      })
      .nonempty("Phone number is required"),
    emailAddress: z
      .string()
      .email()
      .min(2, {
        message: "Address must be at least 2 characters.",
      })
      .nonempty("Email address is required"),
    paymentBank: z.boolean(),
    paymentCOD: z.boolean(),
  })
  .refine((data) => data.paymentBank !== data.paymentCOD, {
    message: "Exactly one payment option must be selected",
  });

export default function CheckoutPage() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      address: "",
      houseNumber: "",
      city: "",
      phoneNumber: "",
      emailAddress: "",
      paymentBank: false,
      paymentCOD: true,
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  function togglePaymentMode() {
    form.setValue("paymentBank", !form.getValues("paymentBank"));
    form.setValue("paymentCOD", !form.getValues("paymentCOD"));
  }

  return (
    <div className="page-container space-y-12">
      <h1 className="text-4xl font-medium">Billing Details</h1>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex space-x-44"
        >
          <div className="basis-1/2 flex flex-col space-y-8">
            <FormField
              control={form.control}
              name="firstName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel required>First name</FormLabel>
                  <FormControl>
                    <Input placeholder="John" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="lastName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Last name</FormLabel>
                  <FormControl>
                    <Input placeholder="doe" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="address"
              render={({ field }) => (
                <FormItem>
                  <FormLabel required>Address</FormLabel>
                  <FormControl>
                    <Input placeholder="123 Main Street" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="houseNumber"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>House number</FormLabel>
                  <FormControl>
                    <Input placeholder="123" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="city"
              render={({ field }) => (
                <FormItem>
                  <FormLabel required>City</FormLabel>
                  <FormControl>
                    <Input placeholder="New York" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="phoneNumber"
              render={({ field }) => (
                <FormItem>
                  <FormLabel required>Phone number</FormLabel>
                  <FormControl>
                    <Input placeholder="1234567890" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="emailAddress"
              render={({ field }) => (
                <FormItem>
                  <FormLabel required>Email address</FormLabel>
                  <FormControl>
                    <Input placeholder="Np9yK@example.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="basis-1/2">
            <div className="h-6" />
            <div className="mr-24 flex flex-col space-y-8">
              <CartItems
                items={[
                  {
                    name: flashSalesProducts[0].name,
                    amount: flashSalesProducts[0].price,
                    image: flashSalesProducts[0].image,
                  },
                  {
                    name: flashSalesProducts[1].name,
                    amount: flashSalesProducts[1].price,
                    image: flashSalesProducts[1].image,
                  },
                ]}
              />
              <CartSummaryList
                items={[
                  {
                    title: "Subtotal",
                    amount: 1750,
                  },
                  {
                    title: "Shipping",
                    amount: 0,
                  },
                ]}
              />
              <FormField
                control={form.control}
                name="paymentBank"
                render={({ field }) => (
                  <FormItem className="flex justify-between items-center">
                    <div className="flex items-center space-x-4">
                      <FormControl>
                        <Input
                          type="radio"
                          disabled={field.disabled}
                          name={field.name}
                          onBlur={field.onBlur}
                          onClick={togglePaymentMode}
                          onChange={() => {}}
                          ref={field.ref}
                          checked={field.value}
                          className="w-5 h-5"
                        />
                      </FormControl>
                      <FormLabel className="text-nowrap text-base">
                        Bank
                      </FormLabel>
                    </div>
                    <div>Bank icons</div>
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="paymentCOD"
                render={({ field }) => (
                  <FormItem>
                    <div className="flex items-center space-x-4">
                      <FormControl>
                        <Input
                          type="radio"
                          disabled={field.disabled}
                          name={field.name}
                          onBlur={field.onBlur}
                          onClick={togglePaymentMode}
                          onChange={() => {}}
                          ref={field.ref}
                          checked={field.value}
                          className="w-5 h-5"
                        />
                      </FormControl>
                      <FormLabel className="text-nowrap text-base">
                        Cash on delivery
                      </FormLabel>
                    </div>
                  </FormItem>
                )}
              />
              <Button type="submit" className="self-center">
                Submit
              </Button>
            </div>
          </div>
        </form>
      </Form>
    </div>
  );
}
