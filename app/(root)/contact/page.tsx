"use client";

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
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const formSchema = z.object({
  name: z
    .string()
    .min(2, {
      message: "Name must be atleast 2 characters long",
    })
    .nonempty({ message: "Name cannot be empty" }),
  email: z
    .string()
    .email({
      message: "Please enter a valid email",
    })
    .nonempty({ message: "Email cannot be empty" }),
  phoneNumber: z
    .string()
    .min(10, {
      message: "Phone number must be valid",
    })
    .max(10, {
      message: "Phone number must be valid",
    })
    .nonempty("Phone number is required"),
  message: z
    .string()
    .min(2, {
      message: "Message must be atleast 2 characters long",
    })
    .nonempty({ message: "Message cannot be empty" }),
});

function ContactPage() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phoneNumber: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <div className="page-container flex h-full space-x-8">
      <div className="w-1/4 h-full flex flex-col px-9 pt-10 pb-12 space-y-8 shadow-lg ">
        <div className="flex flex-col space-y-6">
          <div className="flex items-center space-x-4 text-base font-medium">
            <Image
              src={"/icons/phone-filled.svg"}
              height={40}
              width={40}
              alt={"phone filled icon"}
            />
            <h1>Call To Us</h1>
          </div>
          <div className="flex flex-col space-y-4">
            <p>We are available 24/7, 7 days a week.</p>
            <p>Phone: +918710024340</p>
          </div>
        </div>
        <Separator />
        <div className="flex flex-col space-y-6">
          <div className="flex items-center space-x-4 text-base font-medium">
            <Image
              src={"/icons/message-filled.svg"}
              height={40}
              width={40}
              alt={"phone filled icon"}
            />
            <h1>Write to us</h1>
          </div>
          <div className="flex flex-col space-y-4">
            <p>Fill out our form and we will contact you within 24 hours.</p>
            <p>Emails: customer@exclusive.com</p>
            <p>Emails: support@exclusive.com</p>
          </div>
        </div>
      </div>

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-3/4 flex flex-col px-8 py-10 space-y-4 items-center shadow-lg"
        >
          <div className="flex gap-x-4 w-full">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel required>First name</FormLabel>
                  <FormControl>
                    <Input placeholder="John doe" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel required>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="abc@xyMail.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="phoneNumber"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel required>Phone number</FormLabel>
                  <FormControl>
                    <Input placeholder="8123476321" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem className="h-full w-full">
                <FormLabel required>Message</FormLabel>
                <FormControl>
                  <Textarea placeholder="Hello there" {...field} rows={10} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="self-end">
            Send Message
          </Button>
        </form>
      </Form>
    </div>
  );
}

export default ContactPage;
