import React from "react";
import DashboardContent from "./DashboardContent";
import { PortfolioData } from "@/types";

interface TotalPortfolioCardProps {
  readonly portfolioData: PortfolioData | null;
  readonly height?: "sm" | "md" | "lg" | "xl" | "2xl";
}

const formatCurrency = (value: number): string =>
  new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
  }).format(value);

const formatPercentage = (value: number): string => {
  const sign = value >= 0 ? "↗ +" : "↘ ";
  return `${sign}${Math.abs(value).toFixed(1)}%`;
};

const TotalPortfolioCard: React.FC<TotalPortfolioCardProps> = ({
  portfolioData,
  height = "md",
}) => {
  let changeColor = "text-green-500";
  if (portfolioData && portfolioData.change24h < 0) {
    changeColor = "text-red-500";
  }

  return (
    <DashboardContent height={height}>
      {portfolioData ? (
        <div className="flex flex-col h-full justify-between">
          <div className="text-theme-tertiary text-xs md:text-sm mb-2">
            Total Portfolio
          </div>
          <div className="text-xl md:text-2xl font-bold break-words flex-grow flex items-center">
            {formatCurrency(portfolioData.totalValue)}
          </div>
          <div
            className={`${changeColor} text-sm md:text-base flex items-center mt-2`}
          >
            {formatPercentage(portfolioData.change24h)} (24h)
          </div>
        </div>
      ) : (
        <div>No data available</div>
      )}
    </DashboardContent>
  );
};

export default TotalPortfolioCard;
