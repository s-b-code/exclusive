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
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { z } from "zod";

const formSchema = z.object({
  firstName: z
    .string()
    .min(2, {
      message: "First name must be at least 2 characters.",
    })
    .nonempty("First cannot be removed"),
  lastName: z
    .string()
    .min(2, {
      message: "Last name must be at least 2 characters.",
    })
    .nonempty("Last cannot be removed"),
  email: z.string().email("Invalid email").nonempty("Email cannot be removed"),
  address: z
    .string()
    .min(2, {
      message: "Address must be at least 2 characters.",
    })
    .nonempty("Address cannot be removed"),
  password: z.string().readonly(),
  newPassword: z.string().optional(),
  confirmPassword: z.string().optional(),
});
//   .refine((data) => data.newPassword === data.confirmPassword, {
//     message: "Passwords do not match",
//   });

export default function ProfilePage() {
  const details = {
    firstName: "Subhajit",
    lastName: "Bera",
    email: "bN2wP@example.com",
    address: "Kolkata, India",
    password: "123456",
  };
  const name = details.firstName + " " + details.lastName;
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: details.firstName,
      lastName: details.lastName,
      email: details.email,
      address: details.address,
      password: details.password,
      newPassword: "",
      confirmPassword: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    if (form.getValues("newPassword") !== form.getValues("confirmPassword"))
      form.setError("newPassword", { message: "Passwords do not match" });
  }

  return (
    <div className="page-container">
      <h1 className="text-sm text-end">
        Welcome! <span className="text-secondary2">{name}</span>
      </h1>
      <div className="flex justify-between">
        <div className="basis-1/4 flex flex-col space-y-6">
          <div className="flex flex-col space-y-4">
            <h2 className="text-base font-medium">Manage My Account</h2>
            <ul className="ml-9 text-base font-normal text-neutral-300 space-y-2">
              <li className="text-secondary2">
                <Link href={"#"}>My profile</Link>
              </li>
              <li>
                <Link href={"#"}>Address book</Link>
              </li>
              <li>
                <Link href={"#"}>Payment options</Link>
              </li>
            </ul>
          </div>
          <div className="flex flex-col space-y-4">
            <h2 className="text-base font-medium">My orders</h2>
            <ul className="ml-9 text-base font-normal text-neutral-300 space-y-2">
              <li>
                <Link href={"#"}>My returns</Link>
              </li>
              <li>
                <Link href={"#"}>My cancellations</Link>
              </li>
            </ul>
          </div>
          <div className="flex flex-col space-y-4">
            <h2 className="text-base font-medium">My whishlist</h2>
          </div>
        </div>
        <div className="shadow-lg flex flex-col space-y-4 w-full py-10 px-20">
          <h2 className="text-secondary2 text-xl font-medium">
            Edit your profile
          </h2>
          <Form {...form}>
            <form
              onReset={(e) => {
                console.log(e, "reset called");
              }}
              onSubmit={form.handleSubmit(onSubmit)}
              className="basis-3/4 grid-rows-3 space-y-6"
            >
              <div className="grid grid-cols-2 grid-rows-2 gap-x-12 gap-y-6">
                <FormField
                  control={form.control}
                  name="firstName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Username</FormLabel>
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
                      <FormLabel>Username</FormLabel>
                      <FormControl>
                        <Input placeholder="doe" {...field} />
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Username</FormLabel>
                      <FormControl>
                        <Input placeholder="abc@example.com" {...field} />
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
                      <FormLabel>Username</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="ABC street, XYZ country"
                          {...field}
                        />
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="flex flex-col space-y-4">
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          placeholder="Current password"
                          {...field}
                          readOnly
                          type="password"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="newPassword"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          placeholder="New password"
                          {...field}
                          type="password"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="confirmPassword"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          placeholder="Confirm password"
                          {...field}
                          type="password"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="flex justify-end space-x-8">
                <Button variant={"ghost"} type="reset">
                  Cancel
                </Button>
                <Button type="submit">Save changes</Button>
              </div>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
}
