import React from "react";
import { IoAnalyticsOutline } from "react-icons/io5";
import DashboardContent from "./DashboardContent";
import { PortfolioData } from "@/types";

interface CurrentApyCardProps {
  readonly portfolioData: PortfolioData | null;
  readonly height?: "sm" | "md" | "lg" | "xl" | "2xl";
}

const formatApy = (apy: number): string => `${apy.toFixed(1)}%`;

const CurrentApyCard: React.FC<CurrentApyCardProps> = ({
  portfolioData,
  height = "md",
}) => {
  return (
    <DashboardContent height={height}>
      {portfolioData ? (
        <div className="flex flex-col h-full justify-between">
          <div className="text-theme-tertiary text-xs md:text-sm mb-2">
            Current APY
          </div>
          <div className="text-xl md:text-2xl font-bold break-words flex-grow flex items-center">
            {formatApy(portfolioData.currentAPY)}
          </div>
          <div className="text-green-500 flex items-center gap-2 text-sm md:text-base mt-2">
            <IoAnalyticsOutline size={14} className="md:hidden flex-shrink-0" />
            <IoAnalyticsOutline
              size={16}
              className="hidden md:block flex-shrink-0"
            />
            <span className="break-words">
              {portfolioData.isOptimized ? "Optimized" : "Rebalancing"}
            </span>
          </div>
        </div>
      ) : (
        <div>No data available</div>
      )}
    </DashboardContent>
  );
};

export default CurrentApyCard;
