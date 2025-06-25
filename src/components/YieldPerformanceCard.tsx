import React from "react";
import DashboardContent from "./DashboardContent";
import YieldPerformanceGraph from "./YieldPerformanceGraph";
import { YieldChartData } from "@/types";

interface YieldPerformanceCardProps {
  yieldData: YieldChartData[] | null;
  readonly height?: "sm" | "md" | "lg" | "xl" | "2xl";
}

const YieldPerformanceCard: React.FC<YieldPerformanceCardProps> = ({
  yieldData,
  height = "xl",
}) => {
  return (
    <DashboardContent height={height}>
      <div className="flex flex-col h-full">
        <div className="text-theme-quaternary text-sm md:text-base mb-1">
          Yield Performance (24h)
        </div>
        <div className="text-theme-tertiary text-xs md:text-sm mb-4">
          Real-time APY tracking across risk tiers
        </div>
        <div className="flex-1 w-full min-h-[250px] md:h-96">
          <YieldPerformanceGraph yieldData={yieldData  ?? []} />
        </div>
      </div>
    </DashboardContent>
  );
};

export default YieldPerformanceCard;
