import Image from "next/image";
import React from "react";

const data: {
  title: string;
  description: string;
  icon: string;
}[] = [
  {
    icon: "/icons/delivery-white.svg",
    title: "Free and fast delivery",
    description: "Free delivery for all orders over $140",
  },
];
const FeaturesSection = () => {
  return (
    <section className="flex items-center mt-36 space-x-20">
      <div className="flex flex-col items-center space-y-6 justify-center">
        <div className="relative h-14 w-14">
          <div className=" bg-button z-10 h-14 w-14 rounded-full p-2 absolute">
            <Image
              src={"/icons/delivery-white.svg"}
              width={40}
              height={40}
              alt="delivery icon"
            />
          </div>
          <div className="bg-button w-14 h-14 rounded-full animate-ping absolute" />
        </div>
        <div className="flex flex-col space-y-2 items-center justify-center">
          <strong className="uppercase text-sm font-semibold">
            free and fast delivery
          </strong>
          <p className="text-xs">
            Free delivery for all orders over{" "}
            <span className="font-serif">₹</span>140
          </p>
        </div>
      </div>
      <div className="flex flex-col items-center space-y-6 justify-center">
        <div className="relative h-14 w-14">
          <div className=" bg-button z-10 h-14 w-14 rounded-full p-2 absolute">
            <Image
              src={"/icons/customer-service-white.svg"}
              width={40}
              height={40}
              alt="customer service icon"
            />
          </div>
          <div className="bg-button w-14 h-14 rounded-full delay-100 animate-ping absolute" />
        </div>
        <div className="flex flex-col space-y-2 items-center justify-center">
          <strong className="uppercase text-sm font-semibold">
            24/7 CUSTOMER SERVICE
          </strong>
          <p className="text-xs">Friendly 24/7 customer support</p>
        </div>
      </div>
      <div className="flex flex-col items-center space-y-6 justify-center">
        <div className="relative h-14 w-14">
          <div className=" bg-button z-10 h-14 w-14 rounded-full p-2 absolute">
            <Image
              src={"/icons/money-back-white.svg"}
              width={40}
              height={40}
              alt="money back icon"
            />
          </div>
          <div className="bg-button w-14 h-14 rounded-full delay-200 animate-ping absolute" />
        </div>
        <div className="flex flex-col space-y-2 items-center justify-center">
          <strong className="uppercase text-sm font-semibold">
            MONEY BACK GUARANTEE
          </strong>
          <p className="text-xs">
            We return money within 30 days
            <span className="font-serif">₹</span>140
          </p>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
