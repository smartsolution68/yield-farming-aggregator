import React from "react";
import DashboardContent from "./DashboardContent";
import { PortfolioData } from "@/types";

interface AutoRebalanceCardProps {
  readonly portfolioData: PortfolioData | null;
  readonly height?: "sm" | "md" | "lg" | "xl" | "2xl";
}

const AutoRebalanceCard: React.FC<AutoRebalanceCardProps> = ({
  portfolioData,
  height = "md",
}) => {
  const statusText = portfolioData
    ? portfolioData.autoRebalance.isActive
      ? "Active"
      : "Paused"
    : "No data available";

  return (
    <DashboardContent height={height}>
      {portfolioData ? (
        <div className="flex flex-col h-full justify-between">
          <div className="text-theme-tertiary text-xs md:text-sm mb-2">
            Auto-Rebalance
          </div>
          <div className=" font-bold break-words flex-grow flex items-center gap-2">
            <div
              className={`w-2 h-2 rounded-full ${
                portfolioData.autoRebalance.isActive
                  ? "bg-green-500"
                  : "bg-orange-500"
              }`}
            />
            {statusText}
          </div>
          <div className="text-theme-light text-sm md:text-base flex items-center mt-2">
            Last Move: {portfolioData.autoRebalance.lastMoveTime}
          </div>
        </div>
      ) : (
        <div>No data available</div>
      )}
    </DashboardContent>
  );
};

export default AutoRebalanceCard;
