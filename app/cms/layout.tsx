import SearchForm from "@/components/search-form";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Separator } from "@/components/ui/separator";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <SidebarProvider>
        <Sidebar className="border border-r-neutral-100 border-t-transparent">
          <SidebarHeader />
          <SidebarContent className="">
            <NavigationMenu className=" w-full mt-24">
              <NavigationMenuList className="flex flex-col px-6 space-y-5 ">
                <NavigationMenuItem
                  className={cn(buttonVariants({ size: "sm" }), "w-full")}
                >
                  <Link href="/cms" legacyBehavior passHref>
                    DASHBOARD
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem
                  className={cn(
                    buttonVariants({ size: "sm", variant: "ghost" }),
                    "w-full"
                  )}
                >
                  <Link href="/cms/all-products" legacyBehavior passHref>
                    ALL PRODUCTS
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem
                  className={cn(
                    buttonVariants({ size: "sm", variant: "ghost" }),
                    "w-full"
                  )}
                >
                  <Link href="/cms/orders" legacyBehavior passHref>
                    ORDERS
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </SidebarContent>
          <SidebarFooter />
        </Sidebar>

        <div className="flex-grow w-full flex flex-col items-center">
          <header className="sticky top-0 z-40 w-full bg-white flex flex-col">
            <div className="flex items-center">
              <SidebarTrigger className="ml-2" />
              <div className="flex-1 flex items-center justify-end space-x-10 py-8 px-16">
                <SearchForm />
                <Button
                  size={"icon"}
                  variant={"ghost"}
                  className="rounded-full"
                >
                  <Image
                    src={"/icons/notification-black.svg"}
                    width={24}
                    height={24}
                    alt="notification icon"
                  />
                </Button>
              </div>
            </div>
            <Separator orientation="horizontal" className="bg-neutral-100" />
          </header>
          <main className="w-full">{children}</main>
        </div>
      </SidebarProvider>
      <footer className="w-full bg-button text-white flex justify-center z-50">
        Footer section
      </footer>
    </>
  );
}
