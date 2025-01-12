import { DateRangePicker } from "@/components/ui/date-range-picker";
import React from "react";
import ShortStatCard, {
  ShortStatCardProps,
} from "./_components/short-stat-card";
import SaleGraph from "./_components/sale-graph";
import BestSellers from "./_components/best-sellers";
import RecentOrdersTable from "./_components/recent-orders-table";

const CmsPage = () => {
  const totalOrdersStat: ShortStatCardProps = {
    title: "Total orders",
    icon: "/icons/bag-handle-white.svg",
    totalAmount: 126.5,
    changePercent: 34.7,
    comparedToDate: new Date(),
  };
  const totalActiveOrdersStat: ShortStatCardProps = {
    title: "Active orders",
    icon: "/icons/bag-handle-white.svg",
    totalAmount: 118.9,
    changePercent: -10.3,
    comparedToDate: new Date(),
  };
  const totalCompletedOrdersStat: ShortStatCardProps = {
    title: "Completed orders",
    icon: "/icons/bag-handle-white.svg",
    totalAmount: 85.1,
    changePercent: 28.21,
    comparedToDate: new Date(),
  };
  const totalReturnOrdersStat: ShortStatCardProps = {
    title: "Return orders",
    icon: "/icons/bag-handle-white.svg",
    totalAmount: 213.5,
    changePercent: -19.1,
    comparedToDate: new Date(),
  };

  return (
    <div className="cms-page-container">
      <div className="flex justify-between items-center">
        <h1 className="cms-page-title">Dashboard</h1>
        <DateRangePicker />
      </div>
      <div className="flex justify-between space-x-4">
        <ShortStatCard {...totalOrdersStat} className={"basis-1/4"} />
        <ShortStatCard {...totalActiveOrdersStat} className={"basis-1/4"} />
        <ShortStatCard {...totalCompletedOrdersStat} className={"basis-1/4"} />
        <ShortStatCard {...totalReturnOrdersStat} className={"basis-1/4"} />
      </div>
      <div className="flex space-x-3">
        <SaleGraph className="basis-2/3" />
        <BestSellers className="basis-1/3" />
      </div>
      <RecentOrdersTable />
    </div>
  );
};

export default CmsPage;
