import StarRating from "@/components/star-rating";
import ProductViewCarousel from "./_components/product-view-carousel";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import Link from "next/link";
import PurchaseForm from "./_components/purchase-form";
import Image from "next/image";
import SectionIntroHeader from "@/components/section-intro-header";
import { flashSalesProducts } from "@/static-data";
import ProductCard from "@/components/product-card";

export default function ProductPage() {
  const productImages = [
    "https://placehold.co/170x170/png",
    "https://placehold.co/170x170/png",
    "https://placehold.co/170x170/png",
    "https://placehold.co/170x170/png",
  ];
  const productName = "Abc product";
  const rating = 4.5;
  const reviewCount = 150;
  const inStock = true;
  const price = 192.0;
  const description =
    "PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal Pressure sensitive.";
  const colors = ["#A0BCE0", "#E07575"];
  const selectedColor = 1;
  const sizes = ["XS", "S", "M", "L", "XL"];
  const selectedSize = 3;

  const relatedProducts = flashSalesProducts.slice(0, 4);

  return (
    <div className="page-container flex flex-col space-y-16">
      <div className="flex space-x-16">
        <div className="basis-3/4">
          <ProductViewCarousel
            images={productImages}
            productName={productName}
          />
        </div>
        <div className="basis-1/4 flex flex-col space-y-6">
          <div className="flex flex-col space-y-4">
            <h1 className="text-2xl font-medium">{productName}</h1>
            <div className="flex space-x-4">
              <div className="flex space-x-2">
                <StarRating rating={rating} />
                <p className="text-sm text-neutral-300">
                  ({reviewCount} reviews)
                </p>
              </div>
              <Separator orientation="vertical" className="bg-neutral-300" />
              <p
                className={cn(
                  "text-sm",
                  inStock ? "text-green-400/80" : "text-error-400/80"
                )}
              >
                {inStock ? "In stock" : "Out of stock"}
              </p>
            </div>
            <p className="text-2xl">
              <span className="font-serif">₹</span>
              {price}
            </p>
          </div>
          <p className="text-sm">{description}</p>
          <Separator className="bg-neutral-300" />
          <PurchaseForm
            colors={colors}
            selectedColor={selectedColor}
            sizes={sizes}
            selectedSize={selectedSize}
          />
          <div className="flex flex-col border border-neutral-300 rounded-lg">
            <div className="flex px-4 pb-4 pt-6 space-x-4 items-start">
              <Image
                src={"/icons/delivery-black.svg"}
                width={40}
                height={40}
                alt={"delivery icon"}
              />
              <div className="flex flex-col">
                <h3 className="font-medium">Free delivery</h3>
                <Link href={"#"} className="text-xs font-medium underline">
                  Enter your postal code for delivery availability
                </Link>
              </div>
            </div>
            <Separator className="bg-neutral-300" />
            <div className="flex px-4 pt-4 pb-6 space-x-4 items-start">
              <Image
                src={"/icons/return-black.svg"}
                width={40}
                height={40}
                alt={"delivery icon"}
              />
              <div className="flex flex-col">
                <h3 className="font-medium">Return delivery</h3>
                <p className="text-xs font-medium">
                  Free 30 days delivery returns.{" "}
                  <Link href={"#"} className="underline">
                    Details
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section
        id="related-products"
        className="container flex flex-col space-y-14"
      >
        <SectionIntroHeader title="Related items" />
        <div className="flex space-x-8">
          {relatedProducts.map((product) => (
            <ProductCard
              className="basis-1/4"
              key={product.id}
              {...product}
              showDiscountPercentage
              discountedPrice={product.discountPrice}
              enableAddToWhishList
              enableView
            />
          ))}
        </div>
      </section>
    </div>
  );
}
