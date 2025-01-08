"use client";

import Image from "next/image";
import SectionIntroHeader from "./section-intro-header";

const NewArrivalSection = () => {
  return (
    <section
      id="new-arrival"
      className="container mt-4 lg:mt-36 flex flex-col space-y-14"
    >
      <SectionIntroHeader title="Featured" />
      <h1 className="section-heading">New arrival</h1>
      <div className="grid grid-cols-2 grid-rows-2 gap-7 h-full">
        <div className="col-span-1 row-span-2  flex items-center justify-center">
          <Image
            src={"https://placehold.co/570x600/png"}
            height={600}
            width={570}
            className="w-full rounded-md"
            alt="image 1"
          />
        </div>
        <div className="col-span-1 row-span-1 flex items-center justify-center">
          <Image
            src={"https://placehold.co/570x284/png"}
            height={284}
            width={570}
            className="w-full rounded-md"
            alt="image 2"
          />
        </div>
        <div className="col-span-1 row-span-1 grid grid-cols-2 gap-7">
          <div className=" flex items-center justify-center">
            <Image
              src={"https://placehold.co/270x284/png"}
              height={284}
              width={270}
              className="w-full rounded-md"
              alt="image 3"
            />
          </div>
          <div className="flex items-center justify-center">
            <Image
              src={"https://placehold.co/270x285/png"}
              height={284}
              width={270}
              className="w-full rounded-md"
              alt="image 3"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewArrivalSection;
