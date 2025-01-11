import SearchForm from "@/components/search-form";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import Image from "next/image";

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
          <SidebarContent>
            <SidebarGroup />
            <SidebarGroup />
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
          <main>{children}</main>
        </div>
      </SidebarProvider>
      <footer className="w-full bg-button text-white flex justify-center z-50">
        Footer section
      </footer>
    </>
  );
}
