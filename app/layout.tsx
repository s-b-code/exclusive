import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import LanguageSelector from "./_components/language-selector";
import Image from "next/image";
import SearchForm from "./_components/search-form";
import { Separator } from "@/components/ui/separator";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Exclusive",
  description: "An ecommerce app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} antialiased flex flex-col items-center relative`}
      >
        <div className="bg-button w-full py-3 text-text flex max-lg:flex-col  items-center justify-center max-lg:text-sm max-lg:overflow-hidden">
          <div className="container flex-1 flex justify-center space-x-2">
            <div className="max-md:animate-scroll-horizontal-infinite max-lg:text-nowrap">
              Summer Sale For All Swim Suits And Free Express Delivery - OFF
              50%!
            </div>
            <div className="max-lg:hidden flex">
              <span className="font-semibold underline">ShopNow</span>
            </div>
          </div>
          <div className="max-lg:hidden flex space-x-1 items-center">
            <LanguageSelector />
          </div>
        </div>
        <header className="sticky top-0  z-10 transition-transform duration-300 w-full bg-white">
          <div className="w-full flex justify-center">
            <div className="container py-6 flex justify-between items-center">
              <Image src={"/logo.svg"} height={24} width={118} alt="logo" />

              <nav className="max-md:hidden">
                <ul className="flex space-x-12">
                  <li>Home</li>
                  <li>Contact</li>
                  <li>About</li>
                  <li>Sign Up</li>
                </ul>
              </nav>

              <div className="flex space-x-6">
                <SearchForm />
                <div className="flex space-x-4">
                  <Image
                    src={"/icons/heart-black.svg"}
                    height={24}
                    width={24}
                    alt="heart-icon"
                  />
                  <Image
                    src={"/icons/cart-black.svg"}
                    height={24}
                    width={24}
                    alt="cart-icon"
                  />
                </div>
              </div>
            </div>
          </div>
          <Separator orientation="horizontal" className="bg-neutral-100" />
        </header>
        <main className="w-full flex flex-col items-center">{children}</main>
      </body>
    </html>
  );
}
