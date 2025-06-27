import React from "react";
import { Protocol } from "@/types/protocol";

const formatApy = (apy: number): string => {
  const sign = apy >= 0 ? "+" : "";
  return `${sign}${apy.toFixed(1)}%`;
};

const getApyColor = (apy: number): string => {
  if (apy >= 50) return "text-emerald-600";
  if (apy >= 20) return "text-amber-600";
  if (apy >= 0) return "text-cyan-600";
  return "text-rose-600";
};

const ProtocolItem: React.FC<{ protocol: Protocol }> = ({ protocol }) => {
  return (
    <div className="w-full bg-card border-theme rounded-lg p-4  hover:bg-card-solid transition-colors">
      <div className="flex justify-between items-start mb-4">
        <div className="flex flex-col">
          <h3 className="text-theme-primary text-lg font-semibold">
            {protocol.projectName} {protocol.token}
          </h3>
          <p className="text-white text-sm mt-1">
            TVL: {protocol.tvlUsd}
          </p>
        </div>
        <div className="text-right">
          <div className={`text-2xl font-bold ${getApyColor(protocol.baseAPY)}`}>
            {formatApy(protocol.baseAPY)}
          </div>
          <div className="text-white text-sm">APY</div>
        </div>
      </div>
    </div>
  );
};

export default ProtocolItem;
