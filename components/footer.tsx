import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Separator } from "./ui/separator";

const Footer = () => {
  return (
    <div className="flex flex-col w-full items-center pt-20 pb-6">
      <div className="flex space-x-24">
        <div className="flex flex-col basis-1/4">
          <Image
            src={"/logo-white.svg"}
            alt="site logo"
            width={118}
            height={24}
          />
          <strong className="text-xl font-medium mt-6">Subscribe</strong>
          <p className="text-xs font-normal mt-6">
            Get 10% off your first order
          </p>
          <div className="mt-4 flex border-text border-2 py-3 px-4 rounded-md">
            <input
              placeholder="enter your email"
              className="bg-black placeholder:text-text1 border-none focus:outline-none focus:ring-0"
            />
            <button>
              <Image
                src={"/icons/send-white.svg"}
                width={24}
                height={24}
                alt="send icon"
              />
            </button>
          </div>
        </div>
        <div className="flex flex-col space-y-6 basis-1/4">
          <h3 className="text-xl font-medium">Support</h3>
          <div className="flex flex-col space-y-4 text-xs font-normal">
            <p>
              EN-8, New Diary Colony, Durgapur, Burdwan, West Bengal - 713212,
              India
            </p>
            <p>subhajitbera8710@gmail.com</p>
            <p>+91 8710024340</p>
          </div>
        </div>
        <div className="flex flex-col space-y-6 basis-1/4">
          <h3 className="text-xl font-medium">Account</h3>
          <div className="flex flex-col space-y-4 text-xs font-normal">
            <Link href={"/account"}>My Account</Link>
            <Link href={"/login"}>Login / Register</Link>
            <Link href={"/cart"}>Cart</Link>
            <Link href={"/whishlist"}>Whishlist</Link>
            <Link href={"/products"}>Shop</Link>
          </div>
        </div>
        <div className="flex flex-col space-y-6 basis-1/4">
          <h3 className="text-xl font-medium">Quick Link</h3>
          <div className="flex flex-col space-y-4 text-xs font-normal">
            <Link href={"/privacy-policy"}>Privacy policy</Link>
            <Link href={"/terms"}>Terms of use</Link>
            <Link href={"/faq"}>FAQ</Link>
            <Link href={"/contact"}>Contact</Link>
          </div>
        </div>
      </div>
      <Separator className="bg-text1/50 mt-16" />
      <div className="flex justify-center mt-4 font-normal text-sm text-text1 space-x-2">
        <span>©</span>
        <span>Copyright Rimel 2022. All right reserved</span>
      </div>
    </div>
  );
};

export default Footer;
