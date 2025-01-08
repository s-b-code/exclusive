import { Button } from "@/components/ui/button";
import BestSellingSection from "./_components/best-selling-section";
import BrowseCategorySection from "./_components/browse-category-section";
import ExploreProductsSection from "./_components/explore-products-section";
import FeaturesSection from "./_components/features-section";
import FlashSalesSection from "./_components/flash-sales-section";
import IntroCategorySection from "./_components/intro-category-section";
import NewArrivalSection from "./_components/new-arrival-section";
import { ArrowIcon } from "@/icons";

export default function Home() {
  return (
    <>
      <IntroCategorySection />
      <FlashSalesSection />
      <BrowseCategorySection />
      <BestSellingSection />
      <ExploreProductsSection />
      <NewArrivalSection />
      <FeaturesSection />
      <div className="w-full flex justify-end mt-28 mb-8">
        <Button
          variant={"ghost"}
          className="mr-20 bg-secondary rounded-full p-2 w-12 h-12"
          size={"icon"}
        >
          <ArrowIcon className="-rotate-90" />
        </Button>
      </div>
    </>
  );
}
