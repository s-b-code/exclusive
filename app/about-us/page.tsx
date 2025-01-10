import Image from "next/image";
import HighlightCard from "./_components/highlight-card";
import FeaturesSection from "../_components/features-section";
import TeamMembersCarousel from "./_components/team-members-carousel";

export default function AboutUsPage() {
  return (
    <div className="page-view flex flex-col items-center space-y-36">
      <section id="story" className=" flex flex-row-reverse items-end gap-20">
        <Image
          src={"/aboutus-screen-image.png"}
          width={837}
          height={609}
          alt="About us image illustration"
        />
        <div className="self-center flex flex-col space-y-10 w-1/4 h-full">
          <h1 className="text-5xl font-semibold tracking-wider">Our story</h1>
          <div className="flex flex-col space-y-6">
            <p>
              Launced in 2015, Exclusive is South Asia&apos;s premier online
              shopping makterplace with an active presense in Bangladesh.
              Supported by wide range of tailored marketing, data and service
              solutions, Exclusive has 10,500 sallers and 300 brands and serves
              3 millioons customers across the region.
            </p>
            <p>
              Exclusive has more than 1 Million products to offer, growing at a
              very fast. Exclusive offers a diverse assotment in categories
              ranging from consumer.
            </p>
          </div>
        </div>
      </section>
      <section
        id="highlights"
        className="container flex justify-center space-x-8"
      >
        <HighlightCard
          darkIcon={
            <Image
              src={"/icons/icon-shop-black.svg"}
              height={40}
              width={40}
              alt="Icon shop black"
            />
          }
          lightIcon={
            <Image
              src={"/icons/icon-shop-white.svg"}
              height={40}
              width={40}
              alt="Icon shop white"
            />
          }
          stat="10.5k"
          detail="Sellers active our site"
        />
        <HighlightCard
          darkIcon={
            <Image
              src={"/icons/sale-black.svg"}
              height={40}
              width={40}
              alt="Icon sale black"
            />
          }
          lightIcon={
            <Image
              src={"/icons/sale-white.svg"}
              height={40}
              width={40}
              alt="Icon sale white"
            />
          }
          stat="33k"
          detail="Monthly product sale"
        />
        <HighlightCard
          darkIcon={
            <Image
              src={"/icons/shopping-bag-black.svg"}
              height={40}
              width={40}
              alt="Icon shopping bag black"
            />
          }
          lightIcon={
            <Image
              src={"/icons/shopping-bag-white.svg"}
              height={40}
              width={40}
              alt="Icon shopping bag white"
            />
          }
          stat="10.5k"
          detail="Sellers active our site"
        />
        <HighlightCard
          darkIcon={
            <Image
              src={"/icons/money-bag-black.svg"}
              height={40}
              width={40}
              alt="Icon money bag black"
            />
          }
          lightIcon={
            <Image
              src={"/icons/money-bag-white.svg"}
              height={40}
              width={40}
              alt="Icon money bag white"
            />
          }
          stat="10.5k"
          detail="Sellers active our site"
        />
      </section>
      <TeamMembersCarousel />
      <FeaturesSection />
    </div>
  );
}
