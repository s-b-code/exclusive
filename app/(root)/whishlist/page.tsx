import ProductCard from "@/components/product-card";
import { Button } from "@/components/ui/button";
import { flashSalesProducts } from "@/static-data";
import React from "react";

export default function WhishListPage() {
  const whishListProducts = flashSalesProducts.slice(0, 4);

  async function handleRemoveFromWhishlist() {
    "use server";
    console.log("Remove from whishlist");
  }

  async function handleViewProduct() {
    "use server";
    console.log("View product");
  }

  return (
    <div className="page-container space-y-20">
      <section id="whishlist" className="flex flex-col ">
        <div className="flex justify-between w-full items-center">
          <h1 className="text-xl">Whishlist ({whishListProducts.length})</h1>
          <Button variant={"outline"}>Move All To Bag</Button>
        </div>
        <div className="flex space-x-8 mt-14">
          {whishListProducts.map((product) => (
            <div key={product.id} className="basis-1/4">
              <ProductCard
                {...product}
                enableDelete
                onDelete={handleRemoveFromWhishlist}
              />
            </div>
          ))}
        </div>
      </section>
      <section id="recommendation" className="container">
        <div className="flex justify-between w-full items-center">
          <div className="flex items-center space-x-4">
            <div className="w-5 h-10 rounded-md bg-secondary2" />
            <h1 className="text-xl">Just for you</h1>
          </div>
          <Button variant={"outline"}>See all</Button>
        </div>
        <div className="flex space-x-8 mt-14">
          {whishListProducts.map((product) => (
            <div key={product.id} className="basis-1/4">
              <ProductCard {...product} enableView onView={handleViewProduct} />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
