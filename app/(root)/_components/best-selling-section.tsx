"use client";

import Link from "next/link";
import SectionIntroHeader from "../../../components/section-intro-header";
import { flashSalesProducts } from "@/static-data";
import ProductCard from "@/components/product-card";
import { buttonVariants } from "@/components/ui/button";

const BestSellingSection = () => {
  return (
    <section
      id="best-selling"
      className="container mt-4 lg:mt-36 flex flex-col space-y-14"
    >
      <SectionIntroHeader title="This month" />
      <div className="mt-3 lg:mt-6 flex w-full justify-between items-center mb-5">
        <h1 className="section-heading">Best selling products</h1>
        <Link
          href={`/products?filter=best-selling`}
          className={buttonVariants({ variant: "default", size: "default" })}
        >
          View all
        </Link>
      </div>
      <div className="flex space-x-3">
        {flashSalesProducts.map(({ id, ...otherProperties }) => (
          <ProductCard
            className="basis-1/4"
            key={id}
            id={id}
            {...otherProperties}
            onAddToCart={() => {
              console.log("Add to cart", id);
            }}
            enableAddToWhishList
            onAddToWhishList={() => {
              console.log("Add to favorite", id);
            }}
            enableView
            onView={() => {
              console.log("View product", id);
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default BestSellingSection;
