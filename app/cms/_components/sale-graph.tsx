"use client";
import { cn } from "@/lib/utils";
import React, { useState } from "react";
import { ClassNameValue } from "tailwind-merge";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { CartesianGrid, Line, LineChart, XAxis, YAxis } from "recharts";
import { Toggle } from "@/components/ui/toggle";
import { Separator } from "@/components/ui/separator";

const chartData = [
  { month: "Jul", amount: 0 },
  { month: "Aug", amount: 0 },
  { month: "Sep", amount: 50 },
  { month: "Oct", amount: 100 },
  { month: "Nov", amount: 50 },
  { month: "Dec", amount: 400 },
];

const chartConfig = {
  desktop: {
    label: "Amount",
    color: "#DB4444",
  },
} satisfies ChartConfig;

interface SaleGraphProps {
  className?: ClassNameValue;
}
const SaleGraph = ({ className }: SaleGraphProps) => {
  const [view, setView] = useState<"weekly" | "monthly" | "yearly">("monthly");
  return (
    <div className={cn("cms-card", className)}>
      <div className="flex justify-between">
        <h2 className="text-xl font-semibold">Sale graph</h2>
        <div className="flex space-x-4">
          <Toggle pressed={view === "weekly"} onClick={() => setView("weekly")}>
            Weekly
          </Toggle>
          <Toggle
            pressed={view === "monthly"}
            onClick={() => setView("monthly")}
          >
            Monthly
          </Toggle>
          <Toggle pressed={view === "yearly"} onClick={() => setView("yearly")}>
            Yearly
          </Toggle>
        </div>
      </div>
      <Separator className="mt-4 bg-neutral-400/50" />
      <ChartContainer
        config={chartConfig}
        className="mt-9 h-80 flex items-center justify-center w-full"
      >
        <LineChart accessibilityLayer data={chartData}>
          <CartesianGrid vertical={false} />
          <YAxis dataKey="amount" tickLine={false} tickMargin={8} />
          <XAxis dataKey="month" tickLine={false} tickMargin={8} />
          <ChartTooltip
            cursor={false}
            content={<ChartTooltipContent hideLabel />}
          />
          <Line
            dataKey="amount"
            type="natural"
            stroke="var(--color-desktop)"
            strokeWidth={2}
            dot={false}
          />
        </LineChart>
      </ChartContainer>
    </div>
  );
};

export default SaleGraph;
