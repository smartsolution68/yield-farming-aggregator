"use client";

import React from "react";
import PageHeader from "./PageHeader";
import { Protocol as ProtocolType, StakeData } from "@/types/protocol";

interface PortfolioProps {
  readonly stakeData: StakeData;
  readonly protocol: ProtocolType;
}

const Portfolio: React.FC<PortfolioProps> = ({ stakeData, protocol }) => {
  return (
    <div className="h-full flex flex-col min-h-0">
      <PageHeader
        title="Portfolio"
        showBorder={true}
      />

      <div className="flex-1 overflow-y-auto px-1">
        <div className="space-y-4 md:space-y-6 pb-4 md:pb-6">
          {/* Total Value */}
          <div className="mt-4 md:mt-6">
            <div className="text-white text-[1.5rem] mt-2 mb-2">
              Total Portfolio Value
            </div>
            <div className="text-theme-primary text-xl font-semibold mb-2">
              ${stakeData.tvl}
            </div>
            <div className="text-primary-blue text-xl">
              {stakeData.tvlChange >= 0 ? "+" : ""}${Number(stakeData.tvlChange).toFixed(3)} ({stakeData.tvlChange / stakeData.tvl * 100 >= 0 ? "+" : ""}{Number(stakeData.tvlChange / stakeData.tvl * 100).toFixed(3)}%)
            </div>
          </div>

          {/* Performance Summary */}
          <div>
            <div className="text-theme-primary font-bold text-lg mb-2 md:mb-3">
              Performance
            </div>
            <div className="bg-transparent rounded-lg p-3 md:p-4 border border-theme">
              <div className="flex justify-between text-[1rem] mb-1 md:mb-2">
                <span className="text-white">30D APY:</span>
                <span className="text-primary-blue"> {protocol.apy_30D >= 0 ? "+" : ""}{protocol.apy_30D}%</span>
              </div>
              <div className="flex justify-between text-[1rem] mb-1 md:mb-2">
                <span className="text-white">7D APY:</span>
                <span className="text-primary-blue"> {protocol.apy_7d >= 0 ? "+" : ""}{protocol.apy_7d}%</span>
              </div>
              <div className="flex justify-between text-[1rem]">
                <span className="text-white">Total APY:</span>
                <span className="text-primary-blue">{protocol.baseAPY >= 0 ? "+" : ""}{protocol.baseAPY}%</span>
              </div>
            </div>
          </div>
          {/* Current APY Display */}
          <div className="hidden sm:block bg-gradient-to-r from-primary-blue/20 to-primary-blue/10 border border-primary-blue rounded p-3 flex-shrink-0">

            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 sm:gap-0">
              <div className="w-full sm:w-auto">
                <div className="text-primary-orange font-mono text-xs">
                  CURRENT APY
                </div>
                <div className="text-primary-blue font-mono text-xl sm:text-2xl font-bold">
                  {protocol.baseAPY >= 0 ? "+" : ""}{protocol.baseAPY}%
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
