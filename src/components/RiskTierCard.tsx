import React from "react";
import DashboardContent from "./DashboardContent";
import RiskTierTag from "./RiskTierTag";
import { getRiskLevel } from "../utils/protocolData";

interface RiskTierCardProps {
  readonly selectedProtocol: "STEADY" | "GROWTH" | "SURGE";
  readonly height?: "sm" | "md" | "lg" | "xl" | "2xl";
}

const RiskTierCard: React.FC<RiskTierCardProps> = ({
  selectedProtocol,
  height = "md",
}) => {
  return (
    <DashboardContent height={height}>
      <div className="flex flex-col h-full justify-between">
        <div className="text-theme-tertiary text-xs md:text-sm mb-2">
          Risk Tier
        </div>
        <div className="text-xl md:text-2xl font-bold break-words flex-grow flex items-center">
          <RiskTierTag name={selectedProtocol} />
        </div>
        <div className="text-theme-tertiary text-sm md:text-base flex items-center mt-2">
          {getRiskLevel(selectedProtocol)}
        </div>
      </div>
    </DashboardContent>
  );
};

export default RiskTierCard;
