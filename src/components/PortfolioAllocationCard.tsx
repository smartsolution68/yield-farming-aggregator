import React from "react";
import DashboardContent from "./DashboardContent";
import PortfolioAllocation from "./PortfolioAllocation";
import { AllocationItem } from "@/types";

interface PortfolioAllocationCardProps {
  allocationData: AllocationItem[] | null;
  readonly height?: "sm" | "md" | "lg" | "xl" | "2xl";
}

const PortfolioAllocationCard: React.FC<PortfolioAllocationCardProps> = ({
  allocationData,
  height = "xl",
}) => {
  return (
    <DashboardContent height={height}>
      <div className="flex flex-col h-full">
        <div className="text-theme-quaternary text-sm md:text-base mb-4">
          Portfolio Allocation
        </div>
        <div className="flex-1 w-full min-h-[320px] md:h-80">
          <PortfolioAllocation allocationData={allocationData} />
        </div>
      </div>
    </DashboardContent>
  );
};

export default PortfolioAllocationCard;
